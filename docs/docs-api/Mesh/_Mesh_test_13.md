# Mesh example 13

!!! example ""
    This example demonstates the usages of some simple methods related to the internal facet elements of the mesh.

!!! note ""
    In this example we do not create a domain, therefore, we have no information about the MeshFacetData. This information is only avaiable when we create a domain. this is because `MeshFacetData` denotes the interface between two meshes.

The mesh is given below

![[figures/mesh.png]]

## Modules and classes

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
  TYPE( Mesh_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  INTEGER( I4B ), ALLOCATABLE :: nptrs( : )
  INTEGER( I4B ) :: iel, ii
  CHARACTER( LEN=* ), PARAMETER :: filename="./mesh.h5"
```

!!! note ""
    Initiate and open the mesh file which is in [[HDF5File_]] format. Then, create an instance of mesh.

```fortran
  CALL meshfile%Initiate( FileName=filename, MODE="READ" )
  CALL meshfile%Open()
  CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )
```

!!! note ""
    Getting the total number of Internal Facet elements in the mesh.

```fortran
  CALL Display( obj%GetTotalInternalFacetElements(), &
    & "GetTotalInternalFacetElements=")
```

!!! note ""
    Getting the total number of boundary facet elements in the mesh.

```fortran
  CALL Display( obj%getTotalBoundaryFacetElements(), &
    & "getTotalBoundaryFacetElements=")
```

!!! note ""
    Getting the total number of Domain Facet elements in the mesh.

```fortran
  CALL Display( obj%getTotalDomainFacetElements(), &
    & "getTotalDomainFacetElements=")
```

!!! note ""
    Getting the total number of Mesh Facet elements in the mesh.

```fortran
  CALL Display( obj%getTotalMeshFacetElements(), &
    & "getTotalMeshFacetElements=")
```

!!! note ""
    Getting the master cell number of an internal facet element.

```fortran
  DO iel = 1, obj%getTotalInternalFacetElements()
    CALL Display( obj%getMasterCellNumber( facetElement=iel, &
      & elementType=INTERNAL_ELEMENT ), &
      & "masterCell( " // tostring( iel ) // " ) = " )
  END DO
```

!!! note ""
    Getting the slave number of an internal facet element.

```fortran
  DO iel = 1, obj%getTotalInternalFacetElements()
    CALL Display( obj%getSlaveCellNumber( facetElement=iel, &
      & elementType=INTERNAL_ELEMENT ), &
      & "SlaveCell( " // tostring( iel ) // " ) = " )
  END DO
```

!!! note ""
    Getting the connectivity of an internal facet element

```fortran
  DO iel = 1, obj%getTotalInternalFacetElements()
    CALL Display( obj%getFacetConnectivity( facetElement=iel, &
      & elementType=INTERNAL_ELEMENT, isMaster=.TRUE. ), &
      & "internalFacetElementData( " // tostring( iel ) // " ) = " )
  END DO
```

!!! note "cleanup"

```fortran
  CALL obj%Deallocate()
  CALL meshfile%Close()
  CALL meshfile%Deallocate()
END PROGRAM main
```
