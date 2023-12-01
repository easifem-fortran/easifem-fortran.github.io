```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
IMPLICIT NONE
TYPE( LinearElasticModel_ ) :: obj
TYPE( ParameterList_ ) :: param
TYPE( hdf5File_ ) :: hdf5file
CALL FPL_INIT; CALL param%initiate()
CALL setLinearElasticModelParam( &
  & param = param,  &
  & ElasticityType = IsoLinearElasticModel, &
  & isPlaneStress = .TRUE., &
  & isPlaneStrain = .FALSE., &
  & PoissonRatio = 0.3_DFP, &
  & YoungsModulus = 1.0D+6 )
CALL obj%initiate( param )
CALL hdf5file%initiate( "./TemplateLinearElasticModel2.hdf5", &
  & mode="NEW" )
CALL hdf5file%open()
CALL obj%export( hdf5file, "" )
CALL hdf5file%close
CALL hdf5file%Deallocate()
CALL param%Deallocate(); CALL FPL_FINALIZE
END PROGRAM main
```
