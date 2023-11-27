# Permute

Permute the columns of sparse matrix

## Interface

```fortran title="Interface"
INTERFACE
  MODULE FUNCTION Permute(obj, rowPERM, colPERM, &
    & isValues, symPERM) RESULT(ans)
    TYPE(CSRMatrix_), INTENT(IN) :: obj
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: rowPERM(:)
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: colPERM(:)
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isValues
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: symPERM
    TYPE(CSRMatrix_) :: ans
  END FUNCTION Permute
END INTERFACE
```

## Example

TODO
