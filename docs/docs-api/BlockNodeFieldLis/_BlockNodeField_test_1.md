This example shows the usage of SetBlockNodeFieldParam and CheckEssentialParam from [BlockNodeFieldLis](BlockNodeFieldLis_.md)

```fortran
PROGRAM main
    USE easifemBase
    USE easifemClasses
    IMPLICIT NONE
    TYPE( BlockNodeFieldLis_ ) :: obj
    TYPE( ParameterList_ ) :: param
    CHARACTER( LEN = * ), PARAMETER :: engine="LIS_OMP"

    CALL FPL_INIT(); CALL param%initiate()
    CALL SetBlockNodeFieldParam( param=param, &
      & name='BlockNodeField', &
      & engine=engine, &
      & physicalVarNames=["V", "P" ], &
      & spaceCompo=[3, 1], &
      & timeCompo=[2, 2])

    !You can check out the data stored in param using following command.
    CALL param%print()

    CALL obj%checkEssentialParam( param )

    CALL param%Deallocate()
    CALL FPL_FINALIZE()
END PROGRAM main
```

```txt title="results"
[4] Key = BlockNodeField/physicalVarName1, Data Type = DLCA, Dimensions = 0, Bytes = 1, Value = V
[5] Key = BlockNodeField/physicalVarName2, Data Type = DLCA, Dimensions = 0, Bytes = 1, Value = P
[29] Key = BlockNodeField/name, Data Type = DLCA, Dimensions = 0, Bytes = 14, Value = BlockNodeField
[40] Key = BlockNodeField/comm, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = 0
[40] Key = BlockNodeField/local_n, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = 0
[42] Key = BlockNodeField/engine, Data Type = DLCA, Dimensions = 0, Bytes = 7, Value = LIS_OMP
[42] Key = BlockNodeField/global_n, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = 0
[46] Key = BlockNodeField/spaceCompo, Data Type = I4P, Dimensions = 1, Bytes = 8, Value = 3,1
[46] Key = BlockNodeField/fieldType, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = 1
[53] Key = BlockNodeField/timeCompo, Data Type = I4P, Dimensions = 1, Bytes = 8, Value = 2,2
[54] Key = BlockNodeField/tPhysicalVarNames, Data Type = I4P, Dimensions = 0, Bytes = 4, Value = 2
```
