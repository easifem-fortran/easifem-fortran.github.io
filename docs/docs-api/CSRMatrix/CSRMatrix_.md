# Structure

`CSRMatrix_` data type defines a sparse matrix in the CSR format. EASIFEM uses Sparsekit library for handling `CSRMatrix_`.

```fortran
TYPE :: CSRMatrix_
  LOGICAL( LGT ) :: csrOwnership = .TRUE.
    !! This variable, if true, denotes that csr is allocated inside the obj
  INTEGER( I4B ) :: tDimension = 2_I4B
  CHARACTER( LEN = 5 ) :: matrixProp = 'UNSYM'
  REAL( DFP ), ALLOCATABLE :: A( : )
  TYPE( CSRSparsity_ ) :: csr
END TYPE CSRMatrix_
```

- `csrOwnerShip` is true if memory for `csr` pointer is allocated while initiating an instance of `CSRMatrix_`.
- `tDimension` is the dimension of the matrix, it should be 2
- `matrixProp`, defines the properties of the matrix, this parameter is futuristic as it will be used for deploying optimized solvers based on the matrix properties.
- `A` contains the matrix value
- `csr` is an instance of [CSRSparsity](../CSRSparsity/CSRSparsity_.md) which contains the sparsity pattern.
