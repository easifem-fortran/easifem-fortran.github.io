This example shows the usage of following methods.

- `.tSpaceComponents.`
- `.tTimeComponents.`
- `.SpaceComponents.`
- `.TimeComponents.`


```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE( DOF_ ) :: obj
    CALL Initiate( obj, tNodes=[20, 10], names=["V", "P"], &
      & spaceCompo=[3,1],  timeCompo=[2,2], storageFMT = FMT_DOF )
    CALL OK( (.tSpaceComponents. obj) .EQ. 2, &
      & '.tSpaceComponents. obj: ' )
    CALL OK( ALL((.SpaceComponents. obj) .EQ. [3,1]), &
      & '.SpaceComponents. obj: ' )
    CALL OK( (obj .SpaceComponents. 1) .EQ. 3,  &
      & 'obj .SpaceComponents. 1: ' )
    CALL OK( (obj .SpaceComponents. 2) .EQ. 2,  &
      & 'obj .SpaceComponents. 2: ' )
    CALL OK( (.tTimeComponents. obj) .EQ. 2, &
      & '.tTimeComponents. obj: ' )
    CALL OK( ALL((.TimeComponents. obj) .EQ. [2,2]), &
      & '.TimeComponents. obj: ' )
    CALL OK( (obj .TimeComponents. 1) .EQ. 2,  &
      & 'obj .TimeComponents. 1: ' )
    CALL OK( (obj .TimeComponents. 2) .EQ. 2,  &
      & 'obj .TimeComponents. 2: ' )
    CALL Deallocate( obj )
END PROGRAM main
```
