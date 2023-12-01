# Display

Display the content of the `AbstractMaterialModel_`.

<span class="badge badge--secondary"> @IOMethods </span>

## Interface

```fortran
ABSTRACT INTERFACE
  SUBROUTINE Display(obj, msg, unitNo)
    IMPORT :: AbstractMaterialModel_, I4B
    CLASS(AbstractMaterialModel_), INTENT(INOUT) :: obj
    CHARACTER(*), INTENT(IN) :: msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitNo
  END SUBROUTINE Display
END INTERFACE
```
