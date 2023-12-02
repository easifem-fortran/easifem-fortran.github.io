
PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
IMPLICIT NONE
TYPE( LinearElasticModel_ ) :: obj
TYPE( hdf5File_ ) :: hdf5file
TYPE( ParameterList_ ) :: param
CALL FPL_INIT; CALL param%Initiate()
CALL hdf5file%Initiate( "./TemplateLinearElasticModel2.hdf5", &
  & mode="READ" ); CALL hdf5file%Open()
CALL obj%Import( hdf5file, "" )
CALL obj%Display(msg="")
CALL hdf5file%Close(); CALL hdf5file%Deallocate()
CALL param%Deallocate(); CALL FPL_FINALIZE
END PROGRAM main
