---
title: InitiateFacetElements
---

This routine initiates the facet element data, such as [`BoundaryFacetData`](./BoundaryFacetData_.md) and [`InternalFacetData_`](./InternalFacetData_.md). 

This routine needs the following information:

- `ElementToElements`, if this information is not available, then it calls [InitiateElementToElements](./InitiateElementToElements.md).
- `BoundaryData`, if this information is not available, then it calls [InitiateBoundaryData](./InitiateBoundaryData.md).

It makes following data structures:

- [InternalFacetData_](InternalFacetData_.md)
- [BoundaryFacetData_](BoundaryFacetData_.md)
- `FacetElementType` field in [Mesh_](Mesh_.md)

:::info

- This method cannot differentiate between a `BOUNDARY_ELEMENT`, which is a boundary-facet-element at the mesh-boundary, and `DOMAIN_BOUNDARY_ELEMENT`, which is facet element at the domain’s boundary.
- This is because, at this point we only know that a boundary-facet-element is a domain-boundary-element, as we have no information about the neighboring mesh.
- Therefore, all `boundaryFacet` elements, at this level, are of type `DOMAIN_BOUNDARY_ELEMENT`. This is because every `DOMAIN_BOUNDARY_ELEMENT` is a `BOUNDARY_ELEMENT`.
- This information can be corrected only when we call [`SetDomainFacetElement`](../Domain/SetDomainFacetElement.md) from [Domain_](../Domain/Domain_.md) class.
:::

:::note
If we call [`SetDomainFacetElement`](../Domain/SetDomainFacetElement.md) then we do not have to worry about the above point.
:::

Please check documentation of following methods:

- [`SetDomainFacetElement`](../Domain/SetDomainFacetElement.md)
- [`SetMeshFacetElement`](../Domain/SetMeshFacetElement.md)
- [`SetFacetElementType`](../Domain/SetFacetElementType.md)

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE InitiateFacetElements(obj)
    CLASS(Mesh_), INTENT(INOUT) :: obj
  END SUBROUTINE InitiateFacetElements
END INTERFACE
```
