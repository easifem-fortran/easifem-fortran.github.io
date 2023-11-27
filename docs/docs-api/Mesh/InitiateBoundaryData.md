# InitiateBoundaryData

This method construct the boundary-element data.

- It marks elements of mesh as `DOMAIN_BOUNDARY_ELEMENT` and `INTERNAL_ELEMENT`.
- In this case boundary elements are those which contains the boundary node.
- Boundary-node information is available by reading the mesh file, see mesh import method.
- It also forms `obj%elementData(ii)%boundaryData`.

:::note
This subroutine treats all boundary element as `DOMAIN_BOUNDARY_ELEMENT` because it does not have information of surrouding mesh. However, this is not correct. This is because, not all mesh boundary elements are domain boundary elements. For example, some mesh-boundary element may be interface element between two mesh regions. This information can be corrected by calling [SetFacetElementType](../Domain/SetFacetElementType.md) method from [Domain_](../Domain/Domain_.md).
:::

:::info
If we call [InitiateBoundaryData](../Domain/InitiateBoundaryData.md), then we do not have to call [SetFacetElementType](../Domain/SetFacetElementType.md) because the former routine makes an internal call to the latter.
:::

This method needs following information:

- `ElementToElements`
- `refelem` to construct the FacetElements

```fortran
INTERFACE
  MODULE SUBROUTINE InitiateBoundaryData(obj)
    CLASS(Mesh_), INTENT(INOUT) :: obj
    !! mesh data
  END SUBROUTINE InitiateBoundaryData
END INTERFACE
```
