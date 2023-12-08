
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(HDF5File_) :: meshfile
TYPE(Mesh_) :: amesh
TYPE(VectorMeshField_) :: obj
TYPE(ParameterList_) :: param
TYPE(UserFunction_) :: func
CALL meshfile%Initiate(FileName="./mesh.h5", MODE="READ")
CALL meshfile%OPEN()
CALL amesh%Initiate(hdf5=meshfile, group="/surfaceEntities_1")
CALL FPL_INIT(); CALL param%initiate()
CALL SetUserFunctionParam(param=param, name="func", returnType=Vector,  &
  & argType=Space)
CALL func%Initiate(param)
CALL func%Set(vectorValue=[1.0_DFP, 2.0_DFP, 3.0_DFP])
CALL obj%Initiate(mesh=amesh, func=func, name="func", engine="NATIVE_SERIAL")
CALL obj%Display('obj: ')
CALL obj%DEALLOCATE()
CALL amesh%DEALLOCATE()
CALL meshfile%CLOSE()
CALL meshfile%DEALLOCATE()
CALL param%DEALLOCATE(); CALL FPL_FINALIZE()
END PROGRAM main
