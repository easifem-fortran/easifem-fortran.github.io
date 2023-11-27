This example shows the usage of [Get](Get.md), [Set](Set.md), and [GetValue](GetValue.md) Methods. 

Storage FMT is `DOF_FMT`

```fortran
!!
!! Get(obj, dofobj, value, ivar, spacecompo, timecompo)
!!
```

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE( RealVector_ ) :: obj
  TYPE( DOF_ ) :: dofobj, dofvalue
  TYPE( RealVector_ ) :: ans, value
```

Make an instance of [DOF_](../DOF/DOF_.md) object.

```fortran
  CALL Initiate( obj=dofobj, &
    & tNodes=[4], &
    & names=["V"], &
    & spaceCompo=[2], &
    & timeCompo=[2], &
    & StorageFMT=DOF_FMT)
```

Initiate an instance of [RealVector_](RealVector_.md)

```fortran
  CALL Initiate(obj, dofobj)
```


Setting values in `obj`

```fortran
  CALL Set( obj=obj, dofobj=dofobj, nodenum=[1,2,3,4], &
    & value=arange(11.0_DFP, 14.0_DFP), ivar=1, idof=1 )
  !!
  CALL Set( obj=obj, dofobj=dofobj, nodenum=[1,2,3,4], &
    & value=arange(21.0_DFP, 24.0_DFP), ivar=1, idof=2 )
  !!
  CALL Set( obj=obj, dofobj=dofobj, nodenum=[1,2,3,4], &
    & value=arange(31.0_DFP, 34.0_DFP), ivar=1, idof=3 )
  !!
  CALL Set( obj=obj, dofobj=dofobj, nodenum=[1,2,3,4], &
    & value=arange(41.0_DFP, 44.0_DFP), ivar=1, idof=4 )
  !!
  CALL Display( obj, dofobj, 'obj:' )
```

Make an instance of [DOF_](../DOF/DOF_.md) object.

```fortran
  CALL Initiate( obj=dofvalue, &
    & tNodes=[4], &
    & names=["V"], &
    & spaceCompo=[1], &
    & timeCompo=[1], &
    & StorageFMT=NODES_FMT)
```

Allocate value, it is important that value is initiated before calling GetValue method.

```fortran
  CALL Initiate( value, dofvalue )
  CALL Initiate( ans, dofvalue )
```

```fortran
  CALL GetValue(obj=obj, dofobj=dofobj, value=value, ivar=1, spacecompo=1, timecompo=1)
  CALL Set( obj=ans, dofobj=dofvalue, nodenum=[1,2,3,4], &
    & value=arange(11.0_DFP, 14.0_DFP), ivar=1, idof=1 )
  CALL OK( ALL(value%val .APPROXEQ. ans%val) , 'Getvalue'  )
```

```fortran
  CALL GetValue(obj=obj, dofobj=dofobj, value=value, ivar=1, spacecompo=2, timecompo=1)
  CALL Set( obj=ans, dofobj=dofvalue, nodenum=[1,2,3,4], &
    & value=arange(21.0_DFP, 24.0_DFP), ivar=1, idof=1 )
  CALL OK( ALL(value%val .APPROXEQ. ans%val) , 'Getvalue'  )
```

```fortran
  CALL GetValue(obj=obj, dofobj=dofobj, value=value, ivar=1, spacecompo=1, timecompo=2)
  CALL Set( obj=ans, dofobj=dofvalue, nodenum=[1,2,3,4], &
    & value=arange(31.0_DFP, 34.0_DFP), ivar=1, idof=1 )
  CALL OK( ALL(value%val .APPROXEQ. ans%val) , 'Getvalue'  )
```

```fortran
  CALL GetValue(obj=obj, dofobj=dofobj, value=value, ivar=1, spacecompo=2, timecompo=2)
  CALL Set( obj=ans, dofobj=dofvalue, nodenum=[1,2,3,4], &
    & value=arange(41.0_DFP, 44.0_DFP), ivar=1, idof=1 )
  CALL OK( ALL(value%val .APPROXEQ. ans%val) , 'Getvalue'  )
```

```fortran
END PROGRAM main
```
