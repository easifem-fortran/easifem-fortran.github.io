# dCreate_CompCol_Matrix

```fortran
! extern void
! dCreate_CompCol_Matrix(SuperMatrix *, int, int, int, double *,
!                        int *, int *, Stype_t, Dtype_t, Mtype_t);
INTERFACE
  SUBROUTINE dCreate_CompCol_Matrix(A, m, n, nnz, nzval, rowind, colptr, &
    & stype, dtype, mtype) BIND(C, name="dCreate_CompCol_Matrix")
    IMPORT :: C_PTR, C_INT, C_DOUBLE, SuperMatrix
    TYPE(SuperMatrix), INTENT(INOUT) :: A
    INTEGER(C_INT), VALUE, INTENT(IN) :: m
    INTEGER(C_INT), VALUE, INTENT(IN) :: n
    INTEGER(C_INT), VALUE, INTENT(IN) :: nnz
    REAL(C_DOUBLE), INTENT(INOUT) :: nzval(*)
    INTEGER(C_INT), INTENT(INOUT) :: rowind(*)
    INTEGER(C_INT), INTENT(INOUT) :: colptr(*)
    INTEGER(C_INT), VALUE, INTENT(IN) :: stype
    INTEGER(C_INT), VALUE, INTENT(IN) :: dtype
    INTEGER(C_INT), VALUE, INTENT(IN) :: mtype
  END SUBROUTINE dCreate_CompCol_Matrix
END INTERFACE
```

:::note
`A%Store` points to `nzval`, `rowind`, and `colptr`, therefore, if you change `nzval` etc., then changes will be reflected in A.
:::

import EXAMPLE30 from "./_dCreate_CompCol_Matrix_test.md";

<EXAMPLE30 />
