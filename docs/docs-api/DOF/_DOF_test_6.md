This example show how to initiate an instance of [[DOF_]] by using the constructor function `DOF()` .

- DOF/DOF

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE( DOF_ ) :: obj
```

```fortran title="Constructor using DOF()"
  obj = DOF( tNodes=[10], names=["U"], spaceCompo=[3],  &
    & timeCompo=[1], storageFMT = FMT_DOF )
```

```fortran title="Display content"
  CALL Display( obj, "DOF() : " )
```

```fortran title="cleanup"
  CALL Deallocate( obj )
END PROGRAM main
```
