# Structure

It handles the tangent-matrix in finite element computations.

- `MatrixField_` is a child of [AbstractMatrixField_](../AbstractMatrixField/AbstractMatrixField_.md).
- It uses `NATIVE_SERIAL` engine.
- It also defines a data type for storing the precondition matrix. This data type is called `MatrixFieldPrecondition_`, its header is given below.

```fortran
TYPE :: MatrixFieldPrecondition_
LOGICAL( LGT ) :: isInitiated = .FALSE.
INTEGER( I4B ) :: PmatName = 0
INTEGER( I4B ) :: nnz = 0
INTEGER( I4B ) :: ncol = 0
INTEGER( I4B ) :: nrow = 0
INTEGER( I4B ) :: lfil = 0
INTEGER( I4B ) :: mbloc = 0
REAL( DFP ) :: alpha = 0.0_DFP
REAL( DFP ) :: droptol = 0.0_DFP
REAL( DFP ) :: permtol = 0.0_DFP
REAL( DFP ), ALLOCATABLE :: A( : )
INTEGER( I4B ), ALLOCATABLE :: JA( : )
INTEGER( I4B ), ALLOCATABLE :: IA( : )
INTEGER( I4B ), ALLOCATABLE :: JU( : )
INTEGER( I4B ), ALLOCATABLE :: IPERM( : )
INTEGER( I4B ), ALLOCATABLE :: LEVS( : )
END TYPE MatrixFieldPrecondition_
```

The storage pattern of the precondition matrix depends upon the type of preconditioning. For example, Incomplete LU decomposition based preconditioners are stored in the modified sparse row (MSR) format, which is described by the Sparsekit library.

The storage format of a precondition matrix depends upon the linear solver library or engine. That is why EASIFEM hides the preconditioner from user.

**MSR format** We have used Modified Sparse Row, which is used by Sparsekit lib to store the precondition matrix, this data type is meant to be used internally only.

- `A(1:n)` contains the diagonal of the matrix.
- `A(n+2:nnz)` contains the nondiagonal elements of the matrix, stored row-wise
- `JA(n+2:nnz)` contains their column indices
- `JA(1:n+1)` Contains the pointer array for the nondiagonal, elements in `A(n+1:nnz)` and `JA(n+2:nnz)`, i.e., for `i .LE. n+1` `JA(i)` points to beginning of row `i` in arrays A, JA.
- Here, nnz = number of nonzero elements+1

```fortran title="MatrixField"
TYPE, EXTENDS(AbstractMatrixField_) :: MatrixField_
  LOGICAL(LGT) :: isRectangle = .FALSE.
  TYPE(CSRMatrix_) :: mat
  TYPE(MatrixFieldPrecondition_) :: Pmat
#ifdef USE_LIS
  INTEGER(I4B), ALLOCATABLE :: lis_ia(:)
  INTEGER(I4B), ALLOCATABLE :: lis_ja(:)
#endif
```

![](figures/MatrixField1.svg)

- If the matrix is square, then the storage format is `FMT_NODES`
- If the matrix is Rectangle, then the storage format is `FMT_NODES`
