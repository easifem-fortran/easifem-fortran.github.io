```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
IMPLICIT NONE
TYPE( LinearElasticModel_ ) :: obj
TYPE( ParameterList_ ) :: param
CALL FPL_INIT; CALL param%initiate()
CALL setLinearElasticModelParam( &
  & param = param,  &
  & ElasticityType = IsoLinearElasticModel, &
  & isPlaneStress = .FALSE., &
  & isPlaneStrain = .FALSE., &
  & PoissonRatio = 0.3_DFP, &
  & YoungsModulus = 1.0D+6 )
CALL obj%initiate( param )
CALL obj%display( msg="ISOTROPIC | 3D |:" )
CALL param%Deallocate(); CALL FPL_FINALIZE
END PROGRAM main
```
