# Size

This method returns the size of the field.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION Size(obj, dim) RESULT(ans)
    CLASS(AbstractMeshField_), INTENT(IN) :: obj
    INTEGER(I4B), OPTIONAL :: dim
    INTEGER(I4B) :: ans
  END FUNCTION Size
END INTERFACE
```
