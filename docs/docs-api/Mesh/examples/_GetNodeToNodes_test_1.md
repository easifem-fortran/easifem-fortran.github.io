This example shows how to get the node to node connectivity data in the mesh.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( Mesh_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  INTEGER( I4B ), ALLOCATABLE :: nptrs( : )

  ! Initiate and open the mesh file which is in [[HDF5File_]] format. Then, create an instance of mesh.

  CALL meshfile%Initiate( FileName="./mesh.h5", MODE="READ" )
  CALL meshfile%Open()
  CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )

  ! Now we get the global nodes connected to the global node

  nptrs = obj%GetNodeToNodes( globalNode=200, IncludeSelf=.FALSE. )
  CALL OK( nptrs .IN. [294, 205, 201, 195, 187, 285], "GetNodeToNodes:" )

  ! Now we get the global node numbers connected to several global nodes

  nptrs = obj%GetNodeToNodes( globalNode=[200, 260], includeSelf=.FALSE. )
  CALL OK( nptrs .IN. [294, 205, 201, 195, 187, 285, &
    & 268, 178, 170, 172, 181], "GetNodeToNodes:" )

  CALL obj%Deallocate()
  CALL meshfile%Close()
  CALL meshfile%Deallocate()
END PROGRAM main
```
