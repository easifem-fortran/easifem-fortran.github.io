! In this example, we initiate an instance of SolidMaterial
! by importing data from an `HDF5File`.
! The HDF file is exported by calling `Export` method.

PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
TYPE(SolidMaterial_) :: obj
TYPE(HDF5File_) :: hdf5file
INTEGER(I4B) :: ierr

CALL hdf5file%Initiate(filename="TemplateSolid1.hdf5", mode="READ")
CALL hdf5file%OPEN()
CALL obj%IMPORT(hdf5file, "")
CALL obj%Display("test:")
CALL hdf5file%DEALLOCATE()
END PROGRAM main
