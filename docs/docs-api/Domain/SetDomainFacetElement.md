# SetDomainFacetElement

This routine sets the domain boundary element for cells and faces.

When we call [InitiateFacetElements](../Mesh/InitiateFacetElements.md) for mesh, we can only identify boundary-facet-elements (i.e., boundary elements of the mesh). Moreover, when we call [InitiateFacetElements](../Mesh/InitiateFacetElements.md) from mesh or domain, all the facet elements are tagged as `DOMAIN_BOUNDARY_ELEMENT`. 

However, some of these boundary facet-elements will be located at the domain’s boundary. These facet elements are called `DOMAIN_BOUNDARY_ELEMENT`.

Some of the facet elements will be at located at the interface of two mesh regions, these facet elements are called `BOUNDARY_ELEMENT`. 

This method correctly differentiates between `BOUNDARY_ELEMENT`  and `DOMAIN_BOUNDARY_ELEMENT`. 

:::info
This routine needs facet element data information stored inside the mesh. Therefore, if for a mesh `isFacetDataInitiated` is false, then this routine will make a call to [InitiateFacetElements](../Mesh/InitiateFacetElements.md) for that mesh.
:::

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetDomainFacetElement(obj)
    CLASS(Domain_), INTENT(INOUT) :: obj
  END SUBROUTINE SetDomainFacetElement
END INTERFACE
```
