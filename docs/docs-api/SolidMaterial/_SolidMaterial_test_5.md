```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  USE easifemMaterials
  TYPE(SolidMaterial_) :: obj
  TYPE(ParameterList_) :: param
  TYPE(HDF5File_) :: hdf5file
  INTEGER(I4B) :: ierr
  !> main
  CALL FPL_Init(); CALL param%Initiate()
  ! #SolidMaterial/SetSolidMaterialParam
  CALL SetSolidMaterialParam(param=param, name="SolidMaterial", &
    & thermalDiffusivity=REAL(0.146E-6, DFP) )
  CALL obj%Initiate(param)
  CALL hdf5file%Initiate("test_5.h5", "NEW")
  CALL hdf5file%Open()
  CALL obj%Export(hdf5file, "")
  CALL hdf5file%Deallocate()
  CALL FPL_FINALIZE; CALL param%Deallocate()
END PROGRAM main
```
