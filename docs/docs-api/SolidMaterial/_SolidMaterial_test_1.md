```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  USE easifemMaterials
  USE FPL
  TYPE(SolidMaterial_) :: obj
  TYPE(ParameterList_) :: param
  INTEGER(I4B) :: ierr
  !> main
  CALL FPL_Init(); CALL param%Initiate()
  ! #SolidMaterial/SetSolidMaterialParam
  CALL SetSolidMaterialParam(param=param, name="SolidMaterial", &
    & massDensity=5000.0_DFP, stressStrainModel="LinearElasticModel")
  ! #SolidMaterial/SetLinearElasticModelParam
  CALL SetLinearElasticModelParam( &
    & param=param,  &
    & ElasticityType=IsoLinearElasticModel, &
    & isPlaneStress=.FALSE., &
    & isPlaneStrain=.TRUE., &
    & PoissonRatio=0.3_DFP, &
    & YoungsModulus=1.0D+6)
  CALL param%Print()
  CALL obj%Initiate(param)
  CALL obj%Display(msg="Testing setSolidMaterialParam")
  CALL FPL_FINALIZE; CALL param%Deallocate()
END PROGRAM main
```
