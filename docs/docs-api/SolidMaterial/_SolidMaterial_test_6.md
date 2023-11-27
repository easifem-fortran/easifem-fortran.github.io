```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  USE easifemMaterials
  TYPE(SolidMaterial_) :: obj
  TYPE(HDF5File_) :: hdf5file
  INTEGER(I4B) :: ierr
  !> main
  CALL hdf5file%Initiate("test_5.h5", "READ")
  CALL hdf5file%Open()
  CALL obj%Import(hdf5file, "")
  CALL obj%Display("")
  CALL hdf5file%Deallocate()
END PROGRAM main
```
