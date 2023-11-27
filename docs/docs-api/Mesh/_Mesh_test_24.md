# Mesh example 24

!!! example ""
    This example shows how to use `DisplayBoundaryFacetData` method to display the boundary facet data.

!!! note ""
    In this example we do create an instance of [[Domain_]], therefore,
    we build the information about `DOMAIN_BOUNDARY_ELEMENT` and `BOUNDARY_ELEMENT`.

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
    Display the information of facets of the mesh.

```fortran
  CALL obj%DisplayBoundaryFacetData( "BoundaryFacetData = " )
```

!!! note "cleanup"

```fortran
  CALL obj%Deallocate()
  CALL domainFile%Deallocate()
END PROGRAM main
```
