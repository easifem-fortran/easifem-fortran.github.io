
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( HDF5File_ ) :: meshfile
  TYPE( Mesh_ ) :: amesh
  TYPE( VectorMeshField_ ) :: obj
  TYPE( ParameterList_ ) :: param

CALL meshfile%Initiate( FileName="./mesh.h5", MODE="READ" )
CALL meshfile%Open()
CALL amesh%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )

CALL FPL_INIT(); CALL param%initiate()
CALL SetVectorMeshFieldParam( &
  & param=param, &
  & name='aVector', &
  & varType = Constant, &
  & fieldType=TypeField%normal, &
  & engine='NATIVE_SERIAL', &
  & defineOn=Nodal, &
  & nns=6,  &
  & spaceCompo=amesh%GetNSD() )
CALL obj%Initiate( param=param, mesh=amesh )
CALL obj%Display( 'obj: ' )

  CALL obj%Deallocate()
  CALL amesh%Deallocate()
  CALL meshfile%Close()
  CALL meshfile%Deallocate()
  CALL param%Deallocate(); CALL FPL_FINALIZE()
END PROGRAM main
