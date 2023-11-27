# Initiate

This routine constructs an instance of ReferencePoint_.

## Interface

```fortran
INTERFACE ReferencePoint
MODULE PURE SUBROUTINE refPoint_Initiate( obj, NSD, XiJ )
  CLASS( ReferencePoint_ ), INTENT( INOUT ) :: obj
    !! The instance
  INTEGER( I4B ), INTENT( IN ) :: NSD
    !! Spatial dimension of the problem
  REAL( DFP ), INTENT( IN ), OPTIONAL :: XiJ( :, : )
    !! Coords of element
END SUBROUTINE refPoint_Initiate
END INTERFACE ReferencePoint
```

:::info `xij`
`XiJ` denotes the nodal coordinate, if it is not present than zero is used.
:::

:::note
The `SIZE(XiJ,1)` should be equal to 3, i.e., x,y,z coord. Also note that this routine creats a linear element.
:::

### Example

```fortran
 type( ReferencePoint_ ) :: obj1
 real( dfp ) :: xij( 3, 1 )
 call random_number( xij )
 call initiate( obj=obj1, NSD=3, xij )
 call display( obj1, "obj1 : " )
```

## ReferencePoint (Constructor)

This routine constructs an instance of [[ReferencePoint_]] element

### Example

```fortran
 type( ReferencePoint_ ) :: obj
 obj = ReferencePoint(nsd=3)
 call display( obj, 'obj : ' )
```

## ReferencePoint_Pointer

```fortran
INTERFACE ReferencePoint_Pointer
MODULE PURE FUNCTION refPoint_Constructor1(NSD, XiJ) RESULT( obj )
  INTEGER( I4B ), INTENT( IN ) :: NSD
  REAL( DFP ), INTENT( IN ), OPTIONAL :: XiJ(:,:)
  TYPE( ReferencePoint_ ) :: obj
END FUNCTION refPoint_Constructor1
END INTERFACE ReferencePoint_Pointer
```
