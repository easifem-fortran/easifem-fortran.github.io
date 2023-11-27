---
title: ReferencePrism
---

# ReferencePrism

## Introduction

A reference element for Prism, and a child of [[ReferenceElement_]].

## Methods

### Initiate

```fortran
MODULE PURE SUBROUTINE initiate_ref_Prism( obj, NSD, XiJ )
  CLASS( ReferencePrism_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: NSD
  REAL( DFP ), INTENT( IN ), OPTIONAL :: XiJ( :, : )
END SUBROUTINE initiate_ref_Prism
```

### ReferencePrism (Constructor)

```fortran
MODULE PURE FUNCTION reference_Prism( NSD, XiJ ) RESULT( obj )
  INTEGER( I4B ), INTENT( IN ) :: NSD
  REAL( DFP ), INTENT( IN ), OPTIONAL :: XiJ(:,:)
  TYPE( ReferencePrism_ ) :: obj
END FUNCTION reference_Prism
```

### ReferencePrism_Pointer

```fortran
MODULE PURE FUNCTION reference_Prism_Pointer( NSD, XiJ ) RESULT( obj )
  INTEGER( I4B ), INTENT( IN ) :: NSD
  REAL( DFP ), INTENT( IN ), OPTIONAL :: XiJ(:,:)
  CLASS( ReferencePrism_ ), POINTER :: obj
END FUNCTION reference_Prism_Pointer
```

### LagrangeElement_Prism

```fortran
MODULE PURE SUBROUTINE LagrangeElement_Prism( RefElem, Order, obj )
  CLASS( ReferenceElement_), INTENT( IN ) :: RefElem
  INTEGER( I4B ), INTENT( IN ) :: Order
  CLASS ( ReferenceElement_ ), INTENT( INOUT ) :: obj
END SUBROUTINE LagrangeElement_Prism
```

### Measure_Simplex_Prism

```fortran
MODULE PURE FUNCTION Measure_Simplex_Prism( RefElem, XiJ ) RESULT( Ans )
  CLASS( ReferencePrism_ ), INTENT( IN ) :: RefElem
  REAL( DFP ), INTENT( IN ) :: XiJ( :, : )
  REAL( DFP ) :: Ans
END FUNCTION Measure_Simplex_Prism
END INTERFACE
```

### Prism_Quality

```fortran
MODULE FUNCTION Prism_Quality( refelem, xij, measure ) RESULT( Ans )
  CLASS( ReferencePrism_ ), INTENT( IN ) :: refelem
  REAL( DFP ) , INTENT( IN ) :: xij(:,:)
  INTEGER( I4B ), INTENT( IN ) :: measure
  REAL( DFP ) :: Ans
END FUNCTION Prism_Quality
```
