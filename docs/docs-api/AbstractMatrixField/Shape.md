# Shape

Returns the shape of AbstractMatrixField.

## Interface

```fortran
INTERFACE
  FUNCTION Shape(obj) RESULT(ans)
    IMPORT :: AbstractMatrixField_, I4B
    CLASS(AbstractMatrixField_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans(2)
  END FUNCTION Shape
END INTERFACE
```
