# SetRectangleMatrixFieldParam

Set parameters for constructing rectangle matrix field.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetRectangleMatrixFieldParam( &
    & param, &
    & name, &
    & matrixProp, &
    & physicalVarNames, &
    & spaceCompo, &
    & timeCompo, &
    & engine, &
    & fieldType)
    TYPE(ParameterList_), INTENT(INOUT) :: param
    !! Options to create [[BlockMatrixField_]] will be stored in this
    CHARACTER(*), INTENT(IN) :: name
    !! Name of the matrix field
    CHARACTER(*), INTENT(IN) :: matrixProp
    !! Matrix property, "SYM" or "UNSYM"
    CHARACTER(*), INTENT(IN) :: physicalVarNames(2)
    !! Name of physical variables
    INTEGER(I4B), INTENT(IN) :: spaceCompo(2)
    !! Number of space-components in each physicalVarNames, see [[DOF_]]
    INTEGER(I4B), INTENT(IN) :: timeCompo(2)
    !! Number of time-components in each physicalVarNames, see [[DOF_]]
    CHARACTER(*), OPTIONAL, INTENT(IN) :: engine
    !! "NATIVE_SERIE"
    !! "LIS_OMP"
    !! "LIS_MPI"
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: fieldType
    !! fieldType can be following
    !! FIELD_TYPE_NORMAL <-- DEFAULT
    !! FIELD_TYPE_CONSTANT
    !! FIELD_TYPE_CONSTANT_SPACE
    !! FIELD_TYPE_CONSTANT_TIME
  END SUBROUTINE SetRectangleMatrixFieldParam
END INTERFACE
```
