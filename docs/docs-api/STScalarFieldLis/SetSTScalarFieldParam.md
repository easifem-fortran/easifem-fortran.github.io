# SetSTScalarFieldParam

This method sets the parameter necessary for constructing the `STScalarField` instance.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE setSTScalarFieldParam(param, name, timeCompo, &
    & fieldType)
    TYPE(ParameterList_), INTENT(INOUT) :: param
    CHARACTER(*), INTENT(IN) :: name
    INTEGER(I4B), INTENT(IN) :: timeCompo
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: fieldType
  END SUBROUTINE setSTScalarFieldParam
END INTERFACE
```
