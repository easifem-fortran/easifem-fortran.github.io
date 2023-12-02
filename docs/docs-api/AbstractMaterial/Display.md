# Display

Display the content of `AbstractMaterial_`

@<span class="badge badge--secondary"> @IOMethods </span>

## Interface

```fortran
INTERFACE AbstractMaterialDisplay
  MODULE SUBROUTINE obj_Display(obj, msg, unitNo)
    CLASS(AbstractMaterial_), INTENT(INOUT) :: obj
    CHARACTER(*), INTENT(IN) :: msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitNo
  END SUBROUTINE obj_Display
END INTERFACE AbstractMaterialDisplay
```
