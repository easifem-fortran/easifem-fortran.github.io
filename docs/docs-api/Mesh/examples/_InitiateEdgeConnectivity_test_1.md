In this example we show the usage of `InitiateEdgeConnectivity` method.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( Mesh_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  CHARACTER(*), PARAMETER :: filename="./meshdata/small_mesh.h5"

  CALL e%SetQuietMode(.TRUE.)
  CALL meshfile%Initiate( FileName=filename, MODE="READ" )

  !Open the mesh file
  CALL meshfile%Open()

  CALL obj%SetShowTime(.TRUE.)

  !Initiate an instance of `Mesh_`
  CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )

  !Initiate an edge connectivity 
  CALL obj%InitiateEdgeConnectivity()

  !Display the content of mesh.
  CALL obj%DisplayMeshInfo(filename)

  CALL obj%DisplayElementData("ElementData:")

  CALL obj%Deallocate()
  CALL meshfile%Deallocate()
END PROGRAM main
```
