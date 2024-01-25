PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
IMPLICIT NONE
TYPE(LinearElasticModel_) :: obj
TYPE(hdf5File_) :: hdf5file
TYPE(ParameterList_) :: param
CALL FPL_INIT; CALL param%Initiate()

CALL hdf5file%Initiate("./TemplateLinearElasticModel4.hdf5", &
  & mode="READ"); CALL hdf5file%OPEN()
CALL obj%IMPORT(hdf5file, "")
CALL obj%Display(msg="")
CALL hdf5file%CLOSE(); CALL hdf5file%DEALLOCATE()
CALL param%DEALLOCATE(); CALL FPL_FINALIZE
END PROGRAM main
