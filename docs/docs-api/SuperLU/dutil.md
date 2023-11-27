# Utility

## `dCreate_CompCol_Matrix`

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

## `dCreate_CompRow_Matrix`

```fortran
! void
! dCreate_CompRow_Matrix(SuperMatrix *A, int m, int n, int nnz,
!                        double *nzval, int *colind, int *rowptr,
!                        Stype_t stype, Dtype_t dtype, Mtype_t mtype)

INTERFACE
  SUBROUTINE dCreate_CompRow_Matrix(A, m, n, nnz, nzval, colind, rowptr, &
    & stype, dtype, mtype) BIND(C, name="dCreate_CompRow_Matrix")
    IMPORT :: C_PTR, C_INT, C_DOUBLE, SuperMatrix
    TYPE(SuperMatrix), INTENT(INOUT) :: A
    INTEGER(C_INT), VALUE, INTENT(IN) :: m
    INTEGER(C_INT), VALUE, INTENT(IN) :: n
    INTEGER(C_INT), VALUE, INTENT(IN) :: nnz
    REAL(C_DOUBLE), INTENT(IN) :: nzval(*)
    INTEGER(C_INT), INTENT(IN) :: colind(*)
    INTEGER(C_INT), INTENT(IN) :: rowptr(*)
    INTEGER(C_INT), VALUE, INTENT(IN) :: stype
    INTEGER(C_INT), VALUE, INTENT(IN) :: dtype
    INTEGER(C_INT), VALUE, INTENT(IN) :: mtype
  END SUBROUTINE dCreate_CompRow_Matrix
END INTERFACE

PUBLIC :: dCreate_CompRow_Matrix

```
