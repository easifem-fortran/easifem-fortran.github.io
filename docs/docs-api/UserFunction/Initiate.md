# Initiate

Initiate an instance of `UserFunction`

<span class="badge badge--secondary"> @ConstructorMethods </span>

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE auf_Initiate(obj, param)
    CLASS(UserFunction_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
  END SUBROUTINE auf_Initiate
END INTERFACE
```
