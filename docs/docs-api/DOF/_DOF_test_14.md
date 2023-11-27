This example show how to `GetNodeLoc` method of [[DOF_]].

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE( DOF_ ) :: obj
```


```fortran
    CALL Initiate( obj, tNodes=[20, 10], &
      & names=["V", "P"], spaceCompo=[3,1],  &
      & timeCompo=[2,2], storageFMT = FMT_DOF )
```

`v`, spacecompo=1, timecompo=1, at node 1

```fortran
    CALL OK( getNodeLoc(obj, 1, 1) .EQ. 1, &
      & 'getNodeLoc(obj, 1, 1): ' )
```

`v`, spacecompo=2, timecompo=1, at node 1

```fortran
    CALL OK( getNodeLoc(obj, 1, 2) .EQ. 21, &
      & 'getNodeLoc(obj, 1, 2): ' )
```

`v`, spacecompo=3, timecompo=1, at node 1

```fortran
    CALL OK( getNodeLoc(obj, 1, 3) .EQ. 41, &
      & 'getNodeLoc(obj, 1, 3): ' )
```

`v`, spacecompo=1, timecompo=2, at node 1

```fortran
    CALL OK( getNodeLoc(obj, 1, 4) .EQ. 61, &
      & 'getNodeLoc(obj, 1, 4): ' )
```

`v`, spacecompo=2, timecompo=2, at node 1

```fortran
    CALL OK( getNodeLoc(obj, 1, 5) .eq. 81, &
      & 'getNodeLoc(obj, 1, 5): ' )
```

`v`, spacecompo=3, timecompo=2, at node 1

```fortran
    CALL OK( getNodeLoc(obj, 1, 6) .eq. 101, &
      & 'getNodeLoc(obj, 1, 6): ' )
```

`P`, spacecompo=1, timecompo=1, at node 1

```fortran
    CALL OK( getNodeLoc(obj, 1, 7) .eq. 121, &
      & 'getNodeLoc(obj, 1, 7): ' )
```

`P`, spacecompo=1, timecompo=2, at node 1

```fortran
    CALL OK( getNodeLoc(obj, 1, 8) .eq. 131, &
      & 'getNodeLoc(obj, 1, 8): ' )
```

`V`, spacecompo=1, timecompo=1, at node 10

```fortran
    CALL OK( getNodeLoc(obj, 10, 1) .eq. 10, &
      & 'getNodeLoc(obj, 10, 1): ' )
```

`V`, spacecompo=2, timecompo=1, at node 10

```fortran
    CALL OK( getNodeLoc(obj, 10, 2) .eq. 30, &
      & 'getNodeLoc(obj, 10, 2): ' )
```

`V`, spacecompo=3, timecompo=1, at node 10

```fortran
    CALL OK( getNodeLoc(obj, 10, 3) .eq. 50, &
      & 'getNodeLoc(obj, 10, 3): ' )
```

`V`, spacecompo=1, timecompo=2, at node 10

```fortran
    CALL OK( getNodeLoc(obj, 10, 4) .eq. 70, &
      & 'getNodeLoc(obj, 10, 4): ' )
```

`V`, spacecompo=2, timecompo=2, at node 10

```fortran
    CALL OK( getNodeLoc(obj, 10, 5) .eq. 90, &
      & 'getNodeLoc(obj, 10, 5): ' )
```

`V`, spacecompo=3, timecompo=2, at node 10

```fortran
    CALL OK( getNodeLoc(obj, 10, 6) .eq. 110, &
      & 'getNodeLoc(obj, 10, 6): ' )
```

`P`, spacecompo=1, timecompo=1, at node 10

```fortran
    CALL OK( getNodeLoc(obj, 10, 7) .eq. 130, &
      & 'getNodeLoc(obj, 10, 7): ' )
```

`P`, spacecompo=1, timecompo=2, at node 10

```fortran
    CALL OK( getNodeLoc(obj, 10, 8) .eq. 140, &
      & 'getNodeLoc(obj, 10, 8): ' )
```

`V`, spacecompo=1, timecompo=1

```fortran
    CALL OK( ALL(getNodeLoc(obj, 1) .EQ. [1,20,1]), &
      & 'getNodeLoc(obj, 1): ' )
```

`V`, spacecompo=2, timecompo=1

```fortran
    CALL OK( all(getNodeLoc(obj, 2) .eq. [21,40,1]), &
      & 'getNodeLoc(obj, 2): ' )
```

`V`, spacecompo=3, timecompo=1

```fortran
    CALL OK( all(getNodeLoc(obj, 3) .eq. [41,60,1]), &
      & 'getNodeLoc(obj, 3): ' )
```

`P`, spacecompo=1, timecompo=1

```fortran
    CALL OK( all(getNodeLoc(obj, 7) .eq. [121,130,1]), &
      & 'getNodeLoc(obj, 7): ' )
```

`P`, spacecompo=1, timecompo=2

```fortran
    CALL OK( all(getNodeLoc(obj, 8) .eq. [131,140,1]), &
      & 'getNodeLoc(obj, 7): ' )
```

```fortran
    CALL Deallocate( obj )
END PROGRAM main
```
