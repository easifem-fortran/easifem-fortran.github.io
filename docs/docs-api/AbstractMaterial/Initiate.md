# Initiate

Initiate an instance of `AbstractMaterial_` class.

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

```fortran
INTERFACE AbstractMaterialInitiate
  MODULE SUBROUTINE am_Initiate(obj, param, prefix)
    CLASS(AbstractMaterial_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
    CHARACTER(*), OPTIONAL, INTENT(IN) :: prefix
  END SUBROUTINE am_Initiate
END INTERFACE AbstractMaterialInitiate
```
