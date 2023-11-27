This example shows the usage of  [Set](Set.md)  and [Get](Get.md) Method.

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
  REAL( DFP ), ALLOCATABLE :: ans( : ), value(:)
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

Initiate an instance of [[RealVector_]]

```fortran
  CALL Initiate(obj, dofobj)
  CALL Set( obj=obj, dofobj=dofobj, nodenum=[1,2,3,4], &
    & value=arange(1.0_DFP, 4.0_DFP), ivar=1, idof=1 )
  !!
  CALL Set( obj=obj, dofobj=dofobj, nodenum=[1,2,3,4], &
    & value=arange(11.0_DFP, 14.0_DFP), ivar=1, idof=2 )
  !!
  CALL Set( obj=obj, dofobj=dofobj, nodenum=[1,2,3,4], &
    & value=arange(21.0_DFP, 24.0_DFP), ivar=1, idof=3 )
  !!
  CALL Set( obj=obj, dofobj=dofobj, nodenum=[1,2,3,4], &
    & value=arange(31.0_DFP, 34.0_DFP), ivar=1, idof=4 )
  !!
  CALL Set( obj=obj, dofobj=dofobj, nodenum=[1,2], &
    & value=arange(41.0_DFP, 42.0_DFP), ivar=2, idof=1 )
  !!
  CALL Set( obj=obj, dofobj=dofobj, nodenum=[1,2], &
    & value=arange(51.0_DFP, 52.0_DFP), ivar=2, idof=2 )
  !!
  !! CALL Display( obj, dofobj, 'obj:' )
```

```fortran
  value = Get(obj, dofobj, [1,2], ivar=1, idof=1)
  ans = [1.0,2.0]
  CALL OK( ALL( value .APPROXEQ. ans ), 'Get'  )
```

```fortran
  value = Get(obj, dofobj, [1,2], ivar=1, idof=2)
  ans = [11.0,12.0]
  CALL OK( ALL( value .APPROXEQ. ans ), 'Get'  )
```

```fortran
  value = Get(obj, dofobj, [1,2], ivar=1, idof=3)
  ans = [21.0,22.0]
  CALL OK( ALL( value .APPROXEQ. ans ), 'Get'  )
```

```fortran
  value = Get(obj, dofobj, [1,2], ivar=1, idof=4)
  ans = [31.0,32.0]
  CALL OK( ALL( value .APPROXEQ. ans ), 'Get'  )
```

```fortran
  value = Get(obj, dofobj, [1,2], ivar=2, idof=1)
  ans = [41.0,42.0]
  CALL OK( ALL( value .APPROXEQ. ans ), 'Get'  )
```

```fortran
  value = Get(obj, dofobj, [1,2], ivar=2, idof=2)
  ans = [51.0,52.0]
  CALL OK( ALL( value .APPROXEQ. ans ), 'Get'  )
```

```fortran
END PROGRAM main
```
