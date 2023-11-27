# FacetTopology

Returns the facet topology of the given element type

```fortran
  MODULE PURE FUNCTION RefElem_FacetTopology(ElemType, Nptrs) RESULT(Ans)
    INTEGER(I4B), INTENT(IN) :: ElemType
    INTEGER(I4B), INTENT(IN) :: Nptrs(:)
    TYPE(ReferenceTopology_), ALLOCATABLE :: ans(:)
  END FUNCTION RefElem_FacetTopology
```
