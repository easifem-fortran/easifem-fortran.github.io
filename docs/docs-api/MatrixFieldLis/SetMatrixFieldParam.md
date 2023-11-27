# SetMatrixFieldParam

Set parameters necessary for constructing [MatrixFieldLis_](./MatrixFieldLis_.md)

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetMatrixFieldParam( &
    & param, &
    & name, &
    & matrixProp, &
    & engine,  &
    & spaceCompo, &
    & timeCompo, &
    & fieldType, &
    & comm, &
    & local_n, &
    & global_n)
    TYPE(ParameterList_), INTENT(INOUT) :: param
    !! Options to create [[MatrixField_]] will be stored in this
    CHARACTER(*), INTENT(IN) :: name
    !! Name of the matrix field
    CHARACTER(*), INTENT(IN) :: matrixProp
    !! Matrix property, "SYM" or "UNSYM"
    CHARACTER(*), INTENT(IN) :: engine
    !! "NATIVE_SERIE"
    !! "LIS_OMP"
    !! "LIS_MPI"
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: spaceCompo
    !! Number of space-components, see [[DOF_]]
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: timeCompo
    !! Number of time-components, see [[DOF_]]
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: fieldType
    !! fieldType can be following
    !! FIELD_TYPE_NORMAL
    !! FIELD_TYPE_CONSTANT
    !! FIELD_TYPE_CONSTANT_SPACE
    !! FIELD_TYPE_CONSTANT_TIME
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: comm
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: local_n
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: global_n
  END SUBROUTINE SetMatrixFieldParam
END INTERFACE
```
