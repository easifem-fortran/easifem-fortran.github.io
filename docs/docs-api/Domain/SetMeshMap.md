# SetMeshMap

This routine sets MeshMap.

`meshMap` contains the connectivity of meshes of dimension `nsd` (that is, meshes of cell $\Omega$).

Let us say there are $n$ meshes of cell elements. That is,

- In 1D, cell means line elements
- In 2D, cell means surface elements
- In 3D, cell means volume elements

Then, we constructs a sparse matrix, $M$, of dimension $n \times n$. If $M(I,J), I,J=1,2,\cdots,n$ is 1 then mesh-I and mesh-J are connected with each other. Otherwise, they are not connected with each other. This information is stored in an instance of [CSRSparsity](../CSRSparsity/CSRSparsity_.md) in `meshMap`

In this way:

- `meshMap%IA(i)` to `meshMap%IA(i+1)-1` denotes the location of $i$th mesh in `obj%meshFacetData`
- `meshMap%JA()` contains the $j$th (column) indices.

This routine makes `meshMap`.

This routine needs information of facet element data stored inside each mesh of dimension `obj%nsd`. In this routine, if for any mesh, `isFacetDataInitiated` is false, then this routine make a call to [InitiateFacetElements](../Mesh/InitiateFacetElements.md) and intiates the required data.

```fortran
INTERFACE
  MODULE SUBROUTINE SetMeshmap(obj)
    CLASS(Domain_), INTENT(INOUT) :: obj
  END SUBROUTINE SetMeshmap
END INTERFACE
```
