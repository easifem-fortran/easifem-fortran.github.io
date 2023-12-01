# IsMaterialPresent

This function returns `.TRUE.` if a material name is registered in `AbstractMaterial_` by calling `AddMaterial` method.

<span class="badge badge--secondary"> @GetMethods </span>

## Interface

```fortran
INTERFACE
  MODULE FUNCTION IsMaterialPresent(obj, name) RESULT(ans)
    CLASS(AbstractMaterial_), INTENT(IN) :: obj
    CHARACTER(*), INTENT(IN) :: name
    LOGICAL(LGT) :: ans
  END FUNCTION IsMaterialPresent
END INTERFACE
```
