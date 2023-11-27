# MSR

Sparse matrix in Modified Sparse Row storage format.

```fortran
INTEGER :: JA( : )
REAL :: A( : )
```

- `A(1:n)` contains the diagonal of the matrix.
- `A(n+2:nnz)` contains the nondiagonal elements of the matrix, stored ROWWISE.
- `JA(n+2:nnz)` contains their column indices.
- `JA(1:n+1)` Contains the pointer array for the nondiagonal, elements in `A(n+1:nnz)` and `JA(n+2:nnz)`, i.e., for `i .LE. n+1`, `JA(i)` points to beginning of row `i` in arrays `A, JA`.
- Here, `nnz` = number of nonzero elements+1.
