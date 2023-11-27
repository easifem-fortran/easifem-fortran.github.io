This example shows the usage of assignment operator to construct an instance of [DOF_](DOF_.md).

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE( DOF_ ) :: obj, anotherObj
```

```fortran title="Initiate DOF"
  CALL Initiate( obj, tNodes=[10], names=["U"], spaceCompo=[3],  &
    & timeCompo=[1], storageFMT = FMT_DOF )
```

```fortran title="Initiate by Assignment"
  anotherObj=obj
```

```fortran title="Display anotherObj"
  CALL Display( anotherObj, "anotherObj=obj : " )
```

```fortran title="cleanup"
  CALL Deallocate( obj )
  CALL Deallocate( anotherObj )
END PROGRAM main
```
