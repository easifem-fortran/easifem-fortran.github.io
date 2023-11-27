# Shape

Returns the shape of [MatrixFieldLis_](./MatrixFieldLis_.md).

## Interface

```fortran
INTERFACE
  FUNCTION Shape(obj) RESULT(ans)
    CLASS(MatrixField_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans(2)
  END FUNCTION Shape
END INTERFACE
```
