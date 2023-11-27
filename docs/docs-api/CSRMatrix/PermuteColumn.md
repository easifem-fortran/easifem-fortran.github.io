# PermuteColumn

Permute the columns of sparse matrix

## Interface

```fortran title="Interface"
INTERFACE
  MODULE FUNCTION PermuteColumn(obj, PERM, isValues) &
    & RESULT(ans)
    TYPE(CSRMatrix_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: PERM(:)
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isValues
    TYPE(CSRMatrix_) :: ans
  END FUNCTION PermuteColumn
END INTERFACE
```

## Example

TODO
