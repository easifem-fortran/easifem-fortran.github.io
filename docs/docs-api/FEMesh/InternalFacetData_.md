---
sidebar_position: 4
title: InternalFacetData
---

Data storage for internal facet of mesh.

The internal facet of mesh contains two cell elements; master cell and slave cell.

## Structure

```fortran
TYPE InternalFacetData_
  INTEGER( I4B ) :: masterCellNumber = 0
  INTEGER( I4B ) :: slaveCellNumber = 0
  INTEGER( I4B ) :: masterLocalFacetID = 0
  INTEGER( I4B ) :: slaveLocalFacetID = 0
  CONTAINS
  PROCEDURE, PUBLIC, PASS( obj ) :: Display => InternalFacetData_Display
END TYPE InternalFacetData_
```

- `masterCellNumber` master cell number (global element number)
- `slaveCellNumber` slave cell number (global element number)
- `masterLocalFacetID` local-facet-number in master cell
- `slaveLocalFacetID` slave-facet-number in slave cell

## Implementation details

This data structure is initiated by the method called [`InitiateFacetElements`](./InitiateFacetElements.md).
