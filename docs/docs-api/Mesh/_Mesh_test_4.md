# Mesh example 4

!!! example ""
    This example shows how to initiate an instance of [[Mesh_]] by reading data from mesh file, which is in [[HDF5File_]] format. This example is same as the example 2, but in this example we construct `curveEntities_1`.

The mesh is given below

![[figures/mesh.png]]

## Modules and classes

- [[Mesh_]]
- [[HDF5File_]]

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
```

!!! note ""
    Initiate and open the mesh file which is in [[HDF5File_]] format.

```fortran
  CALL meshfile%Initiate( FileName="./mesh.h5", MODE="READ" )
  CALL meshfile%Open()
```

!!! note ""
    Initiate an instance of [[Mesh_]] from the meshfile. Then, display the mesh content on terminal screen.

```fortran
  CALL obj%Initiate(hdf5=meshfile, group="/curveEntities_1" )
  CALL obj%Display("")
```

!!! note "cleanup"

```fortran
  CALL obj%Deallocate()
  CALL meshfile%Close()
  CALL meshfile%Deallocate()
END PROGRAM main
```
