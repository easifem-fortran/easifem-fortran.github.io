:::info
In this example we initiate an instance of `LinearElasticModel_` with Isotropic elasticity.
:::

This example shows the use of following methods:

- SetLinearElasticModelParam
- Initiate

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
IMPLICIT NONE
TYPE(LinearElasticModel_) :: obj
TYPE(ParameterList_) :: param

CALL FPL_INIT; CALL param%initiate()

CALL SetLinearElasticModelParam( &
  & param=param,  &
  & ElasticityType=TypeElasticity%Isotropic, &
  & PoissonRatio=0.3_DFP, &
  & YoungsModulus=1.0D+6)

CALL obj%Initiate(param)
CALL obj%Display(msg="ISOTROPIC | PLANE-STRAIN |:")

CALL param%DEALLOCATE(); CALL FPL_FINALIZE
END PROGRAM main
```
