In this program CSRMatrix is transferred to SuperLU in NRFormat.

`dgssvx` is used to solve and factored the matrix

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

val = [s, u, u, l, u, l, p, e, u, l, l, r]
ja = [1, 3, 4, 1, 2, 2, 3, 4, 5, 1, 2, 5]
ia = [1, 4, 6, 8, 10, 13]

CALL Initiate(obj=csrmat, A=val, ia=ia, ja=ja, MatrixProp="SYM")
dense_csrmat = csrmat
CALL display(dense_csrmat, "dense csr matrix = ")

ja = ja - 1
ia = ia - 1
CALL dCreate_CompRow_Matrix( &
  & sluA, SIZE(csrmat, 1), SIZE(csrmat, 2), GetNNZ(csrmat), val, &
  & ja, ia, stype_t%SLU_NR, dtype_t%SLU_D, mtype_t%SLU_GE)

nrhs = 1; rhs = ones(SIZE(csrmat, 1) * nrhs, 1.0_DFP)
exact_sol = arange(1.0, 5.0, 1.0)
CALL MatVec(obj=csrmat, x=exact_sol, y=rhs)
CALL display(rhs, "rhs = ")

CALL dCreate_Dense_Matrix(sluB, SIZE(csrmat, 1), nrhs, rhs, SIZE(csrmat, 1), &
  & stype_t%SLU_DN, dtype_t%SLU_D, mtype_t%SLU_GE); 
CALL Reallocate(perm_r, SIZE(csrmat, 1), perm_c, SIZE(csrmat, 2))
CALL set_default_options(options)
options%Equil = yes_no_t%YES
options%Trans = Trans_t%NOTRANS
options%ColPerm = colperm_t%COLAMD
options%Fact = Fact_t%DOFACT
options%IterRefine = IterRefine_t%SLU_DOUBLE
options%PivotGrowth = yes_no_t%YES
options%DiagPivotThresh = 0.01
options%ConditionNumber = yes_no_t%YES

CALL reallocate(etree, SIZE(csrmat, 2))
equed = CString("N")
CALL reallocate(sluR, SIZE(csrmat, 1))
CALL reallocate(sluC, SIZE(csrmat, 2))
CALL reallocate(ferr, nrhs)
CALL reallocate(berr, nrhs)
lwork = 0

rhs_x = zeros(SIZE(rhs), 1.0_DFP)
CALL dCreate_Dense_Matrix(sluX, SIZE(csrmat, 1), nrhs, rhs_x, &
  & SIZE(csrmat, 1), stype_t%SLU_DN, dtype_t%SLU_D, mtype_t%SLU_GE); 
CALL StatInit(stat)

CALL dgssvx(options, sluA, perm_c, perm_r, &
  & etree, equed, sluR, sluC, sluL, sluU, &
  & sluWork, lwork, sluB, sluX, &
  & recip_pivot_growth, rcond, ferr, berr, &
  & Glu, mem_usage, stat, info); 
IF (info .EQ. 0) THEN
  CALL display("success in dgssvx")
  CALL dPrint_CompCol_Matrix(CString("A "), sluA)
  CALL dPrint_Dense_Matrix(CString("B "), sluB)
  CALL dPrint_Dense_Matrix(CString("X "), sluX)
  ! CALL Display(perm_r, "perm_r = ")
  ! CALL Display(perm_c, "perm_c = ")
  !
  ! extract solution
  !
  CALL C_F_POINTER(sluX%Store, dnformat_ptr)
  CALL C_F_POINTER(dnformat_ptr%nzval, sol, [SIZE(csrmat, 1)])
  CALL Display(sol, "sol = ")
ELSE
  CALL display(info, "error in dgssvx, info = ")
  CALL display(mem_usage%for_lu, "mem_usage for lu = ")
  CALL display(mem_usage%total_needed, "mem_usage total_needed = ")
END IF
!!
CALL Destroy_CompCol_Matrix(sluA)
CALL Destroy_Dense_Matrix(sluB)
END PROGRAM main
```
