# dCreate_Dense_Matrix

```fortran
! void
! dCreate_Dense_Matrix(SuperMatrix *X, int m, int n, double *x, int ldx,
!                     Stype_t stype, Dtype_t dtype, Mtype_t mtype)
INTERFACE
  SUBROUTINE dCreate_Dense_Matrix(A, m, n, x, ldx, stype, dtype, mtype) &
    & BIND(C, name="dCreate_Dense_Matrix")
    IMPORT :: C_PTR, C_INT, C_DOUBLE, SuperMatrix
    TYPE(SuperMatrix), INTENT(INOUT) :: A
    INTEGER(C_INT), VALUE, INTENT(IN) :: m
    INTEGER(C_INT), VALUE, INTENT(IN) :: n
    REAL(C_DOUBLE), INTENT(INOUT) :: x(*)
    INTEGER(C_INT), VALUE, INTENT(IN) :: ldx
    INTEGER(C_INT), VALUE, INTENT(IN) :: stype
    INTEGER(C_INT), VALUE, INTENT(IN) :: dtype
    INTEGER(C_INT), VALUE, INTENT(IN) :: mtype
  END SUBROUTINE dCreate_Dense_Matrix
END INTERFACE

PUBLIC :: dCreate_Dense_Matrix

```

import EXAMPLE26 from "./_dCreate_Dense_Matrix_test.md";

<EXAMPLE26 />
