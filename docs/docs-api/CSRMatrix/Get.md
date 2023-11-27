# Get

This function returns a single value from the sparse MATRIX.

## Interface

```fortran title="Interface"
INTERFACE
  MODULE FUNCTION Get(obj, i, j) RESULT(Ans)
    TYPE(CSRMatrix_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: i, j
    REAL(DFP) :: Ans
  END FUNCTION Get
END INTERFACE
```
