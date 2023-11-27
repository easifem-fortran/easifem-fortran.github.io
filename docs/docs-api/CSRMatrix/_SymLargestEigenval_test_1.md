```fortran
program main
use easifemBase
implicit none
```

Declaring variables:

```fortran
TYPE(CSRMatrix_) :: csrmat
CHARACTER(*), PARAMETER :: matrix_name = "./matrixMarket/fidap005.mtx"
REAL( DFP ), ALLOCATABLE :: rhs(:), sol(:), exact_sol(:) 
INTEGER( I4B ) :: info
REAL( DFP ) :: ev1
```

Import csrmatrix from matrix market.

```fortran
CALL IMPORT(csrmat, matrix_name, SPARSE_FMT_COO)
CALL Display(SIZE(csrmat, 1), "csrmat = ")
CALL Display(SIZE(csrmat, 2), "csrmat = ")
CALL Display(GetNNZ(csrmat), "GetNNZ = ")
```

Getting the largest eigenvalue.

```fortran
ev1 = SymLargestEigenVal(mat=csrmat, which="LM")
CALL Display(ev1, "ev1 = ")
```

```fortran
end program main
```
