! Test export method for AnisoLinearElasticModel

PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
IMPLICIT NONE
TYPE(LinearElasticModel_) :: obj
TYPE(ParameterList_) :: param
TYPE(hdf5File_) :: hdf5file
REAL(dfp) :: C(6, 6), invC(6, 6)

CALL FPL_INIT; CALL param%initiate()
CALL RANDOM_NUMBER(C)
CALL RANDOM_NUMBER(invC)

CALL SetLinearElasticModelParam( &
  & param=param,  &
  & ElasticityType=TypeElasticity%Anisotropic, &
  & C=C, &
  & InvC=invC)
CALL obj%Initiate(param)

CALL hdf5file%Initiate("./TemplateLinearElasticModel4.hdf5", mode="NEW")
CALL hdf5file%OPEN()
CALL obj%Export(hdf5file, "")
CALL hdf5file%CLOSE
CALL hdf5file%DEALLOCATE()
CALL param%DEALLOCATE(); CALL FPL_FINALIZE
END PROGRAM main
