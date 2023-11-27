# FacetMatrix

Returns the facet matrix of a reference element.

- Number of rows are equal to the number of facet in an element
- Number of columns = MAX( NNS )
- First column denotes the ElementTopology
- Second Column denotes the XiDimension
- Third column denotes the NNS
- 4 to NNS + 3 denotes the Local Nptrs

```fortran
  MODULE PURE FUNCTION Facet_Matrix_RefElem(RefElem) RESULT(FM)
    INTEGER(I4B), ALLOCATABLE :: FM(:, :)
    CLASS(ReferenceElement_), INTENT(IN) :: RefElem
  END FUNCTION Facet_Matrix_RefElem
```
