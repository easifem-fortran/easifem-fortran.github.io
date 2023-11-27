This example show how to initiate an instance of [DOF_](DOF_.md) and use it to create an instance of [RealVector_](../RealVector/RealVector_.md).

- DOF/Initiate
- DOF/tNames
- DOF/tNodesss
- DOF/tDOF

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE( DOF_ ) :: obj
  TYPE(RealVector_) :: val
```

Create an instance of [[DOF_]]

```fortran title="Initiate DOF"
  CALL Initiate( obj, tNodes=[10], names=["U"], spaceCompo=[3],  &
    & timeCompo=[1], storageFMT = FMT_DOF )
```

Initiate a vector of real using an instance of [[DOF_]]

```fortran title="Initiate RealVector_"
  CALL Initiate( Val=val, obj=obj )
```

```fortran title="Display RealVector_"
  CALL Display( Val, "CALL Initiate( Val=val, obj=obj ) : " )
```

```fortran title="Cleanup"
  CALL Deallocate( obj )
END PROGRAM main
```
