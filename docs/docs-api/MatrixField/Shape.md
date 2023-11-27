# Shape

Returns the shape of [MatrixField_](../MatrixField/MatrixField_.md).

## Interface

```fortran
INTERFACE
  FUNCTION Shape(obj) RESULT(ans)
    CLASS(MatrixField_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans(2)
  END FUNCTION Shape
END INTERFACE
```
