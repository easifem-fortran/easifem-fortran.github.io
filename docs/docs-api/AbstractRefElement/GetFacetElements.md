# GetFacetElements

This routine returns the facet elements of reference element.

## Interface

```fortran
ABSTRACT INTERFACE
  SUBROUTINE GetFacetElements(obj, ans)
    IMPORT AbstractRefElement_, AbstractRefElementPointer_
    CLASS(AbstractRefElement_), INTENT(IN) :: obj
    TYPE(AbstractRefElementPointer_), ALLOCATABLE :: ans(:)
  END SUBROUTINE GetFacetElements
END INTERFACE
```
