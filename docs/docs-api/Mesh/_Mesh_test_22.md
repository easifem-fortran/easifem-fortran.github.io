# Mesh example 22

!!! example ""
    This example shows how to use `DisplayInternalFacetData` method to display the content of internal facet data.

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
    Displaying the node data.

```fortran
  CALL obj%DisplayInternalFacetData( "Internal facet data" )
```

!!! note "cleanup"

```fortran
  CALL obj%Deallocate()
  CALL meshfile%Deallocate()
END PROGRAM main
```
