# Mesh example 6

!!! example ""
    This example shows how to get the bounding box of the [[Mesh_]].

The mesh is given below

![[figures/mesh.png]]

## Modules and classes

- [[Mesh_]]
- [[HDF5File_]]
- [[BoundingBox_]]

## Usage

!!! note ""
    Import modules and declare variables

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( Mesh_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  TYPE( BoundingBox_ ) :: box
```

!!! note ""
    Initiate and open the mesh file which is in [[HDF5File_]] format. Then initiate an instance of the [[Mesh_]].

```fortran
  CALL meshfile%Initiate( FileName="./mesh.h5", MODE="READ" )
  CALL meshfile%Open()
```

!!! note ""
    Getting the bounding box of the mesh of 2d elements.

```fortran
  CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )
  box = obj%GetBoundingBox()
  CALL Display( box, "" )
  CALL obj%Deallocate()
```

!!! note ""
    Getting the bounding box of the mesh of 1d elements.

```fortran
  CALL obj%Initiate(hdf5=meshfile, group="/curveEntities_1" )
  box = obj%GetBoundingBox()
  CALL Display( box, "" )
  CALL obj%Deallocate()
```

!!! note "cleanup"

```fortran
  CALL meshfile%Close()
  CALL meshfile%Deallocate()
END PROGRAM main
```
