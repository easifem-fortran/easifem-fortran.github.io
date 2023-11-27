# InitiateFacetToCellData

This method creates the facet to cell element-data.

In this method we set the relation between element of a facet mesh (Facet elements) and master and slave domain.

A facet mesh usually denotes the boundary or part of boundary of master and slave domain.

:::caution
Please make sure that `nodeToElements` data is initiated in the cell mesh (or domain) before calling this routine.
:::

## Interface1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE InitiateFacetToCellData(obj, facetMesh, &
    & cellMesh, dim, entityNum, isMaster)
    CLASS(DomainConnectivity_), INTENT(INOUT) :: obj
    !! Domain connectivity data
    CLASS(Mesh_), INTENT(INOUT) :: facetMesh
    !! Mesh of facet elements
    CLASS(Mesh_), INTENT(INOUT) :: cellMesh
    !! Master mesh
    INTEGER(I4B), INTENT(IN) :: dim
    INTEGER(I4B), INTENT(IN) :: entityNum
    LOGICAL(LGT), INTENT(IN) :: isMaster
    !! if true then cell Mesh is master cell
    !! if false then cell mesh is slave cell
  END SUBROUTINE InitiateFacetToCellData
END INTERFACE
```

- This routine initiate `facetToCell` for given facetMesh and CellMesh
- In this case facetMesh should be a boundary of cellMesh
- This routine should not be used for internal boundary.

</TabItem>

<TabItem value="1" label="️܀ Example 1">

import EXAMPLE18 from "./_DomainConnectivity_test_21.md";

<EXAMPLE18 />

</TabItem>

<TabItem value="2" label="️܀ Example 2">

import EXAMPLE19 from "./_DomainConnectivity_test_23.md";

<EXAMPLE19 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface2

```fortran
INTERFACE
  MODULE SUBROUTINE InitiateFacetToCellData(obj, facetMesh, &
    & masterDomain, slaveDomain)
    CLASS(DomainConnectivity_), INTENT(INOUT) :: obj
    !! Mesh connectivity data
    CLASS(Mesh_), INTENT(INOUT) :: facetMesh
    !! Mesh of facet elements
    CLASS(Domain_), INTENT(INOUT) :: masterDomain
    !! Domain of master elements
    CLASS(Domain_), INTENT(INOUT) :: slaveDomain
    !! Domain of slave elements
  END SUBROUTINE InitiateFacetToCellData
END INTERFACE
```

This subroutine generates the faceToCell connectivity data between masterDomain, slaveDomain and faceMesh.

In this case facetMesh should a boundary of masterDomain and slaveDomain. In otherwords, facetMesh cannot represent the internal boundary.
This routine calls `InitiateFacetToCellData1` routine.

## Interface3

```fortran
INTERFACE
  MODULE SUBROUTINE dc_InitiateFacetToCellData3(obj, facetMesh, &
    & cellMesh, dim, entityNum)
    CLASS(DomainConnectivity_), INTENT(INOUT) :: obj
    !! Domain connectivity data
    CLASS(Mesh_), INTENT(INOUT) :: facetMesh
    !! Mesh of facet elements
    CLASS(Mesh_), INTENT(INOUT) :: cellMesh
    !! Master mesh
    INTEGER(I4B), INTENT(IN) :: dim
    INTEGER(I4B), INTENT(IN) :: entityNum
  END SUBROUTINE dc_InitiateFacetToCellData3
END INTERFACE
```

- This routine initiate `facetToCell` for given facetMesh and CellMesh
- In this case facetMesh can be an internal boundary of cellMesh

## Interface4

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE InitiateFacetToCellData(obj, facetMesh, cellDomain)
    CLASS(DomainConnectivity_), INTENT(INOUT) :: obj
    !! Domain connectivity data
    CLASS(Mesh_), INTENT(INOUT) :: facetMesh
    !! Mesh of facet elements
    CLASS(Domain_), INTENT(INOUT) :: cellDomain
    !! Master mesh
  END SUBROUTINE InitiateFacetToCellData
END INTERFACE
```

- This routine initiates `facetToCell` for given facetMesh and CellMesh
- In this case facetMesh can be an internal boundary of cellMesh

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE105 from "./_DomainConnectivity_test_22.md";

<EXAMPLE105 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>

</Tabs>
