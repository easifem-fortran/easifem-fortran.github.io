!> author: Vikas Sharma, Ph. D.
! date:  2023-11-29
! summary:  Testing SolidMaterial
!
!# Introduction
!
! In this example we test following methods.
!
! - SetSolidMaterialParam
! - SetLinearElasticModelParam
! - Initiate
! - Display

PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
USE FPL
TYPE(SolidMaterial_) :: obj
TYPE(ParameterList_) :: param
INTEGER(I4B) :: ierr

! main
CALL FPL_Init(); CALL param%Initiate()

! Call `SetSolidMaterialParam` to set the material properties.
CALL SetSolidMaterialParam(param=param, name="SolidMaterial", &
  & massDensity=5000.0_DFP, stressStrainModel="LinearElasticModel")

! Call `SetLinearElasticModelParam` to set the properties of LinearElasticModel
CALL SetLinearElasticModelParam( &
  & param=param,  &
  & ElasticityType=IsoLinearElasticModel, &
  & isPlaneStress=.FALSE., &
  & isPlaneStrain=.TRUE., &
  & PoissonRatio=0.3_DFP, &
  & YoungsModulus=1.0D+6)

! Initiate an instance of `SolidMaterial_`
CALL obj%Initiate(param)

! Display the content of `SolidMaterial_`
CALL obj%Display(msg="Testing setSolidMaterialParam")

CALL obj%DEALLOCATE()
CALL FPL_FINALIZE; CALL param%DEALLOCATE()
END PROGRAM main
