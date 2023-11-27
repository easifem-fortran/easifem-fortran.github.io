# Mesh example 8

!!! example ""
    This example shows how to create multiple meshes and store them into an array of [[MeshPointer_]].

The mesh is given below

![[figures/mesh_tri3.png]]
![[figures/mesh_tri6.png]]

## Modules and classes

- [[Mesh_]]
- [[HDF5File_]]
- [[MeshPointer_]]
- [[HDF5FilePointer_]]

## Usage

!!! note ""
    Import modules and declare variables

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( MeshPointer_ ) :: meshes(2)
  TYPE( HDF5FilePointer_ ) :: meshfiles(2)
```

!!! note ""
    Open multiple mesh files which art in [[HDF5File_]] format.

```fortran
  ALLOCATE( HDF5File_::meshfiles(1)%ptr )
  CALL meshfiles(1)%ptr%Initiate( FileName="./mesh_tri6.h5", MODE="READ" )
  ALLOCATE( HDF5File_::meshfiles(2)%ptr )
  CALL meshfiles(2)%ptr%Initiate( FileName="./mesh_tri3.h5", MODE="READ" )
  CALL meshfiles(1)%ptr%Open()
  CALL meshfiles(2)%ptr%Open()
```

!!! note ""
    Create multiple meshes and store them inside the [[MeshPointer_]]

```fortran
  ALLOCATE( Mesh_::meshes(1)%ptr)
  CALL meshes(1)%ptr%Initiate(hdf5=meshfiles(1)%ptr, &
    & group="/surfaceEntities_1" )
  ALLOCATE( Mesh_::meshes(2)%ptr)
  CALL meshes(2)%ptr%Initiate(hdf5=meshfiles(2)%ptr, &
    & group="/surfaceEntities_1" )
```

!!! note ""
    Display the meshes on terminal.

```fortran
  CALL meshes(1)%ptr%Display("")
  CALL meshes(2)%ptr%Display("")
```

!!! note "cleanup"

```fortran
  CALL meshes(1)%ptr%Deallocate()
  CALL meshes(2)%ptr%Deallocate()
  CALL meshfiles(1)%ptr%Close()
  CALL meshfiles(1)%ptr%Deallocate()
  CALL meshfiles(2)%ptr%Close()
  CALL meshfiles(2)%ptr%Deallocate()
END PROGRAM main
```
