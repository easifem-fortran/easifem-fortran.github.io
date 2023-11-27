# Structure

This class is designed for generating mapping between two domains, or parts of two domains.

Two domains can have the following relation between them

**pType** has the following properties:

- Same geometry
- Same number of elements
- CellToCell is an identity
- Different number of nodes
- Different order

**hType** has the following properties:

- Same geometry
- Different number of elements
- Different number of nodes
- order is same.
- Same element topology for a given mesh
- CellToCell(iel) will be a collection of elements in Domain 2.

**rType** has the following properties:

- Same geometry
- Same number of nodes
- Same number of elements
- CellToCell is identity matrix
- NodeToNode is an identity matrix
- Spatial position of nodes would be different

## Structure

The structure of DomainConnectivity is given below.

```fortran
TYPE :: DomainConnectivity_
  PRIVATE
  LOGICAL(LGT), PUBLIC :: isInitiated = .FALSE.
  LOGICAL(LGT), PUBLIC :: isFacetToCell = .FALSE.
  LOGICAL(LGT), PUBLIC :: isNodeToNode = .FALSE.
  LOGICAL(LGT), PUBLIC :: isCellToCell = .FALSE.
  INTEGER(I4B), ALLOCATABLE :: nodeToNode(:)
  INTEGER(I4B), ALLOCATABLE :: cellToCell(:)
  INTEGER(I4B), ALLOCATABLE :: cellToCellExtraData(:, :)
  TYPE(FacetConnectivity_), ALLOCATABLE :: facetToCell(:)
  TYPE(ElementConnectivity_), ALLOCATABLE :: elemToElem(:)
```

- isInitiated, is true if an instance of DomainConnectivity is initiated
- isFacetToCell is true if facetToCell data is initiated
- isNodeToNode is true if nodeToNode data is initiated
- isCellToCell is true if cellToCell data is initiated

- nodeToNode, contains the node-to-node mapping from one mesh/domain to another mesh/domain.

  - We can create mapping between parts of domain (mesh) or domains. See [InitiateNodeToNodes](./InitiateNodeToNodes.md)
  - Size of NodeToNode is equal to the largest node number in domain-1 or mesh-1 (depending upon how the data is initiated)
  - NodeToNode(i) implies global node number in domain-2/mesh-2, corresponding to global node number `i` in domain-1/mesh-1.

- cellToCell contains the cell-to-cell mapping from one mesh/domain to another mesh/domain.

  - We can create mapping between parts of domain (mesh) or domains. See, [InitiateCellToCellData](InitiateCellToCellData.md)
  - Size of cellToCell is equal to the largest element number in domain-1 or mesh-1 (depending upon how the data is initiated)
  - cellToCell(i) denotes global element number in domain-2/ mesh-2, corresponding to global element number `i` in domain-1/ mesh-1

- cellToCellExtraData: Currently,

  - cellToCellExtraData has two rows (a) the first row is dim, (b) the second row is entityNum.
  - each column represents the element number, for example
    - iel1 in domain1, then cellToCell(iel1) gives iel2 in domain2
    - cellToCellExtraData(1, iel1) gives dimension of mesh which contains iel2
    - cellToCellExtraData(2, iel1) gives entityNum of mesh which contains iel2
    - In this way, `domain2%getMeshPointer(dim, entityNum)` can give us the pointer to the mesh which contains the iel2

- facetToCell, facet to cell-connectivity data.

- [ ] elemToElem, currently, we do not know how to implement it (TODO).

## FacetConnectivity

```fortran
TYPE :: FacetConnectivity_
  INTEGER(I4B) :: facetID = 0
    !! global element number of facet element in facet mesh
  INTEGER(I4B) :: GlobalCellData(4, 2) = 0
    !! 1,1 --> Global element number of master cell
    !! 2,1 --> master cell's local facet number connected to facet-elem
    !! 3,1 --> master mesh dimension
    !! 4,1 --> master mesh entity number
    !! 1,2 --> Global element number of slave cell
    !! 2,2 --> slave cell's local facet number connected to facet-elem
    !! 3,2 --> slave mesh dimension
    !! 4,2 --> slave mesh entity number
END TYPE FacetConnectivity_
```

## ElementConnectivity

```fortran
TYPE :: ElementConnectivity_
  INTEGER(I4B) :: masterGlobalElemNum = 0
  INTEGER(I4B) :: masterLocalFacetID = 0
  INTEGER(I4B) :: slaveGlobalElemNum = 0
  INTEGER(I4B) :: slaveLocalFacetID = 0
END TYPE ElementConnectivity_
```
