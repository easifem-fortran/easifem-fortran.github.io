---
title: ReferenceTetrahedron Methods
---

## Methods

### Initiate

```fortran
MODULE PURE SUBROUTINE initiate_ref_Tetrahedron( obj, NSD, XiJ )
  CLASS( ReferenceTetrahedron_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: NSD
  REAL( DFP ), INTENT( IN ), OPTIONAL :: XiJ( :, : )
END SUBROUTINE initiate_ref_Tetrahedron
```

### ReferenceTetrahedron (Constructor)

```fortran
MODULE PURE FUNCTION reference_Tetrahedron( NSD, XiJ ) RESULT( obj )
  INTEGER( I4B ), INTENT( IN ) :: NSD
  REAL( DFP ), INTENT( IN ), OPTIONAL :: XiJ(:,:)
  TYPE( ReferenceTetrahedron_ ) :: obj
END FUNCTION reference_Tetrahedron
```

### ReferenceTetrahedron_Pointer

```fortran
MODULE PURE FUNCTION reference_Tetrahedron_Pointer( NSD, XiJ ) RESULT( obj )
  INTEGER( I4B ), INTENT( IN ) :: NSD
  REAL( DFP ), INTENT( IN ), OPTIONAL :: XiJ(:,:)
  CLASS( ReferenceTetrahedron_ ), POINTER :: obj
END FUNCTION reference_Tetrahedron_Pointer
```

### LagrangeElement_Tetrahedron

```fortran
MODULE PURE SUBROUTINE LagrangeElement_Tetrahedron( RefElem, Order, obj )
  CLASS( ReferenceElement_), INTENT( IN ) :: RefElem
  INTEGER( I4B ), INTENT( IN ) :: Order
  CLASS ( ReferenceElement_ ), INTENT( INOUT ) :: obj
END SUBROUTINE LagrangeElement_Tetrahedron
```

### Measure_Simplex_Tetrahedron

```fortran
MODULE PURE FUNCTION Measure_Simplex_Tetrahedron( RefElem, XiJ ) RESULT( Ans )
  CLASS( ReferenceTetrahedron_ ), INTENT( IN ) :: RefElem
  REAL( DFP ), INTENT( IN ) :: XiJ( :, : )
  REAL( DFP ) :: Ans
END FUNCTION Measure_Simplex_Tetrahedron
```

### Tetrahedron_Quality

```fortran
MODULE FUNCTION Tetrahedron_Quality( refelem, xij, measure ) RESULT( Ans )
  CLASS( Referencetetrahedron_ ), INTENT( IN ) :: refelem
  REAL( DFP ) , INTENT( IN ) :: xij(:,:)
  INTEGER( I4B ), INTENT( IN ) :: measure
  REAL( DFP ) :: Ans
END FUNCTION Tetrahedron_Quality
```
