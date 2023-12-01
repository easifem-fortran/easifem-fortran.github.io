# Initiate

Initiate an instance of `SolidMaterial_`.

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE Initiate(obj, param, prefix)
    CLASS(SolidMaterial_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    CHARACTER(*), OPTIONAL, INTENT(IN) :: prefix
  END SUBROUTINE Initiate
END INTERFACE
```
