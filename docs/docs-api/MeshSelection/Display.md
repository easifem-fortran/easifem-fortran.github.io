# Display

Display the contents of an instance of `MeshSelection_`.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE Display(obj, msg, unitNo)
    CLASS(MeshSelection_), INTENT(IN) :: obj
    CHARACTER(*), INTENT(IN) :: msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitNo
  END SUBROUTINE Display
END INTERFACE
```
