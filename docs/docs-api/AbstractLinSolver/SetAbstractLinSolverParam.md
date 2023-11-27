# SetAbstractLinSolverParam

Set the essential parameters required to construct an instance of abstract linear solver.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE setAbstractLinSolverParam(param, prefix, &
    & engine, solverName, preconditionOption, &
    & maxIter, atol, rtol, convergenceIn, convergenceType, &
    & relativeToRHS, KrylovSubspaceSize)
    TYPE(ParameterList_), INTENT(INOUT) :: param
    CHARACTER(*), INTENT(IN) :: prefix
    CHARACTER(*), INTENT(IN) :: engine
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: solverName
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: preconditionOption
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: maxIter
    REAL(DFP), OPTIONAL, INTENT(IN) :: atol
    REAL(DFP), OPTIONAL, INTENT(IN) :: rtol
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: convergenceIn
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: convergenceType
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: relativeToRHS
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: KrylovSubspaceSize
  END SUBROUTINE setAbstractLinSolverParam
END INTERFACE
```
