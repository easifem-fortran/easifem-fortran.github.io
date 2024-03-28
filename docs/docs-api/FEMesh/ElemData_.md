---
sidebar_position: 3
---

# ElemData

It is a data type for storing the element-data information.

The methods related to this data structure are in ElementDataMethods, BoundaryDataMethods, FacetDataMethods

```fortran
TYPE :: ElemData_
  INTEGER(I4B) :: globalElemNum = 0
  INTEGER(I4B) :: localElemNum = 0
  INTEGER(I4B) :: elementType = INTERNAL_ELEMENT
  INTEGER(I4B), ALLOCATABLE :: globalNodes(:)
  INTEGER(I4B), ALLOCATABLE :: globalElements(:)
  INTEGER(I4B), ALLOCATABLE :: boundaryData(:)
  CONTAINS
  PROCEDURE, PUBLIC, PASS( obj ) :: Display => elemData_Display
END TYPE ElemData_
```

- `globalElemNum` global element number
- `localElemNum` local element number
- `elementType` following element types are defined:
  - `BOUNDARY_ELEMENT`: If the element contains the boundary node of the mesh, then it will be called the boundary element
  - `INTERNAL_ELEMENT`: If the element does not contain the boundary node of the mesh, then it will be called the internal element
- `globalNodes` nodes contained in the element, i.e., connectivity
- `globalElements` contains the information about the elements surrounding an element. This is explained below:

Let us say that `globalElem1`, `globalElem2`, and `globalElem3` surround a local element `ielem` (its global element number is globalElem), then

- `globalElements( [1,2,3] )` contains `globalElem1`, `pFace`, `nFace`
- `globalElements( [4,5,6] )` contains `globalElem2`, `pFace`, `nFace`
- `globalElements( [7,8,9] )` contains `globalElem3`, `pFace`, `nFace`.

Here, `pFace` is the local-facet-number of parent element, i.e., `globalElem (ielem)`, which is connected to the `nFace` (local-facet-number) of the neighboring element.

- `boundaryData` If an element contains the boundary node of the mesh, then it is considered as a boundary element. If `iel` is a boundary element, then `boudnaryData` contains the local-facet-numbers of `iel` which coincides with the mesh boundary. It may happen that a boundary element has no boundary face (but only a single boundary node), in this case `boundaryData` will have zero size.
