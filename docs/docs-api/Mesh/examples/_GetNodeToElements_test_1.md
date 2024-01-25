This example shows how to get the node to element connectivity data in the mesh.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( Mesh_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  INTEGER( I4B ), ALLOCATABLE :: nptrs( : )

  ! Initiate and open the mesh file which is in [[HDF5File_]] format. 
  ! Then, create an instance of mesh.

  CALL meshfile%Initiate( FileName="./mesh.h5", MODE="READ" )
  CALL meshfile%Open()
  CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )

  ! Now we get the global elements connected to the global node

  nptrs = obj%GetNodeToElements( globalNode=200 )
  CALL OK( nptrs .IN. [144,391,423,405,542, 489], "GetNodeToElements:" )

  ! Now we get the global elements connected to several global nodes

  nptrs = obj%GetNodeToElements( globalNode=[200, 260] )
  CALL OK( nptrs .IN. [144,391,423,405,542, 489, &
    & 342, 378, 419, 442, 361, 377], "GetNodeToElements:" )

  CALL obj%Deallocate()
  CALL meshfile%Close()
  CALL meshfile%Deallocate()
END PROGRAM main
```
