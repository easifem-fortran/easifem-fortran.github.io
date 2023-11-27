This example show how to create an instance of [DOF_](DOF_.md) and use it to create a vector of reals.

- DOF/Initiate
- DOF/tNames
- DOF/tNodes
- DOF/tDOF

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE( DOF_ ) :: obj
    REAL( DFP ), ALLOCATABLE :: val( : )
```

```fortran title="Initiate interface 1"
    CALL Initiate( obj, tNodes=[10], names=["U"], spaceCompo=[3],  &
      & timeCompo=[1], storageFMT = FMT_DOF )
```

Initiate a real vector using `DOF_` object.

```fortran
    CALL Initiate( Val=val, obj=obj )
```

```fortran title="Display DOF object"
    CALL Display( obj, "CALL Initiate( Val=val, obj=obj ) : " )
```

```fortran title="cleanup"
    CALL Deallocate( obj )
END PROGRAM main
```
