```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( FEMesh_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  CHARACTER(*), PARAMETER :: filename="./meshdata/small_mesh.h5"

  CALL meshfile%Initiate( FileName=filename, MODE="READ" )

  !Open the mesh file
  CALL meshfile%Open()

  CALL obj%SetShowTime(.TRUE.)

  !Initiate an instance of `Mesh_`
  CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )

  !Initiate an edge connectivity 
  CALL obj%InitiateEdgeConnectivity()

  ! Initiate Element to Element data 
  CALL obj%InitiateElementToElements()

  !Display the content of mesh.
  CALL obj%DisplayElementData("ElementData:")

  CALL obj%DisplayMeshInfo(filename)

  CALL obj%Deallocate()
  CALL meshfile%Deallocate()
END PROGRAM main
```
