# CheckEssentialParam

Check essential parameters required for constructing the [DirichletBC_](DirichletBC_.md)

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE CheckEssentialParam(obj, param)
    CLASS(DirichletBC_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
  END SUBROUTINE CheckEssentialParam
END INTERFACE
```


