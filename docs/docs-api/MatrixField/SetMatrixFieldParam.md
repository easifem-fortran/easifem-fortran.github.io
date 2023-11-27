# SetMatrixFieldParam

Set parameters necessary for constructing [MatrixField_](../MatrixField/MatrixField_.md)

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE setBlockMatrixFieldParam(param, name, matrixProp, &
    & physicalVarNames, spaceCompo, timeCompo, engine, fieldType)
    TYPE(ParameterList_), INTENT(INOUT) :: param
    !! Options to create [[BlockMatrixField_]] will be stored in this
    CHARACTER(*), INTENT(IN) :: name
    !! Name of the matrix field
    CHARACTER(*), INTENT(IN) :: matrixProp
    !! Matrix property, "SYM" or "UNSYM"
    CHARACTER(*), INTENT(IN) :: physicalVarNames(:)
    !! Name of physical variables
    INTEGER(I4B), INTENT(IN) :: spaceCompo(:)
    !! Number of space-components in each physicalVarNames, see [[DOF_]]
    INTEGER(I4B), INTENT(IN) :: timeCompo(:)
    !! Number of time-components in each physicalVarNames, see [[DOF_]]
    CHARACTER(*), INTENT(IN) :: engine
    !! engine
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: fieldType
    !! fieldType can be following
    !! FIELD_TYPE_NORMAL <-- DEFAULT
    !! FIELD_TYPE_CONSTANT
    !! FIELD_TYPE_CONSTANT_SPACE
    !! FIELD_TYPE_CONSTANT_TIME
  END SUBROUTINE setBlockMatrixFieldParam
END INTERFACE
```
