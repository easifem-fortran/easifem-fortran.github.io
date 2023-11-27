# Mesh example 10

!!! example ""
    This example shows how to get the node to node connectivity data in the mesh.

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
```

!!! note ""
    Initiate and open the mesh file which is in [[HDF5File_]] format. Then, create an instance of mesh.

```fortran
  CALL meshfile%Initiate( FileName="./mesh.h5", MODE="READ" )
  CALL meshfile%Open()
  CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )
```

!!! note ""
    Now we get the global nodes connected to the global node

```fortran
  nptrs = obj%GetNodeToNodes( globalNode=200, IncludeSelf=.FALSE. )
  CALL OK( nptrs .IN. [294, 205, 201, 195, 187, 285], "GetNodeToNodes:" )
```

!!! note ""
    Now we get the global node numbers connected to several global nodes

```fortran
  nptrs = obj%GetNodeToNodes( globalNode=[200, 260], includeSelf=.FALSE. )
  CALL OK( nptrs .IN. [294, 205, 201, 195, 187, 285, &
    & 268, 178, 170, 172, 181], "GetNodeToNodes:" )
```

!!! note "cleanup"

```fortran
  CALL obj%Deallocate()
  CALL meshfile%Close()
  CALL meshfile%Deallocate()
END PROGRAM main
```
