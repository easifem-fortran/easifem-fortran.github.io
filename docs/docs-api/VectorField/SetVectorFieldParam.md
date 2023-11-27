# SetVectorFieldParam

Set the parameters for constructing a vector field.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE setVectorFieldParam(param, name, spaceCompo, fieldType)
    TYPE(ParameterList_), INTENT(INOUT) :: param
    CHARACTER(*), INTENT(IN) :: name
    INTEGER(I4B), INTENT(IN) :: spaceCompo
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: fieldType
  END SUBROUTINE setVectorFieldParam
END INTERFACE
```
