This example show how to use `GetIndex`.

Import modules and declare variable

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE( DOF_ ) :: obj
    INTEGER( I4B ), ALLOCATABLE :: indx( : )
```

Initiate an instance of [DOF_](DOF_.md)

```fortran
    CALL Initiate( obj, tNodes=[10, 10], &
      & names=["V", "P"], spaceCompo=[3, 1], &
      & timeCompo=[1, 1], storageFMT = FMT_NODES )
```

GetIndex

```fortran
    indx=GetIndex( obj, nodeNum=1 )
    CALL OK( ALL(indx .EQ. [1,2,3,4]), "indx .EQ. [1,2,3,4]:" )
```


```fortran
    indx=GetIndex( obj, nodeNum=5 )
    CALL OK( ALL(indx .EQ. [17,18,19,20]), "indx .EQ. [17,18,19,20]" )
```


```fortran
    indx = GetIndex( obj, nodeNum=1, iVar=1 )
    CALL OK( ALL(indx .Eq. [1,2,3]), "indx .Eq. [1,2,3]")
```


```fortran
    indx = GetIndex( obj, nodeNum=1, varName="V" )
    CALL OK( ALL(indx .Eq. [1,2,3]), "indx .Eq. [1,2,3]")
```


```fortran
    indx = GetIndex( obj, nodeNum=1, iVar=2 )
    CALL OK( ALL(indx .Eq. [4]), "indx .Eq. [4]")
```


```fortran
    indx = GetIndex( obj, nodeNum=1, varName="P" )
    CALL OK( ALL(indx .Eq. [4]), "indx .Eq. [4]")
```


```fortran
    indx = GetIndex( obj, nodeNum=2, iVar=1 )
    CALL OK( ALL(indx .Eq. [5,6,7]), "indx .Eq. [5,6,7]")
```


```fortran
    indx = GetIndex( obj, nodeNum=2, iVar=2 )
    CALL OK( ALL(indx .Eq. [8]), "indx .Eq. [8]")
```


```fortran
    indx = GetIndex( obj, nodeNum=[1,2], iVar=1 )
    CALL OK( ALL(indx .Eq. [1,2,3,5,6,7]), "indx .Eq. [1,2,3,5,6,7]")
```


```fortran
    indx = [GetIndex( obj, nodeNum=1, iVar=1, idof=1 )]
    CALL OK( ALL(indx .Eq. [1]), "indx .Eq. [1]")
```


```fortran
    indx = [GetIndex( obj, nodeNum=1, iVar=1, idof=2 )]
    CALL OK( ALL(indx .Eq. [2]), "indx .Eq. [2]")
```


```fortran
    indx = [GetIndex( obj, nodeNum=1, iVar=1, idof=3 )]
    CALL OK( ALL(indx .Eq. [3]), "indx .Eq. [3]")
```


```fortran
    indx = [GetIndex( obj, nodeNum=2, iVar=1, idof=1 )]
    CALL OK( ALL(indx .Eq. [5]), "indx .Eq. [5]")
```


```fortran
    indx = [GetIndex( obj, nodeNum=2, iVar=1, idof=2 )]
    CALL OK( ALL(indx .Eq. [6]), "indx .Eq. [6]")
```


```fortran
    indx = [GetIndex( obj, nodeNum=2, iVar=1, idof=3 )]
    CALL OK( ALL(indx .Eq. [7]), "indx .Eq. [7]")
```

```fortran
    CALL Deallocate( obj )
END PROGRAM main
```
