!This example shows how initiate an instance of `LinearElasticModel_` for plane stress case. Then, we export its content to HDF5File.

PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
IMPLICIT NONE
TYPE(LinearElasticModel_) :: obj
TYPE(ParameterList_) :: param
TYPE(hdf5File_) :: hdf5file

CALL FPL_INIT; CALL param%Initiate()
CALL SetLinearElasticModelParam( &
  & param=param,  &
  & ElasticityType=IsoLinearElasticModel, &
  & isPlaneStress=.TRUE., &
  & PoissonRatio=0.3_DFP, &
  & YoungsModulus=1.0D+6)

CALL obj%Initiate(param)
CALL hdf5file%Initiate("./TemplateLinearElasticModel2.hdf5", &
  & mode="NEW")

CALL hdf5file%OPEN()
CALL obj%Export(hdf5file, "")
CALL hdf5file%CLOSE()
CALL hdf5file%DEALLOCATE()
CALL param%DEALLOCATE(); CALL FPL_FINALIZE
END PROGRAM main
