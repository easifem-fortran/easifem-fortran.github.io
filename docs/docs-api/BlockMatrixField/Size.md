# Size

Returns the size of BlockMatrixField

## Interface

```fortran
INTERFACE
  FUNCTION Size(obj, dim) RESULT(ans)
    CLASS(BlockMatrixField_), INTENT(IN) :: obj
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: dim
    INTEGER(I4B) :: ans
  END FUNCTION Size
END INTERFACE
```
