# SetFacetElementType

This routine corrrects the facet element type in each mesh.

When we call [InitiateFacetElements](../Mesh/InitiateFacetElements.md) for mesh, we can only identify boundary-facet-elements (i.e., boundary elements of the mesh). 

Moreover, when we call [InitiateFacetElements](../Mesh/InitiateFacetElements.md) from mesh or domain, all the facet elements are tagged as `DOMAIN_BOUNDARY_ELEMENT`. 

However, some of these boundary facet-elements will be located at the domain’s boundary. These facet elements are called `DOMAIN_BOUNDARY_ELEMENT`.

Some of the facet elements will be at located at the interface of two mesh regions, these facet elements are called `BOUNDARY_ELEMENT`. 

This method correctly differentiates between `BOUNDARY_ELEMENT`  and `DOMAIN_BOUNDARY_ELEMENT`. 

:::info
This method needs information of boundary data in a mesh, which can be set by calling [InitiateBoundaryData](../Mesh/InitiateBoundaryData.md) by the user. 

In this routine if for a mesh `isBoundaryDataInitiated` is `.FALSE.`, then this routine will make a call to [InitiateBoundaryData](../Mesh/InitiateBoundaryData.md) for that mesh and initiate the required boundary data.
:::

Please check documentation of following methods:

- [SetDomainFacetElement](SetDomainFacetElement.md)
- [SetMeshFacetElement](SetMeshFacetElement.md)
- [SetFacetElementType](SetFacetElementType.md)


## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetFacetElementType(obj)
    CLASS(Domain_), INTENT(INOUT) :: obj
  END SUBROUTINE SetFacetElementType
END INTERFACE
```
