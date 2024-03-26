This example shows how to use `DisplayInternalFacetData` method to display the content of internal facet data.

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

  ! Initiate and open the mesh file which is in [[HDF5File_]] format. Then, create an instance of mesh.
  CALL meshfile%Initiate( FileName=filename, MODE="READ" )
  CALL meshfile%Open()
  CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )

  ! Displaying the node data.
  CALL obj%DisplayInternalFacetData( "Internal facet data" )

  CALL obj%Deallocate()
  CALL meshfile%Deallocate()
END PROGRAM main
```
