---
title: BoundaryFacetData
sidebar_position: 5
---

Data storage for boundary elements (i.e., facets which coincides with the boundary of mesh)

`BoundaryFacetData_` represents the domain boundary elements which are located
on the boundary of the domain. 

Of course `domainFacet` elements are located on the mesh's boundary with only difference that these elements do not have `slaveCellNumber`

## Structure

```fortran
TYPE BoundaryFacetData_
  INTEGER( I4B ) :: masterCellNumber = 0
  INTEGER( I4B ) :: masterLocalFacetID = 0
  INTEGER( I4B ) :: elementType = 0
  CONTAINS
  PROCEDURE, PUBLIC, PASS( obj ) :: Display => BoundaryFacetData_Display
END TYPE BoundaryFacetData_
```

:::info `masterCellNumber`
::: 

Master cell number. 

:::info `masterLocalFacetID`
::: 

Local face number in the master cell. 

:::info `elementType`
::: 

This variable distinguishes between domain boundary element and mesh boundary element.

## Implementation details 

This data structure is initiated by the method called [`InitiateFacetElements`](./InitiateFacetElements.md).

The information is further refined by [`SetDomainFacetElement`](../Domain/SetDomainFacetElement.md) from [Domain_](../Domain/Domain_.md) class.

### Mesh boundary element

A mesh boundary element is a facet element which is located at the mesh's boundary.

### Domain boundary element

A domain boundary element is a facet element which is located at the mesh's boundary.
