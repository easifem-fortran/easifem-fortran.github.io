This example shows how to use `DisplayNodeData` method to display the content of element data inside the mesh.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( Mesh_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  INTEGER( I4B ), ALLOCATABLE :: nptrs( : )
  INTEGER( I4B ) :: iel, ii
  CHARACTER( LEN=* ), PARAMETER :: filename="./mesh.h5"

  CALL meshfile%Initiate( FileName=filename, MODE="READ" )
  CALL meshfile%Open()
  CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )

  CALL obj%DisplayNodeData( "node data" )

  CALL obj%Deallocate()
  CALL meshfile%Close()
  CALL meshfile%Deallocate()
END PROGRAM main
```
