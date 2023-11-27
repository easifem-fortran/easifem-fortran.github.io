In this program CSRMatrix is transferred to SuperLU in transpose form in NCFormat.

`dgssvx` is used to solve and factored the matrix We solve a transpose system many RHS are sovled matrix is read from matrix market

```fortran
PROGRAM main
USE easifemBase
USE SuperLUInterface, ONLY: SuperMatrix, superlu_options_t, &
  & SuperLUStat_t, DNFormat, GlobalLU_t, mem_usage_t

TYPE(CSRMatrix_) :: csrmat
REAL(DFP), ALLOCATABLE :: val(:), dense_csrmat(:, :), rhs(:), &
  & exact_sol(:), rhs_x(:)
INTEGER(I4B), ALLOCATABLE :: ia(:), ja(:), perm_c(:), perm_r(:)
REAL(DFP), PARAMETER :: s = 19, u = 21, p = 16, e = 5, r = 18, l = 12

TYPE(SuperMatrix), TARGET :: sluA, sluB, sluL, sluU, sluX
TYPE(superlu_options_t) :: options
TYPE(SuperLUStat_t) :: stat
TYPE(DNFormat), POINTER :: dnformat_ptr
TYPE(GlobalLU_t) :: Glu
TYPE(mem_usage_t) :: mem_usage
INTEGER(i4b) :: nrhs
REAL(DFP), POINTER :: sol(:)
INTEGER(I4B), ALLOCATABLE :: etree(:)
CHARACTER(1, kind=C_CHAR) :: equed(2)
REAL(DFP), ALLOCATABLE :: sluR(:), sluC(:), ferr(:), berr(:)
TYPE(C_PTR) :: sluWork
INTEGER(I4B) :: lwork
REAL(DFP) :: rcond, recip_pivot_growth
CHARACTER(*), PARAMETER :: matrix_name = "./matrixMarket/bcsstk17.mtx"

CALL IMPORT(csrmat, matrix_name, SPARSE_FMT_COO)

ja = csrmat%csr%ja - 1
ia = csrmat%csr%ia - 1
val = csrmat%A

CALL Display(SIZE(csrmat, 1), "csrmat = ")
CALL Display(SIZE(csrmat, 2), "csrmat = ")
CALL Display(GetNNZ(csrmat), "GetNNZ = ")

CALL dCreate_CompCol_Matrix( &
  & sluA, SIZE(csrmat, 1), SIZE(csrmat, 2), GetNNZ(csrmat), val, &
  & ja, ia, stype_t%SLU_NC, dtype_t%SLU_D, mtype_t%SLU_GE)

nrhs = 1
rhs = ones(SIZE(csrmat, 1) * nrhs, 1.0_DFP)
CALL Reallocate(exact_sol, SIZE(csrmat, 1))
CALL RANDOM_NUMBER(exact_sol)
exact_sol = exact_sol * 10
CALL MatVec(obj=csrmat, x=exact_sol, y=rhs)

CALL dCreate_Dense_Matrix(sluB, SIZE(csrmat, 1), nrhs, rhs, SIZE(csrmat, 1), &
  & stype_t%SLU_DN, dtype_t%SLU_D, mtype_t%SLU_GE)

CALL Reallocate(perm_r, SIZE(csrmat, 1), perm_c, SIZE(csrmat, 2))

CALL set_default_options(options)
options%Equil = yes_no_t%YES
options%Trans = Trans_t%TRANS
options%ColPerm = colperm_t%COLAMD
options%Fact = Fact_t%DOFACT
options%IterRefine = IterRefine_t%SLU_DOUBLE
options%PivotGrowth = yes_no_t%YES
options%DiagPivotThresh = 1.0
options%ConditionNumber = yes_no_t%YES

CALL Reallocate(etree, SIZE(csrmat, 2))
CALL Reallocate(sluR, SIZE(csrmat, 1))
CALL Reallocate(sluC, SIZE(csrmat, 2))
CALL Reallocate(ferr, nrhs)
CALL Reallocate(berr, nrhs)
lwork = 0

rhs_x = zeros(SIZE(rhs), 1.0_DFP)

CALL dCreate_Dense_Matrix(sluX, SIZE(csrmat, 1), nrhs, rhs_x, &
  & SIZE(csrmat, 1), stype_t%SLU_DN, dtype_t%SLU_D, mtype_t%SLU_GE)

CALL StatInit(stat)

CALL dgssvx(options, sluA, perm_c, perm_r, &
  & etree, equed, sluR, sluC, sluL, sluU, &
  & sluWork, lwork, sluB, sluX, &
  & recip_pivot_growth, rcond, ferr, berr, &
  & Glu, mem_usage, stat, info)

IF (info .EQ. 0) THEN
  CALL display("success in dgssvx")
  ! CALL dPrint_CompCol_Matrix(CString("A "), sluA)
  ! CALL dPrint_Dense_Matrix(CString("B "), sluB)
  ! CALL dPrint_Dense_Matrix(CString("X "), sluX)
  ! CALL Display(perm_r, "perm_r = ")
  ! CALL Display(perm_c, "perm_c = ")
  !
  ! extract solution
  !
  CALL C_F_POINTER(sluX%Store, dnformat_ptr)
  CALL C_F_POINTER(dnformat_ptr%nzval, sol, [SIZE(csrmat, 1)])
  CALL Display(NORM2(sol - exact_sol), "Error = ")
  CALL Display(FString(equed), "equed = ")
ELSE
  CALL display(info, "error in dgssvx, info = ")
END IF

CALL Display("Recomputing...")

CALL RANDOM_NUMBER(exact_sol)
exact_sol = exact_sol * 20
CALL MatVec(obj=csrmat, x=exact_sol, y=rhs)
options%Fact = Fact_t%FACTORED

CALL dgssvx(options, sluA, perm_c, perm_r, &
  & etree, equed, sluR, sluC, sluL, sluU, &
  & sluWork, lwork, sluB, sluX, &
  & recip_pivot_growth, rcond, ferr, berr, &
  & Glu, mem_usage, stat, info)

IF (info .EQ. 0) THEN
  CALL display("success in dgssvx 2")
  ! CALL dPrint_CompCol_Matrix(CString("A "), sluA)
  ! CALL dPrint_Dense_Matrix(CString("B "), sluB)
  ! CALL dPrint_Dense_Matrix(CString("X "), sluX)
  CALL Display(Fstring(equed), "equed = ")
  ! CALL Display(perm_r, "perm_r = ")
  ! CALL Display(perm_c, "perm_c = ")
  !
  ! extract solution
  !
  ! CALL C_F_POINTER(sluX%Store, dnformat_ptr)
  ! CALL C_F_POINTER(dnformat_ptr%nzval, sol, [SIZE(csrmat, 1)])
  CALL Display(NORM2(sol - exact_sol), "Error = ")
  CALL Display(FString(equed), "equed = ")
ELSE
  CALL display(info, "error in dgssvx 2, info = ")
END IF
! !!
CALL Destroy_CompCol_Matrix(sluA)
CALL Destroy_SuperMatrix_Store(sluB)
CALL Destroy_SuperMatrix_Store(sluX)
CALL Destroy_SuperNode_Matrix(sluL)
CALL Destroy_CompCol_Matrix(sluU)
DEALLOCATE (rhs, rhs_x)
END PROGRAM main
```
