# Shape

Returns the shape of [BlockMatrixField_](BlockMatrixField_.md).

## Interface

```fortran
INTERFACE
  FUNCTION Shape(obj) RESULT(ans)
    CLASS(BlockMatrixField_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans(2)
  END FUNCTION Shape
END INTERFACE
```
