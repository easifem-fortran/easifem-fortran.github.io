This example show how to initiate an instance of [[DOF_]] by using `DOF_Pointer`.

```fortran
PROGRAM main
    USE easifemBase
    IMPLICIT NONE
    TYPE( DOF_ ), POINTER :: obj
```

```fortran title="Constructing by DOF_Pointer()"
    obj => DOF_POINTER( tNodes=[10], names=["U"], spaceCompo=[3],  &
      & timeCompo=[1], storageFMT = FMT_DOF )
```

```fortran title="Display DOF"
    CALL Display( obj, "DOF() : " )
```

```fortran title="cleanup"
    CALL Deallocate( obj )
END PROGRAM main
```
