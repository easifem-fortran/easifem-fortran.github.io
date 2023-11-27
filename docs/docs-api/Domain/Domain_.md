# Structure

The structure of Domain CLASS is given below.

```fortran
TYPE :: Domain_
  PRIVATE
  LOGICAL(LGT), PUBLIC :: isInitiated = .FALSE.
    !! flag
  TYPE(String) :: engine
    !! Engine used for generating the meshes
  INTEGER(I4B) :: majorVersion = 0
    !! Major version
  INTEGER(I4B) :: minorVersion = 0
    !! Minor version
  REAL(DFP) :: version = 0.0_DFP
    !! Version  MajorVersion.MinorVersion
  INTEGER(I4B) :: nsd = 0_I4B
    !! number of spatial dimension
  INTEGER(I4B), PUBLIC :: maxNptrs = 0
    !! Largest node number in the domain
  INTEGER(I4B), PUBLIC :: minNptrs = 0
    !! Smallest node number in the domain
  INTEGER(I4B) :: tNodes = 0
    !! Total number of nodes in the mesh
  LOGICAL(I4B) :: isNodeNumberSparse = .FALSE.
    !! True if node numbers are not continuous
  INTEGER(I4B), PUBLIC :: maxElemNum = 0
    !! Largest element number in the domain
  INTEGER(I4B), PUBLIC :: minElemNum = 0
    !! Smallest element number in the domain
  LOGICAL(LGT) :: isElemNumberSparse = .FALSE.
    !! True if element numbers are sparse
  INTEGER(I4B) :: tEntitiesForNodes = 0
    !! Total number of entities required for reading nodes
  INTEGER(I4B) :: tEntitiesForElements = 0
    !! Total number of entities required for reading elements
  INTEGER(I4B) :: tElements(0:3) = [0, 0, 0, 0]
    !! Total number of elements inside the domain
    !! tElements( 0 ) = total number of point elements
    !! tElements( 1 ) = total number of line elements
    !! tElements( 2 ) =  total number of surface elements
    !! tElements( 3 ) = total number of volume/cell elements
  INTEGER(I4B) :: tEntities(0:3) = [0, 0, 0, 0]
    !! Total number of entities inside the domain
    !! tEntities( 0 ) = total number of point mesh entities, mesh of Points
    !! tEntities( 1 ) = total number of line mesh entities, mesh of Edge
    !! tEntities( 2 ) = total number of surface mesh entities, mesh Boundary
    !! tEntities( 3 ) = total number of volume mesh entities, Omega
  REAL(DFP), ALLOCATABLE, PUBLIC :: nodeCoord(:, :)
    !! Nodal coordinates in XiJ format
    !! Number of rows are 3, and number of columns is total nodes
  INTEGER(I4B), ALLOCATABLE, PUBLIC :: local_nptrs(:)
    !! local_nptrs are required to access the nodeCoord
  INTEGER(I4B), ALLOCATABLE, PUBLIC :: global_nptrs(:)
    !! global nptrs
  TYPE(MeshPointerVector_), ALLOCATABLE :: meshList(:)
    !! meshList( 0 ) list of meshes of point entities
    !! meshList( 1 ) list of meshes of line entities
    !! meshList( 2 ) list of meshes of surface entities
    !! meshList( 3 ) list of meshes of volume entities
  TYPE(MeshFacetData_), ALLOCATABLE, PUBLIC :: meshFacetData(:)
  TYPE(CSRSparsity_) :: meshMap
```

- `isInitiated` It is true if the domain is initiated.
- `engine` It is the name of the engine used to create the mesh
- `majorVersion` It is the major version of the mesh engine
- `minorVersion` It is the minor version of the mesh engine
- `version` this is the version of the mesh engine
- `nsd` this is the spatial dimension of the domain
- `maxNptrs`, the largest node number in the domain
- `minNptrs`, the smallest node number in the domain
- `isElemNumberSparse` True if the element numbers are sparse
- `tEntitiesForNodes` Total number of entities for the nodes
- `tEntitiesForElements` total number of entities for the mesh.

- `tElements` It is an integer vector of length 4. Lower bound is 0 and upper bound is 1.

  - `tElements(0)` denotes the total number of point elements
  - `tElements(1)` denotes the total number of curve elements
  - `tElements(2)` denotes the total number of surface elements
  - `tElements(3)` denotes the total number of volume elements.

- `tEntities` It is an integer vector of length 4. It denotes the total number of entities of a given co dimension.

  - `tEntities(0)` total number of entities (mesh) of point elements
  - `tEntities(1)` total number of entities (mesh) of curve elements
  - `tEntities(2)` total number of entities (mesh) of surface elements
  - `tEntities(3)` total number of entities (mesh) of volume elements.

- `nodeCoord` nodal coordinates. rows of nodeCoord represent the spatial dimension. columns of nodeCoord represents the spatial node number.
- `local_nptrs` It is the index mapping which converts global node number to local node number.
- `global_nptrs`, local to global node number mapping.

- `meshList`
  - `meshList(0)` list of meshes of point entities
  - `meshList( 1 )` list of meshes of line entities
  - `meshList( 2 )` list of meshes of surface entities
  - `meshList( 3 )` list of meshes of volume entities

`meshFacetData` mesh facet data is given below.

```fortran
TYPE MeshFacetData_
  INTEGER(I4B) :: masterMesh = 0
  INTEGER(I4B) :: slaveMesh = 0
  INTEGER(I4B), ALLOCATABLE :: masterCellNumber(:)
  INTEGER(I4B), ALLOCATABLE :: slaveCellNumber(:)
  INTEGER(I4B), ALLOCATABLE :: masterLocalFacetID(:)
  INTEGER(I4B), ALLOCATABLE :: slaveLocalFacetID(:)
  ! CLASS( Halo_ ), POINTER :: halo => NULL()
END TYPE MeshFacetData_
```

`meshMap` contains the connectivity of meshes of dimension `nsd` (that is, meshes of cell $\Omega$).

Let us say there are $n$ meshes of cell elements. That is,

- In 1D, cell means line elements
- In 2D, cell means surface elements
- In 3D, cell means volume elements

Then, we constructs a sparse matrix, $M$, of dimension $n \times n$. If $M(I,J), I,J=1,2,\cdots,n$ is 1 then mesh-I and mesh-J are connected with each other. Otherwise, they are not connected with each other. This information is stored in an instance of [CSRSparsity](../CSRSparsity/CSRSparsity_.md) in `meshMap`
