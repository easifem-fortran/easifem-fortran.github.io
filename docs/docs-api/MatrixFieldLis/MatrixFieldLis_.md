# Structure

It handles the tangent-matrix in finite element computations.

- `MatrixFieldLis_` is a child of [MatrixField_](../MatrixField/MatrixField_.md).
- It uses `LIS_OMP` engine.
- It also defines a data type for storing the precondition matrix.

```fortran
TYPE, EXTENDS(MatrixField_) :: MatrixFieldLis_
  INTEGER(I4B), ALLOCATABLE :: lis_ia(:)
  INTEGER(I4B), ALLOCATABLE :: lis_ja(:)
```

![](figures/MatrixField1.svg)

- If the matrix is square, then the storage format is `FMT_NODES`
- If the matrix is Rectangle, then the storage format is `FMT_NODES`
