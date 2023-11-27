In this example we will see how to use `InitiateFacetToCellData`. We use this routine to compute the facet to cell data between a cell domain and a facet mesh. The facet mesh is the internal boundary of the domain.

The Cellmesh is shown below.

![mesh_tri3](figures/mesh_tri3.png)


Importing modules and variables

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( DomainConnectivity_ ) :: obj
  TYPE( Domain_ ) :: cellDomain
  TYPE( HDF5File_ ) :: cellDomainFile
  CHARACTER( LEN=* ), PARAMETER :: cellDomainFileName="./mesh_tri3.h5"
  CLASS( Mesh_ ), POINTER :: cellMesh
  CLASS( Mesh_ ), POINTER :: facetMesh
  CLASS( ReferenceElement_ ), POINTER :: refelem
  INTEGER( I4B ) :: ii, iel
```

Open the mesh file for cellDomain

```fortran
  CALL cellDomainFile%Initiate( FileName=cellDomainFileName, MODE="READ" )
  CALL cellDomainFile%Open()
```

Initiate the cellDomain

```fortran
  CALL cellDomain%Initiate( cellDomainFile, "")
```

Make a pointer to cellMesh and facet mesh

```fortran
  facetMesh => cellDomain%getMeshPointer( dim=1, entityNum=2 )
```

Initiate FacetTOCellData.

```fortran
  CALL obj%InitiateFacetToCellData( facetMesh=facetMesh, &
    & cellDomain=cellDomain )
  CALL obj%DisplayFacetToCellData( msg="facetToCell=" )
```

```fortran
  CALL cellDomainFile%Deallocate()
  CALL cellDomain%Deallocate()
  CALL obj%Deallocate()
END PROGRAM main
```
