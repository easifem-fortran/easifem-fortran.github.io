# Initiate

This routine contructs an instance of ReferenceTriangle_.

- User can specify the coordinates of the triangle.
- This routine will contruct a three node triangle.

## Interface

```fortran
MODULE PURE SUBROUTINE Initiate( obj, NSD, XiJ )
  CLASS( ReferenceTriangle_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: NSD
  REAL( DFP ), INTENT( IN ), OPTIONAL :: XiJ( :, : )
END SUBROUTINE Initiate  
```

:::info `xij`

- The shape of xij is `[3,3]`
- If xij is not present, then we use the following coordinates:

|     |     |     |
| --- | --- | --- |
| 0   | 1   | 0   |
| 0   | 0   | 1   |
| 0   | 0   | 0   |

:::

:::info `nsd`
Number of spatial dimension.
:::

## ReferenceTriangle (Constructor)

```fortran
MODULE PURE FUNCTION ReferenceTriangle(NSD, XiJ) RESULT( obj )
  INTEGER( I4B ), INTENT( IN ) :: NSD
  REAL( DFP ), INTENT( IN ), OPTIONAL :: XiJ(:,:)
  TYPE( ReferenceTriangle_ ) :: obj
END FUNCTION ReferenceTriangle
```

## ReferenceTriangle_Pointer

```fortran
MODULE PURE FUNCTION ReferenceTriangle_pointer(NSD, XiJ) RESULT( obj )
  INTEGER( I4B ), INTENT( IN ) :: NSD
  REAL( DFP ), INTENT( IN ), OPTIONAL :: XiJ(:,:)
  CLASS( ReferenceTriangle_ ), POINTER :: obj
END FUNCTION ReferenceTriangle_pointer
```
