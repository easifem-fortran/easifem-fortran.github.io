This example show how to use `.tNames.`, `.tNodes.`, and `.tDOF.`.

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE( DOF_ ) :: obj
```

```fortran title="Initiate DOF (interface 1)"
    CALL Initiate( obj, tNodes=[10], names=["U"], spaceCompo=[3],  &
      & timeCompo=[1], storageFMT = FMT_DOF )
```

```fortran title="Display DOF object"
    CALL Display( obj, "obj : " )
```

```fortran title="Get total names"
    CALL OK( (.tNames. obj) .EQ. 1, '.tNames. obj : ' )
```

```fortran title="Get total number of nodes"
    CALL OK( (.tNodes. obj) .EQ. 30, '.tNodes. obj : ' )
```

```fortran title="Get total degrees of freedom"
    CALL OK( (.tDOF. obj) .EQ. 3, '.tDOF. obj : ' )
```

```fortran title="cleanup"
    CALL Deallocate( obj )
END PROGRAM main
```
