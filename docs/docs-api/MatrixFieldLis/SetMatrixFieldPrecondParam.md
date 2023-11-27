# SetMatrixFieldPrecondParam

Set the parameters for constructing the preconditioner for [MatrixFieldLis_](./MatrixFieldLis_.md).

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetMatrixFieldPrecondParam( &
    & param, &
    & name, &
    & engine, &
    & lfil, mbloc, droptol, permtol, alpha)
    TYPE(ParameterList_), INTENT(INOUT) :: param
    !! Options to create precondition of [[MatrixField_]]
    INTEGER(I4B), INTENT(IN) :: name
    !! Name of precondition
    CHARACTER(*), INTENT(IN) :: engine
    !! "NATIVE_SERIE"
    !! "LIS_OMP"
    !! "LIS_MPI"
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: lfil
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: mbloc
    REAL(DFP), OPTIONAL, INTENT(IN) :: droptol
    !! Droptoleranace
    REAL(DFP), OPTIONAL, INTENT(IN) :: permtol
    !! permutation tolerance
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha
  END SUBROUTINE SetMatrixFieldPrecondParam
END INTERFACE
```
