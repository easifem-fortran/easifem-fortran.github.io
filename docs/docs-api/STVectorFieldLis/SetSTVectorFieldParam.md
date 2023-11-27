# SetSTVectorFieldParam

Set the parameters for constructing a space-time vector field.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE setSTVectorFieldParam(param, name, engine, &
    & spaceCompo, timeCompo, fieldType, comm, local_n, global_n)
    TYPE(ParameterList_), INTENT(INOUT) :: param
    CHARACTER(*), INTENT(IN) :: name
    CHARACTER(*), INTENT(IN) :: engine
    INTEGER(I4B), INTENT(IN) :: spaceCompo
    INTEGER(I4B), INTENT(IN) :: timeCompo
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: fieldType
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: comm
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: global_n
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: local_n
  END SUBROUTINE setSTVectorFieldParam
END INTERFACE
```
