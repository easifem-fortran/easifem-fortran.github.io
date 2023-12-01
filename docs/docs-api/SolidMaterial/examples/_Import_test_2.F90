! Import data from hdf5file.

PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
TYPE(SolidMaterial_) :: obj
TYPE(HDF5File_) :: hdf5file
INTEGER(I4B) :: ierr

CALL hdf5file%Initiate("test_5.h5", "READ")
CALL hdf5file%OPEN()
CALL obj%IMPORT(hdf5file, "")
CALL obj%Display("")
CALL hdf5file%DEALLOCATE()
END PROGRAM main
