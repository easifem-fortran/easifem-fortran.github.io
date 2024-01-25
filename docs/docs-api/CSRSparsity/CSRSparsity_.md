---
sidebar_position: 2
---

# Structure

`CSRSparsity_` is data type for handling `CSRMatrix_` in EASIFEM.

It is encapsulated inside `CSRMatrix_`, and contains only the sparsity pattern not the matrix values, which we can use a single instance of `CSRSparsity_` to define several `CSRMatrix_`.

The structure is given below.

```fortran
TYPE :: CSRSparsity_
INTEGER( I4B ) :: nnz = 0
INTEGER( I4B ) :: ncol = 0
INTEGER( I4B ) :: nrow = 0
LOGICAL( LGT ) :: isSorted = .FALSE.
LOGICAL( LGT ) :: isInitiated = .FALSE.
LOGICAL( LGT ) :: isSparsityLock = .FALSE.
INTEGER( I4B ), ALLOCATABLE :: IA( : )
INTEGER( I4B ), ALLOCATABLE :: JA( : )
TYPE( IntVector_ ), ALLOCATABLE :: row( : )
TYPE( DOF_ ) :: dof
END TYPE CSRSparsity_
```

- `IA` : size of IA is number of rows in the sparse matrix. It contains indices for accessing the entries in `JA`. For example, `IA( iRow )` to `IA( iRow + 1 ) - 1` are indices of entries of matrix of `iRow`.
- `JA`: size of `JA` is `NNZ`. `JA` contains the column indices.
