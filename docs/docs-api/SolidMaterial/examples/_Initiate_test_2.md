# Introduction

In this example we test following methods.

- SetSolidMaterialParam
- SetLinearElasticModelParam
- Initiate
- Display

```fortran
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
& stressStrainModel="LinearElasticModel")

! Call `SetLinearElasticModelParam` to set the properties of
! LinearElasticModel
CALL SetLinearElasticModelParam( &
& param=param, &
& elasticityType=TypeElasticity%Isotropic, &
& isPlaneStress=.FALSE., &
& isPlaneStrain=.TRUE., &
& poissonRatio=0.3_DFP, &
& youngsModulus=1.0D+6)

! Initiate an instance of `SolidMaterial_`
CALL obj%Initiate(param)

! Display the content of `SolidMaterial_`
CALL obj%Display(msg="Testing setSolidMaterialParam")

CALL obj%DEALLOCATE()
CALL FPL_FINALIZE; CALL param%DEALLOCATE()
END PROGRAM main
```
