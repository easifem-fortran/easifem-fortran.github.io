# Mesh example 9

!!! example ""
    This example shows how to get the node to element connectivity data in the mesh.

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
    Now we get the global elements connected to the global node

```fortran
  nptrs = obj%GetNodeToElements( globalNode=200 )
  CALL OK( nptrs .IN. [144,391,423,405,542, 489], "GetNodeToElements:" )
```

!!! note ""
    Now we get the global elements connected to several global nodes

```fortran
  nptrs = obj%GetNodeToElements( globalNode=[200, 260] )
  CALL OK( nptrs .IN. [144,391,423,405,542, 489, &
    & 342, 378, 419, 442, 361, 377], "GetNodeToElements:" )
```

!!! note "cleanup"

```fortran
  CALL obj%Deallocate()
  CALL meshfile%Close()
  CALL meshfile%Deallocate()
END PROGRAM main
```
