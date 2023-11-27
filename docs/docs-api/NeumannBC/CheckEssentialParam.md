# CheckEssentialParam

Check essential parameters required for constructing the [NeumannBC_](NeumannBC_.md)

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE CheckEssentialParam(obj, param)
    CLASS(NeumannBC_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
  END SUBROUTINE CheckEssentialParam
END INTERFACE
```


