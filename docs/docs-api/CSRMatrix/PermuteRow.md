# PermuteRow

Permute the rows of sparse matrix

## Interface

```fortran title="Interface"
INTERFACE
  MODULE FUNCTION PermuteRow(obj, PERM, isValues) &
    & RESULT(ans)
    TYPE(CSRMatrix_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: PERM(:)
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isValues
    TYPE(CSRMatrix_) :: ans
  END FUNCTION PermuteRow
END INTERFACE
```

## Example

TODO
