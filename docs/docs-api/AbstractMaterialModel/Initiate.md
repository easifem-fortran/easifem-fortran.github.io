# Initiate

Initiate an instance of `AbstractMaterialModel_`.

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

```fortran
ABSTRACT INTERFACE
  SUBROUTINE Initiate(obj, param)
    IMPORT :: AbstractMaterialModel_, ParameterList_
    CLASS(AbstractMaterialModel_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
  END SUBROUTINE Initiate
END INTERFACE
```
