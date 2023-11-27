# Initiate

This subroutine constructs an instance of ReferenceLine element of order equal to 1.

## Interface

```fortran
INTERFACE Initiate
MODULE PURE SUBROUTINE initiate_ref_Line( obj, NSD, XiJ )
  CLASS( ReferenceLine_ ), INTENT( INOUT ) :: obj
    !! The instance
  INTEGER( I4B ), INTENT( IN ) :: NSD
    !! Spatial dimension of the problem
  REAL( DFP ), INTENT( IN ), OPTIONAL :: XiJ( :, : )
    !! Coords of element
END SUBROUTINE initiate_ref_Line
END INTERFACE Initiate
```

:::info `xij`
`XiJ` denotes the nodal coordinate, if it is not present than we use following values:

|     |     |
| --- | --- |
| -1  | 1   |
| 0   | 0   |
| 0   | 0   |
:::

:::note
The `SIZE(XiJ,1)` should be equal to 3, i.e., x,y,z coord. Also, this routine creates a linear element.
:::

## ReferenceLine (Constructor)

This function constructs an instance of ReferenceLine_ element of order equal to 1.

```fortran
INTERFACE ReferenceLine
MODULE PURE FUNCTION reference_line(NSD, XiJ) RESULT( obj )
  INTEGER( I4B ), INTENT( IN ) :: NSD
  REAL( DFP ), INTENT( IN ), OPTIONAL :: XiJ(:,:)
  TYPE( ReferenceLine_ ) :: obj
END FUNCTION reference_line
END INTERFACE ReferenceLine
```

### ReferenceLine_Pointer

This function returns a pointer to a newly created instance of ReferenceLine_ element of order equal to 1.

```fortran
INTERFACE ReferenceLine_Pointer
MODULE PURE FUNCTION reference_line_pointer_1(NSD, XiJ) &
  & RESULT( obj )
  INTEGER( I4B ), INTENT( IN ) :: NSD
  REAL( DFP ), INTENT( IN ), OPTIONAL :: XiJ(:,:)
  CLASS( ReferenceLine_ ), POINTER :: obj
END FUNCTION reference_line_pointer_1
END INTERFACE ReferenceLine_Pointer
```
