---
title: Structure
sidebar_position: 2
---

# Structure

Mesh datatype is simply a collection of mesh elements.

In EASIFEM mesh is a homogeneous collection of reference elements. All elements in mesh should be of same type (i.e., triangle, quadrangle, tetrahedron, etc.). Two mesh can have different types of elements. For example, we can define a mesh of triangle element or a mesh of tetrahedron element.

```fortran
TYPE :: Mesh_
  PRIVATE
  LOGICAL(LGT) :: readFromFile = .TRUE.
    !! True if the mesh is read from a file
  LOGICAL(LGT) :: isInitiated = .FALSE.
    !! logical flag denoting for whether mesh data is Initiated or not
  LOGICAL(LGT) :: isNodeToElementsInitiated = .FALSE.
    !! Node to elements mapping
  LOGICAL(LGT) :: isNodeToNodesInitiated = .FALSE.
    !! Node to nodes mapping
  LOGICAL(LGT) :: isExtraNodeToNodesInitiated = .FALSE.
    !! Node to nodes mapping
  LOGICAL(LGT) :: isElementToElementsInitiated = .FALSE.
    !! Element to elements mapping
  LOGICAL(LGT) :: isBoundaryDataInitiated = .FALSE.
    !! Boundary data
  LOGICAL(LGT), PUBLIC :: isFacetDataInitiated = .FALSE.
    !! FacetData
    !! TODO: Make isFacetDataInitiated PRIVATE
  INTEGER(I4B) :: uid = 0
    !! Unique id of the mesh
  INTEGER(I4B) :: xidim = 0
    !! xidimension of elements present inside the mesh
  INTEGER(I4B) :: elemType = 0
    !! type of element present inside the mesh
  INTEGER(I4B) :: nsd = 0
    !! number of spatial dimension of the mesh
  INTEGER(I4B), PUBLIC :: maxNptrs = 0
    !! largest node number present inside the mesh
  INTEGER(I4B), PUBLIC :: minNptrs = 0
    !! minimum node number present inside the mesh
  INTEGER(I4B), PUBLIC :: maxElemNum = 0
    !! largest element number present inside the mesh
  INTEGER(I4B), PUBLIC :: minElemNum = 0
    !! minimum element number present inside the mesh
  INTEGER(I4B) :: tNodes = 0
    !! total number of nodes present inside the mesh
  INTEGER(I4B) :: tIntNodes = 0
    !! total number of internal nodes inside the mesh
  INTEGER(I4B) :: tElements = 0
    !! total number of elements present inside the mesh
    !! It is the size of elemNumber vector
  REAL(DFP) :: minX = 0.0
    !! minimum value of x coordinate
  REAL(DFP) :: maxX = 0.0
    !! maximum value of x coordinate
  REAL(DFP) :: minY = 0.0
    !! minimum value of y coordinate
  REAL(DFP) :: maxY = 0.0
    !! maximum value of y coordinate
  REAL(DFP) :: minZ = 0.0
    !! minimum value of z coordinate
  REAL(DFP) :: maxZ = 0.0
    !! maximum value of z coordinate
  REAL(DFP) :: X = 0.0
    !! x coorindate of centroid
  REAL(DFP) :: Y = 0.0
    !! y coordinate of centroid
  REAL(DFP) :: Z = 0.0
    !! z coordinate of centroid
  INTEGER(I4B), ALLOCATABLE :: physicalTag(:)
    !! Physical entities associated with the current entity (mesh)
  INTEGER(I4B), ALLOCATABLE :: boundingEntity(:)
    !! Bounding entity numbers of the current entity
  INTEGER(I4B), ALLOCATABLE :: local_elemNumber(:)
    !! List of local element numbers, the lowerbound is `minElemNum`
    !! and upper bound is `maxElemNum`. In this way, local_elemNumber(iel)
    !! returns the local element number of global element number iel.
  INTEGER(I4B), ALLOCATABLE :: local_Nptrs(:)
    !! Returns local node number from a global node number
    !! Its length is from 1 to maxNptrs
    !! Helpul in finding if a global node is present inside the mesh or not
  INTEGER(I4B), ALLOCATABLE :: material(:)
    !! materials mapped to the mesh
    !! material(1) is the material id of medium 1
    !! material(2) is the material id of medium 2
    !! ...
    !! material(n) is the material id of medium n
    !!
    !! For example, soil is a porous medium n = 1,
    !! fluid is a medium n =2
    !! then material(1) denotes the type of soil => clay, sand, silt
    !! and material(2) denotes the type of fluid, water, oil, air
  TYPE(ReferenceElement_), PUBLIC, ALLOCATABLE :: facetElements(:)
    !! Facet Elements in the reference element
  INTEGER(I4B), ALLOCATABLE :: facetElementType(:, :)
  !! Number of rows of this array is same as the total number of
  !! facets present in the mesh-reference elements
  !! Number of columns of this array is equal to the total number of
  !! elements inside the mesh
  !! facetElementType(ii, iel) can be
  !! INTERNAL_ELEMENT, BOUNDARY_ELEMENT, DOMAIN_BOUNDARY_ELEMENT
  !! If the face is a part of the mesh boundary then it will be called
  !! the BOUNDARY_ELEMENT
  TYPE(NodeData_), ALLOCATABLE :: nodeData(:)
    !! Node data
  TYPE(ElemData_), ALLOCATABLE :: elementData(:)
    !! element data
  TYPE(InternalFacetData_), PUBLIC, ALLOCATABLE :: internalFacetData(:)
    !! Internal facet data
  TYPE(BoundaryFacetData_), PUBLIC, ALLOCATABLE :: boundaryFacetData(:)
    !! Domain Facet Data
  CLASS(ReferenceElement_), PUBLIC, POINTER :: refelem => NULL()
    !! Reference element of the mesh (spatial)
    !! TODO: Change refelem to Type(ReferenceElement_)
  REAL(DFP), ALLOCATABLE :: quality(:, :)
    !! number of rows are meshquality
    !! number of columns are elements
  INTEGER(I4B), PUBLIC :: ipType = Equidistance
    !! interpolation point type

  ! Following variables are required during processing.
  ! time
  TYPE(QuadraturePoint_), PUBLIC :: quadForTime
    !! quadrature point for time domain #STFEM
  TYPE(ElemshapeData_), PUBLIC :: linTimeElemSD
    !! Element shape data on linear time element #STFEM
  TYPE(ElemshapeData_), PUBLIC :: timeElemSD
    !! Element shape data on time element #STFEM
  TYPE(String) :: quadTypeForTime
    !! quadrature type for time
  TYPE(String) :: continuityTypeForTime
    !! continuity of base function for time
  TYPE(String) :: interpolTypeForTime
    !! interpolation of base function for time
  INTEGER(I4B) :: orderTime
    !! order for time

  ! space (cell)
  TYPE(QuadraturePoint_), PUBLIC :: quadForSpace
    !! quadrature point for space
  TYPE(ElemshapeData_), PUBLIC :: linSpaceElemSD
    !! Element shape data on linear space (simplex) element
  TYPE(ElemshapeData_), PUBLIC :: spaceElemSD
    !! Element shape data on space element
  TYPE(STElemshapeData_), ALLOCATABLE, PUBLIC :: stelemsd(:)
    !! Element shape data on space element
  TYPE(String) :: quadTypeForSpace
    !! quadrature type for space
  TYPE(String) :: continuityTypeForSpace
    !! continuity of base function for space
  TYPE(String) :: interpolTypeForSpace
    !! interoplation type of base function for space
  INTEGER(I4B) :: orderSpace
    !! order for space

  ! space (facets)
  TYPE(QuadraturePoint_), ALLOCATABLE, PUBLIC :: quadForFacet(:)
    !! quadrature point for facet elements
  TYPE(QuadraturePoint_), ALLOCATABLE, PUBLIC :: quadForFacetCell(:)
    !! quadrature point for facet-cell elements
  TYPE(ElemshapeData_), ALLOCATABLE, PUBLIC :: linFacetElemSD(:)
    !! Element shape data on linear facet (simplex) element
  TYPE(ElemshapeData_), ALLOCATABLE, PUBLIC :: linFacetCellElemSD(:)
    !! Element shape data on linear facet (simplex) cell element
  TYPE(ElemshapeData_), ALLOCATABLE, PUBLIC :: facetElemSD(:)
    !! Element shape data on facet element
  TYPE(ElemshapeData_), ALLOCATABLE, PUBLIC :: facetCellElemSD(:)
    !! Element shape data on facet cell element
  TYPE(String) :: quadTypeForFacet
    !! quadrature type for facet element
  TYPE(String) :: continuityTypeForFacet
    !! continuity of base function for facet element
  TYPE(String) :: interpolTypeForFacet
    !! interoplation type of base function for facet element
  INTEGER(I4B) :: orderFacet
    !! order for facet element
  TYPE(STElemshapeData_), ALLOCATABLE, PUBLIC :: facetSTelemsd(:, :)
    !! Element shape data on facet element
END TYPE Mesh_
```

- `readFromFile` is true if the mesh is read from a file.
- `isInitiated` is logical flag denoting whether mesh data is initiated or not.
- `isNodeToElementsInitiated` is true if node to elements mapping is initiated.
- `isNodeToNodesInitiated` is true of node to nodes mapping is initiated.
- `isElementToElementsInitiated` is true if element to elements mapping available.
- `isBoundaryDataInitiated` is true if boundary data is available.
- `uid` denotes the unique-id of the mesh.
- `xidim` denotes the `xidimension` of elements present inside the mesh, `xidim` = (0,1,2,3) for (point, line, surface, volume) elements.
- `elemType` denotes the type of element present inside the mesh.
- `nsd` denotes the number of spatial dimension of the mesh.
- `maxNptrs` stands for the largest node number present inside the mesh.
- `minNptrs` stands for the smallest node number present inside the mesh.
- `maxElemNum` denotes the largest element number present inside the mesh.
- `minElemNum` denotes the smallest element number present inside the mesh.
- `tNodes` is the total number of (local) nodes present inside the mesh.
- `tIntNodes` is the total number of internal nodes inside the mesh.
- `tElements` is the total number of elements present inside the mesh. It is the size of `elemNumber` vector.
- `minX` denotes the minimum value of x coordinate of `boundingbox`.
- `maxX` denotes the maximum value of x coordinate of `boundingbox`.
- `minY` is the minimum value of y coordinate of `boundingbox`.
- `maxY` is the maximum value of y coordinate of `boundingbox`.
- `minZ` is the minimum value of z coordinate of `boundingbox`.
- `maxZ` is the maximum value of z coordinate of `boundingbox`.
- `X` is the x coordinate of center of mesh.
- `Y` is the y coordinate of center of mesh.
- `Z` is the z coordinate of center of mesh.
- `physicalTag` denotes the physical entities associated with the current entity (mesh)
- `boundingEntity` denotes the bounding entity numbers of the current entity
- `local_elemNumber` denotes the list of local element numbers, the lower bound is `minElemNum` and upper bound is `maxElemNum`. In this way, `local_elemNumber(iel)` returns the local element number of global element number `iel`.
- `local_Nptrs` returns the local node number from a global node number. Its length is from 1 to `maxNptrs`. Helpful in finding if a global node is present inside the mesh or not.
- `material` materials mapped to the mesh, for example
  - `material(1)` is the material-id of medium 1
  - `material(2)` is the material-id of medium 2
  - $\cdots$
  - `material(n)` is the material-id of medium n
  - For example, soil is a porous medium n = 1,
  - fluid is a medium n =2
  - then material(1) denotes the type of soil, that is, clay, sand, and silt.
  - and material(2) denotes the type of fluid, water, oil, air.

- `facetElements` denotes the facet Elements in the reference element
- `facetElementType`
  - Number of rows of this array is same as the total number of facets present in the mesh’s reference-element.
  - Number of columns of this array is equal to the total number of elements inside the mesh.
  - In this way, `facetElementType(ii, iel)` denotes the `ii`th facet’s type of element local element number `iel`
  - `facetElementType` can be
    - `INTERNAL_ELEMENT`,
    - `BOUNDARY_ELEMENT`,
    - `DOMAIN_BOUNDARY_ELEMENT`.
  - If the face is a part of the mesh boundary then it will be called the `BOUNDARY_ELEMENT`
  - If the face is part of domain boundary, then it is a `DOMAIN_BOUNDARY_ELEMENT`
  - If the facet is internal to a mesh, then it is a `INTERNAL_ELEMENT`
  - Note that every, `DOMAIN_BOUNDARY_ELEMENT` is `BOUNDARY_ELEMENT` but not vice-versa.

- `nodeData` node data
- `elementData` element data
- `internalFacetData` internal facet data
- `boundaryFacetData` boundary facet Data
- `refelem` Reference element of the mesh (spatial).

Following variables are required during for time shape functions in space-time finite elements.

- `quadForTime`, quadrature point for time domain
- `linTimeElemSD` Element shape data on linear time element 
- `timeElemSD` Element shape data on time element 
- `quadTypeForTime` quadrature type for time
- `continuityTypeForTime` continuity of base function for time
- `interpolTypeForTime` interpolation of base function for time
- `orderTime` order for time

Following variables are required during for space-shape functions finite elements computations.

- `quadForSpace` quadrature point for space
- `linSpaceElemSD` Element shape data on linear space (simplex) element
- `spaceElemSD` Element shape data on space element
- `stelemsd` Element shape data on space element
- `quadTypeForSpace` quadrature type for space
- `continuityTypeForSpace` continuity of base function for space
- `interpolTypeForSpace` interpolation type of base function for space
- `orderSpace` order for space

Following variables are required during for shape functions on facet elements in finite elements computations.

- `quadForFacet` quadrature point for facet elements
- `linFacetElemSD` Element shape data on linear facet (simplex) element
- `facetElemSD` Element shape data on facet element
- `facetSTelemsd` Element shape data on facet element
- `quadTypeForFacet` quadrature type for facet element
- `continuityTypeForFacet` continuity of base function for facet element
- `interpolTypeForFacet` interpolation type of base function for facet element
- `orderFacet` order for facet element
