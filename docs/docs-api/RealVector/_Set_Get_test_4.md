This example shows the usage of [Set](Set.md)  and [Get](Get.md) Method.

```fortran
!!
!! Get(obj, dofobj, nodenum, ivar, idof)
!!
```

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE( RealVector_ ) :: obj
  TYPE( DOF_ ) :: dofobj
  REAL( DFP ) :: ans, value
```

Initiate an instance of [DOF_](../DOF/DOF_.md).

```fortran
  CALL Initiate( obj=dofobj, &
    & tNodes=[4], &
    & names=["V"], &
    & spaceCompo=[2], &
    & timeCompo=[1], &
    & StorageFMT=NODES_FMT)
```

Initiate an instance of [RealVector_](RealVector_.md) 

```fortran
  CALL Initiate(obj, dofobj)
  CALL Set( obj=obj, dofobj=dofobj, nodenum=[1,2,3,4], &
    & value=arange(1.0_DFP, 4.0_DFP), ivar=1, idof=1 )
  !!
  CALL Set( obj=obj, dofobj=dofobj, nodenum=[1,2,3,4], &
    & value=arange(11.0_DFP, 14.0_DFP), ivar=1, idof=2 )
  CALL Display( obj, dofobj, 'obj:' )
```

```fortran
  value = Get(obj, dofobj, 2, ivar=1, idof=1)
  ans = 2
  CALL OK( value .APPROXEQ. ans , 'Get'  )
```

```fortran
  value = Get(obj, dofobj, 2, ivar=1, idof=2)
  ans = 12
  CALL OK(  value .APPROXEQ. ans , 'Get'  )
```

```fortran
END PROGRAM main
```
