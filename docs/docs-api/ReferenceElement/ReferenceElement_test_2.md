---
title: ReferenceElement example 2
---

# ReferenceElement example 2

## Modules and classes

- [[ReferenceTopology_]]
- [[ReferenceElement_]]
- [[ReferenceTriangle_]]

## Usage

``` fortran
PROGRAM main
  TYPE( ReferenceTriangle_ ) :: obj
  TYPE( ReferenceElement_ ), ALLOCATABLE :: facetElems( : )
  INTEGER( I4B ) :: ii
  CALL initiate( obj, nsd = 2 )
  facetElems = FacetElements( obj )
  DO ii = 1, SIZE( facetElems )
    CALL display( facetElems( ii ), "facetElements( " // str( ii, .TRUE.) // " ) = " )
    CALL Blanklines( NOL = 4 )
  END DO
PROGRAM main
```
