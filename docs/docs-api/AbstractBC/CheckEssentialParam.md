# CheckEssentialParam

Check essential parameters required for constructing the [AbstractBC](./AbstractBC_.md)

## Interface

```fortran
ABSTRACT INTERFACE
  SUBROUTINE CheckEssentialParam(obj, param)
    IMPORT :: AbstractBC_, ParameterList_
    CLASS(AbstractBC_), INTENT(INOUT) :: obj
    TYPE(ParameterList_), INTENT(IN) :: param
  END SUBROUTINE CheckEssentialParam
END INTERFACE
```
