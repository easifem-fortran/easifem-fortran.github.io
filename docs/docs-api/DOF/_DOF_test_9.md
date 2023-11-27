This example shows the usage of `.tNodes.`  to get total number of nodes of degree of freedom.

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE( DOF_ ) :: obj
    CALL Initiate( obj, tNodes=[10], names=["U"], spaceCompo=[3],  &
      & timeCompo=[1], storageFMT = FMT_DOF )
    CALL OK( (.tNodes. obj) .EQ. 30, '.tNodes. obj [30] : ' )
    CALL OK( (obj .tNodes. 1) .EQ. 10, 'obj .tNodes. 1: ' )
    CALL OK( (obj .tNodes. 2) .EQ. 10, 'obj .tNodes. 2: ' )
    CALL OK( (obj .tNodes. 3) .EQ. 10, 'obj .tNodes. 3: ' )
    CALL OK( (obj .tNodes. [1,2,3]) .EQ. 30, 'obj .tNodes. [1,2,3]: ' )
    CALL Deallocate( obj )
END PROGRAM main
```
