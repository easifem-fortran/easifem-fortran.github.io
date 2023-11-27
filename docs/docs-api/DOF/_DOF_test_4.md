  This example shows how to initiate an instance of [DOF_](DOF_.md), then use it to create a vector of reals [RealVector_](../RealVector/RealVector_.md).

- DOF/Initiate
- DOF/tNames
- DOF/tNodesss
- DOF/tDOF

Note that in `Line 5` we have vector of [[RealVector_]]

```fortran {5}
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE( DOF_ ) :: obj
  TYPE(RealVector_), ALLOCATABLE :: val( : )
```

```fortran title="Initiate DOF"
  CALL Initiate( obj, tNodes=[10], names=["U"], spaceCompo=[3],  &
    & timeCompo=[1], storageFMT = FMT_DOF )
```

```fortran title="Initiate RealVector"
  CALL Initiate( Val=val, obj=obj )
```

```fortran title="Display RealVector"
  CALL Display( Val, "CALL Initiate( Val=val, obj=obj ) : " )
```

```fortran title="cleanup"
  CALL Deallocate( obj )
END PROGRAM main
```
