# SetDirichletBCParam

Set parameters for constructing the dirichlet boundary condition.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE setDirichletBCParam(param, name, idof, nodalValueType, &
    & useFunction)
    TYPE(ParameterList_), INTENT(INOUT) :: param
    CHARACTER(*), INTENT(IN) :: name
    INTEGER(I4B), INTENT(IN) :: idof
    INTEGER(I4B), INTENT(IN) :: nodalValueType
    !! Space
    !! Time
    !! SpaceTime
    !! Constant
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: useFunction
  END SUBROUTINE setDirichletBCParam
END INTERFACE
```
