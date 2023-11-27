# GetAbstractLinSolverParam

Get the essential parameters required to construct an instance of abstract linear solver.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE getAbstractLinSolverParam(param, prefix, &
    & engine, solverName, preconditionOption, &
    & maxIter, atol, rtol, convergenceIn, convergenceType, &
    & relativeToRHS, KrylovSubspaceSize)
    TYPE(ParameterList_), INTENT(IN) :: param
    CHARACTER(*), INTENT(IN) :: prefix
    CHARACTER(*), OPTIONAL, INTENT(OUT) :: engine
    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: solverName
    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: preconditionOption
    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: maxIter
    REAL(DFP), OPTIONAL, INTENT(OUT) :: atol
    REAL(DFP), OPTIONAL, INTENT(OUT) :: rtol
    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: convergenceIn
    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: convergenceType
    LOGICAL(LGT), OPTIONAL, INTENT(OUT) :: relativeToRHS
    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: KrylovSubspaceSize
  END SUBROUTINE getAbstractLinSolverParam
END INTERFACE
```
