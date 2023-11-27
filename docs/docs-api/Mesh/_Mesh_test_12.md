# Mesh example 12

!!! example ""
    This example shows how to get the boundary data in the mesh.

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
    Now we get the boundary element data. Element number 515 is a boundary element, and one of its face concides with the mesh boundary.

```fortran
  CALL Display( obj%getConnectivity( 515 ), "cellNptrs=" )
  nptrs = obj%GetBoundaryElementData( globalElement=515 )
  CALL Display( nptrs, "Boundary element data for 515=")
```

!!! note ""
    Now we get the boundary element data. Element number 316 is a boundary element, and one of its face concides with the mesh boundary.

```fortran
  CALL Display( obj%getConnectivity( 316 ), "cellNptrs=" )
  nptrs = obj%GetBoundaryElementData( globalElement=316 )
  CALL Display( nptrs, "Boundary element data for 316=")
```

!!! note "cleanup"

```fortran
  CALL obj%Deallocate()
  CALL meshfile%Close()
  CALL meshfile%Deallocate()
END PROGRAM main
```
