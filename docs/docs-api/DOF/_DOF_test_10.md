This example shows the usage of `.tDOF.` operator.

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE( DOF_ ) :: obj
    CALL Initiate( obj, tNodes=[10], names=["U"], spaceCompo=[3],  &
      & timeCompo=[1], storageFMT = FMT_DOF )
    CALL OK( (.tDOF. obj) .eq. 3, '.tDOF. obj: ' )
    CALL OK( (obj .tDOF. 1) .eq. 3,   'obj .tDOF. 1: ' )
    CALL OK( (obj .tDOF. 'U') .eq. 3, 'obj .tDOF. "U": ' )
    CALL Deallocate( obj )
END PROGRAM main
```
