!> author: Vikas Sharma, Ph. D.
! date:  2023-11-29
! summary:  Exporting a SolidMaterial
!
!# Introduction
!
! In this example we will initite an instance of ` SolidMaterial` and
! export it to [HDF5File_](/docs-api/HDF5File)
!
! In this example we test following methods.
!
! - SetSolidMaterialParam
! - SetLinearElasticModelParam
! - Initiate
! - Display
! - Export

PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
TYPE(SolidMaterial_) :: obj
TYPE(ParameterList_) :: param
TYPE(HDF5File_) :: hdf5file
INTEGER(I4B) :: ierr

CALL FPL_Init(); CALL param%Initiate()

CALL SetSolidMaterialParam(param=param, name="SolidMaterial", &
  & massDensity=5000.0_DFP, stressStrainModel="LinearElasticModel")

CALL SetLinearElasticModelParam( &
  & param=param,  &
  & ElasticityType=IsoLinearElasticModel, &
  & isPlaneStress=.FALSE., &
  & isPlaneStrain=.TRUE., &
  & PoissonRatio=0.3_DFP, &
  & YoungsModulus=1.0D+6)

CALL obj%Initiate(param)

CALL hdf5file%Initiate(filename="./TemplateSolid1.hdf5", mode="NEW")

CALL hdf5file%OPEN()

CALL obj%Export(hdf5file, group="")

CALL hdf5file%CLOSE()
CALL hdf5file%DEALLOCATE()
CALL FPL_FINALIZE; CALL param%DEALLOCATE()
END PROGRAM main
