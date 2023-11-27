# GetDiagonal

This subroutine returns the diagonal entries of sparse matrix.

This Routine calls the Saad's sparse library.

- `offset`: containing the `offset` of the wanted diagonal. The diagonal extracted is the one corresponding to the entries `a(i,j)` with `j-i = offset`. Therefore, `offset = 0` means the main diagonal
- `diag` : real array of length `nrow` containing the wanted diagonal. `diag` contains the diagonal (`a(i,j),j-i = offset`) as defined above.
- `idiag` = integer array. It contains the poisitions of diagonal in the original arrays `A`. If `idiag(i)=0` then it means that there was no diagonal found in `row=i`.

```fortran
MODULE SUBROUTINE GetDiagonal( obj, A, diag, idiag, offset )
  TYPE( CSRSparsity_ ), INTENT( IN ) :: obj
  REAL( DFP ), INTENT( IN ) :: A( : )
  REAL( DFP ), ALLOCATABLE, INTENT( INOUT ) :: diag( : )
    !! Diagonal entries
  INTEGER( I4B ), ALLOCATABLE, INTENT( INOUT ) :: idiag( : )
    !! Position of diagonal entries in `A(:)`
  INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: offset
    !! offset of the wanted diagonal
END SUBROUTINE GetDiagonal
```

The following routine is similar to the above routine, however, this routine does not return the position of diagonal in `A`.

```fortran
MODULE SUBROUTINE GetDiagonal( obj, A, diag, offset )
  TYPE( CSRSparsity_ ), INTENT( INOUT ) :: obj
  REAL( DFP ), INTENT( IN ) :: A( : )
    !! Sparse matrix values
  REAL( DFP ), ALLOCATABLE, INTENT( INOUT ) :: diag( : )
    !! Diagonal entries
  INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: offset
    !! offset of diagonal
END SUBROUTINE GetDiagonal
```
