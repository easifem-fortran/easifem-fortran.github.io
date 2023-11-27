# FacetElements

This routine returns the facet elements

```fortran
  MODULE PURE FUNCTION RefElem_FacetElements(RefElem) RESULT(ans)
    CLASS(ReferenceElement_), INTENT(IN) :: RefElem
    TYPE(ReferenceElement_), ALLOCATABLE :: ans(:)
  END FUNCTION RefElem_FacetElements
```
