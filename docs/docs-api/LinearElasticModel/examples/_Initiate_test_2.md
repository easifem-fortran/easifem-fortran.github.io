In this example we show how to create an instance of `LinearElasticModel_` for Isotropic elasticity with plane-stress and plane-strain options.

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
IMPLICIT NONE
TYPE(LinearElasticModel_) :: obj
TYPE(ParameterList_) :: param

CALL FPL_INIT; CALL param%initiate()

BLOCK
  CALL SetLinearElasticModelParam( &
    & param=param,  &
    & ElasticityType=TypeElasticity%Isotropic, &
    & isPlaneStress=.TRUE., &
    & PoissonRatio=0.3_DFP, &
    & YoungsModulus=1.0D+6)

  CALL obj%Initiate(param)
  CALL obj%Display(msg="ISOTROPIC | PLANE-STRESS |:")
  CALL obj%DEALLOCATE()
END BLOCK

BLOCK
  CALL SetLinearElasticModelParam( &
    & param=param,  &
    & ElasticityType=TypeElasticity%Isotropic, &
    & isPlaneStrain=.TRUE., &
    & PoissonRatio=0.3_DFP, &
    & YoungsModulus=1.0D+6)

  CALL obj%Initiate(param)
  CALL obj%Display(msg="ISOTROPIC | PLANE-STRAIN |:")
  CALL obj%DEALLOCATE()
END BLOCK

CALL param%DEALLOCATE(); CALL FPL_FINALIZE
END PROGRAM main
```
