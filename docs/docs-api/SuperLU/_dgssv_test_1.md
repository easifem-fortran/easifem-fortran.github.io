```fortran
! In this program CSRMatrix is transferred to SuperLU
! in NRFormat. `dgssv` is used to solve and factored the matrix

PROGRAM main
USE easifemBase
USE SuperLUInterface, ONLY: SuperMatrix, superlu_options_t, &
  & SuperLUStat_t, DNFormat

TYPE(CSRMatrix_) :: csrmat
REAL(DFP), ALLOCATABLE :: val(:), dense_csrmat(:, :), rhs(:), exact_sol(:)
INTEGER(I4B), ALLOCATABLE :: ia(:), ja(:), perm_c(:), perm_r(:)
REAL(DFP), PARAMETER :: s = 19, u = 21, p = 16, e = 5, r = 18, l = 12

TYPE(SuperMatrix), TARGET :: sluA, sluB, sluL, sluU
TYPE(superlu_options_t) :: options
TYPE(SuperLUStat_t) :: stat
TYPE(DNFormat), POINTER :: dnformat_ptr
INTEGER(i4b) :: nrhs
REAL(DFP), POINTER :: sol(:)

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

CALL dCreate_Dense_Matrix(sluB, SIZE(csrmat, 1), nrhs, rhs, SIZE(csrmat, 1), &
  & stype_t%SLU_DN, dtype_t%SLU_D, mtype_t%SLU_GE); 
CALL Reallocate(perm_r, SIZE(rhs, 1), perm_c, SIZE(sol, 1))
CALL display(perm_c, "perm_c")
CALL set_default_options(options)
options%ColPerm = colperm_t%COLAMD

CALL StatInit(stat)

CALL dgssv(options, sluA, perm_c, perm_r, sluL, sluU, sluB, stat, info); 
IF (info .EQ. 0) THEN
  CALL display("success in dgssv")
  CALL dPrint_CompCol_Matrix(CString("A "), sluA)
  CALL dPrint_Dense_Matrix(CString("B "), sluB)
  CALL Display(perm_r, "perm_r = ")
  CALL Display(perm_c, "perm_c = ")
  !
  ! extract solution
  !
  CALL C_F_POINTER(sluB%Store, dnformat_ptr)
  CALL C_F_POINTER(dnformat_ptr%nzval, sol, [SIZE(csrmat, 1)])
  CALL Display(sol, "sol = ")
ELSE
  CALL display("error in dgssv")
END IF
!!
CALL Destroy_CompCol_Matrix(sluA)
CALL Destroy_Dense_Matrix(sluB)
END PROGRAM main
```
