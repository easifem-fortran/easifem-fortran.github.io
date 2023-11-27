---
title: ReferencePyramid
---

# ReferencePyramid

## Introduction

A reference element for pyramid, and a child of [[ReferenceElement_]].

## Methods

### Initiate

```fortran
MODULE PURE SUBROUTINE initiate_ref_Pyramid( obj, NSD, XiJ )
  CLASS( ReferencePyramid_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: NSD
  REAL( DFP ), INTENT( IN ), OPTIONAL :: XiJ( :, : )
END SUBROUTINE initiate_ref_Pyramid
```

### ReferencePyramid (Constructor)

```fortran
MODULE PURE FUNCTION reference_Pyramid( NSD, XiJ ) RESULT( obj )
  INTEGER( I4B ), INTENT( IN ) :: NSD
  REAL( DFP ), INTENT( IN ), OPTIONAL :: XiJ(:,:)
  TYPE( ReferencePyramid_ ) :: obj
END FUNCTION reference_Pyramid
```

### ReferencePyramid_Pointer

```fortran
MODULE PURE FUNCTION reference_Pyramid_Pointer( NSD, XiJ ) RESULT( obj )
  INTEGER( I4B ), INTENT( IN ) :: NSD
  REAL( DFP ), INTENT( IN ), OPTIONAL :: XiJ(:,:)
  CLASS( ReferencePyramid_ ), POINTER :: obj
END FUNCTION reference_Pyramid_Pointer
```

### LagrangeElement_Pyramid

```fortran
MODULE PURE SUBROUTINE LagrangeElement_Pyramid( RefElem, Order, obj )
  CLASS( ReferenceElement_), INTENT( IN ) :: RefElem
  INTEGER( I4B ), INTENT( IN ) :: Order
  CLASS ( ReferenceElement_ ), INTENT( INOUT ) :: obj
END SUBROUTINE LagrangeElement_Pyramid
```

### Measure_Simplex_Pyramid

```fortran
MODULE PURE FUNCTION Measure_Simplex_Pyramid( RefElem, XiJ ) RESULT( Ans )
  CLASS( ReferencePyramid_ ), INTENT( IN ) :: RefElem
  REAL( DFP ), INTENT( IN ) :: XiJ( :, : )
  REAL( DFP ) :: Ans
END FUNCTION Measure_Simplex_Pyramid
END INTERFACE
```

### Pyramid_Quality

```fortran
MODULE FUNCTION Pyramid_Quality( refelem, xij, measure ) RESULT( Ans )
  CLASS( ReferencePyramid_ ), INTENT( IN ) :: refelem
  REAL( DFP ) , INTENT( IN ) :: xij(:,:)
  INTEGER( I4B ), INTENT( IN ) :: measure
  REAL( DFP ) :: Ans
END FUNCTION Pyramid_Quality
```
