# Size

Returns the size of MatrixField

## Interface

```fortran
INTERFACE
  FUNCTION Size(obj, dim) RESULT(ans)
    CLASS(MatrixField_), INTENT(IN) :: obj
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: dim
    INTEGER(I4B) :: ans
  END FUNCTION Size
END INTERFACE
```
