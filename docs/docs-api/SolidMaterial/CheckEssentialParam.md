# CheckEssentialParam

Check the essential parameters in the `ParameterList_`.

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE CheckEssentialParam(obj, param)
    CLASS(SolidMaterial_), INTENT(IN) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
  END SUBROUTINE CheckEssentialParam
END INTERFACE
```
