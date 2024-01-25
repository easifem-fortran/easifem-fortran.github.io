
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(HDF5File_) :: meshfile
TYPE(Mesh_) :: amesh
TYPE(ScalarMeshField_) :: obj
TYPE(ParameterList_) :: param

CALL meshfile%Initiate(FileName="./mesh.h5", MODE="READ")
CALL meshfile%OPEN()
CALL amesh%Initiate(hdf5=meshfile, group="/surfaceEntities_1")

CALL FPL_INIT(); CALL param%initiate()
CALL SetScalarMeshFieldParam( &
  & param=param, &
  & name='aScalar', &
  & varType=Constant, &
  & fieldType=TypeField%normal, &
  & engine='NATIVE_SERIAL', &
  & defineOn=Nodal, &
  & nns=6)
CALL obj%Initiate(param=param, mesh=amesh)
CALL obj%Display('obj: ')

CALL obj%DEALLOCATE()
CALL amesh%DEALLOCATE()
CALL meshfile%CLOSE()
CALL meshfile%DEALLOCATE()
CALL param%DEALLOCATE(); CALL FPL_FINALIZE()
END PROGRAM main
