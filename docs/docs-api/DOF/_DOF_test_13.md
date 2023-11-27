This example shows the usage of following methods.

- `.Names.`
- `.tNames.`

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE( DOF_ ) :: obj
    CALL Initiate( obj, tNodes=[20, 10], names=["V", "P"], &
      & spaceCompo=[3,1],  &
      & timeCompo=[2,2], storageFMT = FMT_DOF )
    CALL OK( (.tNames. obj) .EQ. 2, '.tNames. obj: ' )
    CALL OK( (obj .Names. 1) .EQ. 'V',   'obj .Names. 1: ' )
    CALL OK( (obj .Names. 2) .EQ. 'P',   'obj .Names. 2: ' )
    CALL Deallocate( obj )
END PROGRAM main
```

