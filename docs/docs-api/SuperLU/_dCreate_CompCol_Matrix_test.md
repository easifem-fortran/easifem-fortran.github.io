```fortran
PROGRAM main
USE easifemBase
USE SuperLUInterface, ONLY: SuperMatrix
IMPLICIT NONE

TYPE(SuperMatrix), TARGET :: A, B
INTEGER(I4B) :: m, n, nnz
REAL(DFP), ALLOCATABLE :: nzval(:)
INTEGER(I4B), ALLOCATABLE :: rowind(:)
INTEGER(I4B), ALLOCATABLE :: colptr(:)

m = 5; n = 5; nnz = 12

nzval = [19, 12, 12, 21, 12, 12, 21, 16, 21, 5, 21, 18]
rowind = [0, 1, 4, 1, 2, 4, 0, 2, 0, 3, 3, 4]
colptr = [0, 3, 6, 8, 10, 12]
```

Let us create Suermatrix A in `NCformat`.

```fortran
CALL dCreate_CompCol_Matrix( &
  & A, m, n, nnz, nzval, rowind, colptr, &
  & stype_t%SLU_NC, dtype_t%SLU_D, mtype_t%SLU_GE)
```

The content is of this matrix is give below:

```fortran
CALL dPrint_CompCol_Matrix(CString("A before "), A)
```

```txt
CompCol matrix A before:
Stype 0, Dtype 1, Mtype 0
nrow 5, ncol 5, nnz 12
nzval: 19.000000  12.000000  12.000000  21.000000  12.000000  12.000000  21.000000  16.000000  21.000000  5.000000  21.000000  18.000000  
rowind: 0  1  4  1  2  4  0  2  0  3  3  4  
colptr: 0  3  6  8  10  12
```

Now, let us change the contents of `nzval`

```fortran
nzval = 10.0_DFP
```

Let us print this matrix, you will notice that the contents of A has been updated.

```fortran
CALL dPrint_CompCol_Matrix(CString("A after changing nzval "), A)
```

```txt {4}
CompCol matrix A after changing nzval:
Stype 0, Dtype 1, Mtype 0
nrow 5, ncol 5, nnz 12
nzval: 10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  
rowind: 0  1  4  1  2  4  0  2  0  3  3  4  
colptr: 0  3  6  8  10  12
```

Let us temper with the colptr, and see its impact on A.

```fortran
colptr(2) = 2
CALL dPrint_CompCol_Matrix(CString("A after changing colptr "), A)
```

You can see that in Line number 6, colptr is changed.

```txt {6}
CompCol matrix A after changing colptr:
Stype 0, Dtype 1, Mtype 0
nrow 5, ncol 5, nnz 12
nzval: 10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  
rowind: 0  1  4  1  2  4  0  2  0  3  3  4  
colptr: 0  2  6  8  10  12
```

If you destroy A and try to print `nzval`, then the behavior is undetermined. Therefore, it is better to assume that deallocating A means deallocating nzval.

```fortran
CALL Destroy_CompCol_Matrix(A)
CALL Display(nzval, "nzval = ")
```

```fortran
END PROGRAM main
```
