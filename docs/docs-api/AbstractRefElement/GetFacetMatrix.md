# GetFacetMatrix

Get the facet matrix

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION GetFacetMatrix(obj) RESULT(ans)
    CLASS(AbstractRefElement_), INTENT(IN) :: obj
    INTEGER(I4B), ALLOCATABLE :: ans(:, :)
  END FUNCTION GetFacetMatrix
END INTERFACE
```
