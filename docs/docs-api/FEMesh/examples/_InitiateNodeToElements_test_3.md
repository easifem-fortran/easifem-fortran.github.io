```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( FEMesh_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  CHARACTER(*), PARAMETER :: filename="../../Mesh/examples/meshdata/big_big_mesh.h5"
  CALL e%SetQuietMode(.TRUE.)
  CALL meshfile%Initiate( FileName=filename, MODE="READ" )
  !Open the mesh file
  CALL meshfile%Open()
  CALL obj%SetShowTime(.true.)
  !Initiate an instance of `Mesh_`
  CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )
  ! Initiate dynamic data structure
  CALL obj%InitiateNodeToElements()
  !Display the content of mesh.
  CALL obj%DisplayMeshInfo(filename)
  CALL obj%Deallocate()
  CALL meshfile%Deallocate()
END PROGRAM main
```
