```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
IMPLICIT NONE
TYPE( LinearElasticModel_ ) :: obj
TYPE( ParameterList_ ) :: param
TYPE( hdf5File_ ) :: hdf5file
REAL( dfp ) :: C( 6, 6 ), invC( 6, 6 )
CALL FPL_INIT; CALL param%initiate()
CALL random_number(C)
CALL random_number(invC)
CALL setLinearElasticModelParam( &
  & param = param,  &
  & ElasticityType = AnisoLinearElasticModel, &
  & isPlaneStress = .FALSE., &
  & isPlaneStrain = .FALSE., &
  & C = C, &
  & InvC = invC )
CALL obj%initiate( param )
CALL hdf5file%initiate( "./TemplateLinearElasticModel4.hdf5", &
  & mode="NEW" )
CALL hdf5file%open()
CALL obj%export( hdf5file, "" )
CALL hdf5file%close
CALL hdf5file%Deallocate()
CALL param%Deallocate(); CALL FPL_FINALIZE
END PROGRAM main
```
