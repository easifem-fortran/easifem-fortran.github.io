```fortran
program main
use easifemBase
implicit none
```

Declare variables.

```fortran
TYPE(CSRMatrix_) :: csrmat
CHARACTER(*), PARAMETER :: matrix_name = "./matrixMarket/small5.mtx"
REAL( DFP ), ALLOCATABLE :: dense(:,:) 
INTEGER( I4B ) :: info
```

Import csrmatrix from matrix market.

```fortran
CALL IMPORT(csrmat, matrix_name, SPARSE_FMT_COO)
CALL Display(SIZE(csrmat, 1), "csrmat = ")
CALL Display(SIZE(csrmat, 2), "csrmat = ")
CALL Display(GetNNZ(csrmat), "GetNNZ = ")
dense=csrmat
CALL Display(dense, "dense = ")
```

```txt
csrmat = 5
csrmat = 5
GetNNZ = 12
                  dense =                  
-------------------------------------------
19.0000   0.0000  21.0000  21.0000   0.0000
12.0000  21.0000   0.0000   0.0000   0.0000
 0.0000  12.0000  16.0000   0.0000   0.0000
 0.0000   0.0000   0.0000   5.0000  21.0000
12.0000  12.0000   0.0000   0.0000  18.0000
```

Let make symmetric method using upper part.

```fortran
CALL GetSym(obj=csrmat, from="U")
dense=csrmat
CALL Display(dense, "Sym CSR Mat=")
```

```text
                Sym CSR Mat=               
-------------------------------------------
19.0000   0.0000  21.0000  21.0000   0.0000
 0.0000  21.0000   0.0000   0.0000   0.0000
21.0000   0.0000  16.0000   0.0000   0.0000
21.0000   0.0000   0.0000   5.0000  21.0000
 0.0000   0.0000   0.0000  21.0000   0.0000
```

```fortran
end program main
```
