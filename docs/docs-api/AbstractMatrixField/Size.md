# Size

Returns the size of AbstractMatrixField

## Interface

```fortran
INTERFACE
  FUNCTION Size(obj, dim) RESULT(ans)
    IMPORT :: AbstractMatrixField_, I4B
    CLASS(AbstractMatrixField_), INTENT(IN) :: obj
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: dim
    INTEGER(I4B) :: ans
  END FUNCTION Size
END INTERFACE
```
