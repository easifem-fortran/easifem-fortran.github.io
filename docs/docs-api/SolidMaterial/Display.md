# Display

Display the content of `SolidMaterial_`.

<span class="badge badge--secondary"> @IOMethods </span>

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE Display(obj, msg, unitNo)
    CLASS(SolidMaterial_), INTENT(INOUT) :: obj
    CHARACTER(*), INTENT(IN) :: msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitNo
  END SUBROUTINE Display
END INTERFACE
```
