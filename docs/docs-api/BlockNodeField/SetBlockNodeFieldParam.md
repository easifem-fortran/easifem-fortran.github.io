# SetBlockNodeFieldParam

Set the essential parameter for constructing an instance of BlockNodeField.

Calling example:

```fortran
CALL setBlockNodeFieldParam(ParameterList_::param, String::name(:), Integer::fieldType(:), Integer::spaceCompo(:), Integer::timeCompo(:))
```

## Interface

```fortran
 INTERFACE
  MODULE SUBROUTINE SetBlockNodeFieldParam(param, &
    & name, &
    & engine, &
    & physicalVarNames, &
    & spaceCompo, &
    & timeCompo, &
    & fieldType, &
    & comm, &
    & local_n, &
    & global_n)
    TYPE(ParameterList_), INTENT(INOUT) :: param
    !! Options to create [[BlockNodeField_]] will be stored in param
    CHARACTER(*), INTENT(IN) :: name
    !! Name of the block node field
    CHARACTER(*), INTENT(IN) :: engine
    !! Name of the engine
    CHARACTER(*), INTENT(IN) :: physicalVarNames(:)
    !! Names of the physical variables
    INTEGER(I4B), INTENT(IN) :: spaceCompo(:)
    !! Space components in each physical variable
    INTEGER(I4B), INTENT(IN) :: timeCompo(:)
    !! Time component in each physical variable
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: fieldType
    !! fieldType can be following
    !! FIELD_TYPE_NORMAL <-- DEFAULT
    !! FIELD_TYPE_CONSTANT
    !! FIELD_TYPE_CONSTANT_SPACE
    !! FIELD_TYPE_CONSTANT_TIME
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: comm
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: global_n
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: local_n
  END SUBROUTINE SetBlockNodeFieldParam
END INTERFACE
```

Parameters required for constructing an instance of `BlockNodeField_` class are given below

| name          | data type |        value         |                       comment |
|:------------- |:---------:|:--------------------:| -----------------------------:|
| engine        |  String   |   `NATIVE_SERIAL`    |                               |
| `name(:)`       |  String   |                      |             Name of the field |
| `fieldType(:)`  |  String   | `NORMAL`, `CONSTANT` |                               |
| `spaceCompo(:)` |  Integer  |                      |   Number of spatial component |
| `timeCompo(:)`  |  Integer  |                      | Number of temporal components |
|               |           |                      |                               |

This routine sets the essential parameters required for constructing the `BlockNodeField_`.

- `param` contains the parameters
- the size of `name`, `spaceCompo`, `timeCompo` `fieldType` should be same
- the size of `name` actually equal to the total number of physical var
- `name` name of each physical variable
- `spaceCompo` space components of each physical variable, it is optional. Default value is 1 space component per physical variable
- `timeCompo` time components of each physical variable. It is optional. Default value is 1.
- `fieldType` of each physical variable. It is optional. Default value is `FIELD_TYPE_NORMAL`.
