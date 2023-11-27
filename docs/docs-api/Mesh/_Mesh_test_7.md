# Mesh example 7

!!! example ""
    This example shows how to get the bounding box of the [[Mesh_]]. In the early example, we do not specify the nodal coordinates. However, in this case we specify the nodal coordinates (It is often the case when the mesh coordinates are changing during the simulation.)

The mesh is given below

![[figures/mesh.png]]

## Modules and classes

- [[Domain_]]
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
  TYPE( Domain_ ) :: dom
  TYPE( BoundingBox_ ) :: box
  REAL( DFP ), POINTER :: nodeCoord( :, : )
  INTEGER( I4B ), POINTER :: local_nptrs( : )
```

!!! note ""
    Open the mesh file which is [[HDF5File_]] format.

```fortran
  CALL meshfile%Initiate( FileName="./mesh.h5", MODE="READ" )
  CALL meshfile%Open()
```

!!! note ""
    Initiate an instance of [[Mesh_]] and [[Domain_]] by reading the mesh file.

```fortran
  CALL dom%Initiate(hdf5=meshfile, group="" )
  CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )
```

!!! note ""
    Get the pointer to nodal coordinates from the [[Domain_]]

```fortran
  nodeCoord => dom%GetNodeCoordPointer()
  local_nptrs => dom%GetGlobalToLocalNodeNumPointer()
```

!!! note ""
    Get the bounding box of the mesh by specifying the nodal coordinates and local nptrs.

```fortran
  box = obj%GetBoundingBox(nodes=nodeCoord, local_nptrs=local_nptrs )
  CALL Display( box, "" )
```

!!! note "cleanup"

```fortran
  CALL obj%Deallocate()
  CALL meshfile%Close()
  CALL meshfile%Deallocate()
END PROGRAM main
```
