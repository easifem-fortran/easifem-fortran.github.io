```fortran
PROGRAM main
USE easifemBase
USE SuperLUInterface, ONLY: SuperMatrix
IMPLICIT NONE
TYPE(SuperMatrix), TARGET :: B
INTEGER(I4B) :: m, n, nrhs
REAL(DFP), ALLOCATABLE, TARGET:: rhs(:)

m = 5; n = 5; nrhs = 1
rhs = arange(1.0, 5.0)

CALL dCreate_Dense_Matrix(B, m, nrhs, rhs, m, stype_t%SLU_DN, dtype_t%SLU_D, mtype_t%SLU_GE); 
CALL dPrint_Dense_Matrix(CString("B before "), B)
```

The result is given below

```txt
Dense matrix B before:
Stype 6, Dtype 1, Mtype 0
nrow 5, ncol 1, lda 5

nzval: 1.000000  2.000000  3.000000  4.000000  5.000000
```

Now lets changes the `rhs` and print `B`. Please note that the contents of `B` will change.

```fortran
rhs = 10.0_DFP
CALL dPrint_Dense_Matrix(CString("B after changing nzval "), B)
```

```txt
Dense matrix B after changing nzval:
Stype 6, Dtype 1, Mtype 0
nrow 5, ncol 1, lda 5

nzval: 10.000000  10.000000  10.000000  10.000000  10.000000
```

- If you call `Destroy_CompCol_Matrix()` then `rhs` will be deallocated too. So you cannot access `rhs`.
- If you call `Destroy_Dense_Matrix()` then `rhs` will not be deallocated. But you cannot rely on the entries of `rhs`, so do not use these entries.
- However, if you call `Destroy_SuperMatrix_Store()`, then `rhs` will not be deallocated, but you cannot access the entries of `rhs`.

In summary, please use `Destroy_SuperMatrix_Store` to deallocate B, then deallocate or use `rhs` the way you want.

```fortran
CALL Destroy_SuperMatrix_Store(B)
!CALL Destroy_CompCol_Matrix(B)
!CALL Destroy_Dense_Matrix(B)
Deallocate(rhs)
END PROGRAM main
```
