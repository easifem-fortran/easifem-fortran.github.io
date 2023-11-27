---
sidebar_position: 2
---

# Structure

The structure of AbstractRefElement is given below.

```fortran
TYPE, ABSTRACT :: AbstractRefElement_
  PRIVATE
  REAL(DFP), ALLOCATABLE :: xij(:, :)
  !! Nodal coordinates
  INTEGER(I4B) :: entityCounts(4) = 0_I4B
  !! Number of 0D, 1D, 2D, 3D subentities in the reference element
  INTEGER(I4B) :: xiDimension = -1_I4B
  !! Xidimension  elemType
  !! 0 is for point
  !! 1 is for line
  !! 2 is for surface
  !! 3 is for volume
  INTEGER(I4B) :: name = -1_I4B
  !! name of the element
  TYPE(String) :: nameStr
  !! name of the element
  INTEGER(I4B) :: nsd = -1_I4B
  !! Number of spatial dimensions
  TYPE(Topology_), PUBLIC, ALLOCATABLE :: pointTopology(:)
  !! Topology information of points
  TYPE(Topology_), PUBLIC, ALLOCATABLE :: edgeTopology(:)
  !! Topology information of edges
  TYPE(Topology_), PUBLIC, ALLOCATABLE :: faceTopology(:)
  !! Topology information of facet
  TYPE(Topology_), PUBLIC, ALLOCATABLE :: cellTopology(:)
  !! Topology information of cells
  CLASS(BaseContinuity_), ALLOCATABLE :: baseContinuity
  !! continuity or conformity of basis defined on reference
  !! element, following values are allowed
  !! H1, HCurl, HDiv, DG
  CLASS(BaseInterpolation_), ALLOCATABLE :: baseInterpol
  !! Type of basis functions used for interpolation on reference
  !! element, Following values are allowed
  !! LagrangeInterpolation
  !! HermitInterpolation
  !! SerendipityInterpolation
  !! HierarchyInterpolation
  !! OrthogonalInterpolation
```

## DeferredMethods

- [GetName](/docs-api/AbstractRefElement/GetName)
- [GetFacetElements](/docs-api/AbstractRefElement/GetFacetMatrix)
- [GenerateTopology](/docs-api/AbstractRefElement/GenerateTopology)
- [RefCoord](/docs-api/AbstractRefElement/GenerateTopology)
