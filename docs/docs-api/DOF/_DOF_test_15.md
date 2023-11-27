This example show how to `GetNodeLoc` method of [[DOF_]].

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE( DOF_ ) :: obj
```

Initiate DOF

```fortran
    CALL Initiate( obj, tNodes=[20, 20], &
      & names=["V", "P"], spaceCompo=[3,1],  &
      & timeCompo=[2,2], storageFMT = FMT_NODES )
```


```fortran
    CALL OK( getNodeLoc(obj, 1, 1) .eq. 1, &
      & 'getNodeLoc(obj, 1, 1): ' )
```


```fortran
    CALL OK( getNodeLoc(obj, 1, 2) .eq. 2, &
      & 'getNodeLoc(obj, 1, 2): ' )
```


```fortran
    CALL OK( getNodeLoc(obj, 1, 3) .eq. 3, &
      & 'getNodeLoc(obj, 1, 3): ' )
```


```fortran
    CALL OK( getNodeLoc(obj, 1, 4) .eq. 4, &
      & 'getNodeLoc(obj, 1, 4): ' )
```


```fortran
    CALL OK( getNodeLoc(obj, 1, 5) .eq. 5, &
      & 'getNodeLoc(obj, 1, 5): ' )
```


```fortran
    CALL OK( getNodeLoc(obj, 1, 6) .eq. 6, &
      & 'getNodeLoc(obj, 1, 6): ' )
```


```fortran
    CALL OK( getNodeLoc(obj, 1, 7) .eq. 7, &
      & 'getNodeLoc(obj, 1, 7): ' )
```


```fortran
    CALL OK( getNodeLoc(obj, 1, 8) .eq. 8, &
      & 'getNodeLoc(obj, 1, 8): ' )
```


```fortran
    CALL OK( all(getNodeLoc(obj, 1) .eq. [1,160,8]), &
      & 'getNodeLoc(obj, 1): ' )
```


```fortran
    CALL OK( all(getNodeLoc(obj, 2) .eq. [2,160,8]), &
      & 'getNodeLoc(obj, 2): ' )
```


```fortran
    CALL OK( all(getNodeLoc(obj, 3) .eq. [3,160,8]), &
      & 'getNodeLoc(obj, 3): ' )
```


```fortran
    CALL OK( all(getNodeLoc(obj, 7) .eq. [7,160,8]), &
      & 'getNodeLoc(obj, 7): ' )
```


```fortran
    CALL OK( all(getNodeLoc(obj, 8) .eq. [8,160,8]), &
      & 'getNodeLoc(obj, 7): ' )
```


```fortran
    CALL Deallocate( obj )
END PROGRAM main
```

