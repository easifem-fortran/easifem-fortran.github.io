This example shows the usage of `GetIndex` method.

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE( DOF_ ) :: obj
    INTEGER( I4B ), ALLOCATABLE :: indx( : )
```

```fortran
    CALL Initiate( obj, tNodes=[20, 10], &
      & names=["V", "P"], spaceCompo=[3, 1], &
      & timeCompo=[1, 1], storageFMT = FMT_DOF )
```

```fortran
    indx = GetIndex( obj, nodeNum=5 )
    CALL OK( ALL(indx .EQ. [5,25,45, 65]), "test11.1 : " )
    indx = GetIndex( obj, nodeNum=10 )
    CALL OK( ALL(indx .EQ. [10,30,50, 70]), "test11.2 : " )
    indx = GetIndex( obj, nodeNum=5, iVar=1 )
    CALL OK( ALL(indx .EQ. [5,25,45]), "test11.3 : " )
    indx = GetIndex( obj, nodeNum=5, varName="V" )
    CALL OK( ALL(indx .EQ. [5,25,45]), "test11.4 : " )
    indx = [GetIndex( obj, nodeNum=5, iVar=2 )]
    CALL OK( ALL(indx .EQ. [65]), "test11.5 : " )
    indx = [GetIndex( obj, nodeNum=5, varName="P" )]
    CALL OK( ALL(indx .EQ. [65]), "test11.6 : " )
    indx = GetIndex( obj, nodeNum=10, iVar=1 )
    CALL OK( ALL(indx .EQ. [10, 30, 50]), "test11.7 : " )
    indx = [GetIndex( obj, nodeNum=10, iVar=2 )]
    CALL OK( ALL(indx .EQ. [70]), "test11.8 : " )
    indx = GetIndex( obj, nodeNum=[5,10], iVar=1 )
    CALL OK( ALL(indx .EQ. [5,10,25,30,45,50]), "test11.9 : " )
    indx = GetIndex( obj, nodeNum=[5,10], iVar=2 )
    CALL OK( ALL(indx .EQ. [65,70]), "test11.10 : " )
    indx = [GetIndex( obj, nodeNum=5, iVar=1, idof=1 )]
    CALL OK( ALL(indx .EQ. [5]), "test11.11 : " )
    indx = [GetIndex( obj, nodeNum=5, iVar=1, idof=2 )]
    CALL OK( ALL(indx .EQ. [25]), "test11.12 : " )
    indx = [GetIndex( obj, nodeNum=5, iVar=1, idof=3 )]
    CALL OK( ALL(indx .EQ. [45]), "test11.13 : " )
```

!!! settings "Cleanup"

```fortran
    CALL Deallocate( obj )
END PROGRAM main
```

