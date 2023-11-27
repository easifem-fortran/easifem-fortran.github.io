# Mesh example 19

!!! note ""
    This example demonstrate methods for getting information of `meshFacetData`. mesh facet elements have `BOUNDARY_ELEMENT` type.

!!! note ""
    In this example we do create an instance of [[Domain_]], therefore,
    we build the information about `DOMAIN_BOUNDARY_ELEMENT` (`domainFacetData`) and `BOUNDARY_ELEMENT` (`meshFacetData`).

The mesh is given below

![[figures/mesh.png]]

## Modules and classes

- [[Domain_]]
- [[Mesh_]]
- [[HDF5File_]]

## Usage

!!! note ""
    Import modules and declare variables

``` fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  CLASS( Mesh_ ), POINTER :: obj
  TYPE( Domain_ ) :: dom
  TYPE( HDF5File_ ) :: domainFile
  INTEGER( I4B ), ALLOCATABLE :: nptrs( : )
  INTEGER( I4B ) :: iel, ii
  CHARACTER( LEN=* ), PARAMETER :: filename="./mesh.h5"
```

!!! note ""
    Initiate and open the mesh file which is in [[HDF5File_]] format. Then, create an instance of mesh.

```fortran
  CALL domainFile%Initiate( FileName=filename, MODE="READ" )
  CALL domainFile%Open()
  CALL dom%Initiate(hdf5=domainFile, group="" )
  obj => dom%getMeshPointer(dim=dom%getNSD(), entityNum=1)
```

!!! note ""
    Getting the total number of `meshFacetElement`

```fortran
  CALL Display( obj%getTotalMeshFacetElements(), &
    & "getTotalMeshFacetElements=")
```

!!! note ""
    Getting the master cell number of an mesh facet element. Getting the `masterLocalFacetID` of an mesh facet element.

```fortran
  DO iel = 1, obj%getTotalMeshFacetElements()
    !!
    ii  = obj%getMasterCellNumber( facetElement=iel, &
      & elementType=BOUNDARY_ELEMENT, &
      & facetBoundary=1 )
    !!
    CALL Display( obj%getConnectivity( globalElement=ii ), &
      & "cellNptrs = " )
    !!
    CALL Display( obj%getFacetConnectivity( facetElement=iel, &
      & elementType=BOUNDARY_ELEMENT, &
      & isMaster=.TRUE., &
      & facetBoundary=1 ), "facetNptrs=" )
    !!
    CALL Display( obj%getLocalFacetID( &
      & facetElement=iel, &
      & elementType=BOUNDARY_ELEMENT, &
      & isMaster = .TRUE., &
      & facetBoundary=1 ), &
      & "masterLocalFacetID( " // tostring( iel ) // " ) = " )
  END DO
```

!!! note ""
    Getting the slave cell number of an mesh facet element. Getting the `masterLocalFacetID` of an mesh facet element.

```fortran
  CALL Display( "== SlaveCell== " )
  DO iel = 1, obj%getTotalMeshFacetElements()
    !!
    ii  = obj%getSlaveCellNumber( facetElement=iel, &
      & elementType=BOUNDARY_ELEMENT, &
      & facetBoundary=1 )
    !!
    CALL Display( ii, "getSlaveCellNumber = " )
    !!
    CALL Display( obj%getLocalFacetID( &
      & facetElement=iel, &
      & elementType=BOUNDARY_ELEMENT, &
      & isMaster = .FALSE., &
      & facetBoundary=1 ), &
      & "slaveLocalFacetID( " // tostring( iel ) // " ) = " )
  END DO
```

!!! note "cleanup"

```fortran
  NULLIFY( obj )
  CALL dom%Deallocate()
  CALL domainFile%Close()
  CALL domainFile%Deallocate()
END PROGRAM main
```
