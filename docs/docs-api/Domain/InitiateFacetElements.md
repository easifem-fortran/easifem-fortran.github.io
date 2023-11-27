# InitiateFacetElements

This routine initiates the facet element information for every mesh of the domain. 

More details are given in the following pages.

- [BoundaryFacetData_](../Mesh/BoundaryFacetData_.md)
- [InternalFacetData_](../Mesh/InternalFacetData_.md)
- [InitiateFacetElements](../Mesh/InitiateFacetElements.md)

This routine makes an internal call to [InitiateFacetElements](../Mesh/InitiateFacetElements.md) from [Mesh_](../Mesh/Mesh_.md).

Please check documentation of following methods:

- [SetDomainFacetElement](SetDomainFacetElement.md)
- [SetFacetElementType](SetFacetElementType.md)

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE InitiateFacetElements(obj)
    CLASS(Domain_), INTENT(INOUT) :: obj
  END SUBROUTINE InitiateFacetElements
END INTERFACE
```
