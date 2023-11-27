This example shows the usage of Initiate method from [DOF_](../DOF/DOF_.md).

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE( RealVector_ ) :: obj
  TYPE( DOF_ ) :: dofobj
  REAL( DFP ) :: ans, value
```

Initiate an instance of [DOF_](../DOF/DOF_.md)

```fortran
  CALL Initiate( obj=dofobj, &
    & tNodes=[4, 2], &
    & names=["V", "P"], &
    & spaceCompo=[2,1], &
    & timeCompo=[2,2], &
    & StorageFMT=DOF_FMT)
```

Initiate an instance of [RealVector_](../RealVector/RealVector_.md)

```fortran
  CALL Initiate(obj, dofobj)
  CALL Display(obj, "obj = " )
  CALL Display( obj, dofobj, 'obj:' )
```

```fortran
END PROGRAM main
```

