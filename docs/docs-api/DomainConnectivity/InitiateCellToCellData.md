# InitiateCellToCellData

This routine initiates cellToCell data (mapping) between two [Domain_](../Domain/Domain_.md) or [Mesh_](../Mesh/Mesh_.md).

- The topology of elements in both meshes should be the same, this means that if one mesh is made of triangles then other mesh should be made of triangles.
- The `xidim` of the elements in both meshes should be the same, this means that if the `mesh1` is surface mesh then `mesh2` should be a surface mesh.
- This routine needs `nodeToNode` information, so make sure it is initiated before calling this routine.

## Interface1

```fortran
INTERFACE
  MODULE SUBROUTINE dc_initiateCellToCellData1(obj, domain1, domain2, &
    & dim1, dim2, entityNum1, entityNum2)
    CLASS(DomainConnectivity_), INTENT(INOUT) :: obj
    !! Domain connectivity object,
    !! [[DomainConnectivity:cellToCell]] will be initiated
    CLASS(Domain_), INTENT(IN) :: domain1
    !! Primary domain, in cellToCell(i), i denotes the
    !! global element number in domain1 domain.
    CLASS(Domain_), INTENT(IN) :: domain2
    !! secondary domain, => cellToCell(i) denotes the
    !! global cell number in `domain2` domain.
    INTEGER(I4B), INTENT(IN) :: dim1
    !! dimension of mesh in domain1
    INTEGER(I4B), INTENT(IN) :: dim2
    !! dimension of mesh in domain2
    INTEGER(I4B), INTENT(IN) :: entityNum1
    !! entity num of mesh in domain1
    INTEGER(I4B), INTENT(IN) :: entityNum2
    !! entity num of mesh in domain2
  END SUBROUTINE dc_initiateCellToCellData1
END INTERFACE
```

This subroutine generates the cell to cell connectivity between two meshes.

- `obj%cellToCell` will be initiated
- `domain1` main domain
- `domain2` secondary domain
- `dim1, entitynum1` dimension and entity number of mesh in `domain1`
- `dim2, entitynum2` dimension and entity number of mesh in `domain2`

Following points should be noted

- The topology of elements in both meshes should be the same, this means that if one mesh is triangle then other mesh should be a triangle.
- The xidim of the elements in both meshes should be the same, this means that if the mesh1 is surface mesh then mesh2 should be a surface mesh.
- This routine needs `nodeToNode` information, so make sure it is initiated before calling this routine.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="1" label="️܀ Example 1">

import EXAMPLE46 from "./_DomainConnectivity_test_11.md";

<EXAMPLE46 />

</TabItem>

<TabItem value="2" label="️܀ Example 2">

import EXAMPLE47 from "./_DomainConnectivity_test_12.md";

<EXAMPLE47 />

</TabItem>

<TabItem value="3" label="️܀ Example 3">

import EXAMPLE3 from "./_DomainConnectivity_test_13.md";

<EXAMPLE3 />

</TabItem>

<TabItem value="4" label="️܀ Example 4">

import EXAMPLE4 from "./_DomainConnectivity_test_14.md";

<EXAMPLE4 />

</TabItem>

<TabItem value="5" label="️܀ Example 5">

import EXAMPLE5 from "./_DomainConnectivity_test_15.md";

<EXAMPLE5 />

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

<Tabs>

<TabItem value="6" label="️܀ Example 6">

import EXAMPLE6 from "./_DomainConnectivity_test_16.md";

<EXAMPLE6 />

</TabItem>

<TabItem value="7" label="️܀ Example 7">

import EXAMPLE7 from "./_DomainConnectivity_test_17.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="8" label="️܀ Example 8">

import EXAMPLE8 from "./_DomainConnectivity_test_18.md";

<EXAMPLE8 />

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>

## Interface2

```fortran
INTERFACE
  MODULE SUBROUTINE dc_InitiateCellToCellData2(obj, domain1, domain2)
    CLASS(DomainConnectivity_), INTENT(INOUT) :: obj
    !! Domain connectivity object
    CLASS(Domain_), INTENT(IN) :: domain1
    !! Primary domain, in CellToCell(i), i denotes the
    !! global element number in domain1 domain.
    CLASS(Domain_), INTENT(IN) :: domain2
    !! Secondary domain => CellToCell(i) denotes the
    !! global element number in domain2 domain.
  END SUBROUTINE dc_InitiateCellToCellData2
END INTERFACE
```

This subroutine generates the cell to cell connectivity between
two domains.

- `obj%cellToCell` will be initiated
- `domain1` main domain
- `domain2` secondary domain

:::note
All **CELL** elements in domain-1 will be mapped to **CELL** elements in domain-2.
:::

:::info
If `cellToCell(iel)` is equal to zero then it means there is no element found in domain-2 corresponding to element number iel in domain-1.
:::

:::note
The size of `cellToCell` is the largest element number present in domain1.
:::

:::info TODO
Currently, lowerbound and upper bound of cellToCell is 1 and domain1%maxElemNumber. In the future, the lower bound will be domain1%minElemNumber.
:::

Following points should be noted before calling this routine

- This routine provides map between cell elements of one domain to cell elements of another domain.
- The topology of the both elements should be the same
- There is one to one mapping between elements of domain 1 and elements of domain2
- This routine works well for two domains of same region with same/different order. For example, domain of tri3 and domain of tri6 elements.

<Tabs>

<TabItem value="1" label="️܀ Example 1">

import EXAMPLE9 from "./_DomainConnectivity_test_19.md";

<EXAMPLE9 />

</TabItem>

<TabItem value="2" label="️܀ Example 2">

import EXAMPLE10 from "./_DomainConnectivity_test_20.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="close" label="↢" default>

</TabItem>
</Tabs>
