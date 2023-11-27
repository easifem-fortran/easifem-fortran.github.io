```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
IMPLICIT NONE
TYPE( NewtonianFluidModel_ ) :: obj
TYPE( HDF5File_ ) :: hdf5file
CALL hdf5file%initiate( "./TemplateNewtonianFluidModel1.hdf5", mode="READ")
CALL hdf5file%open()
CALL obj%import(hdf5file, "")
CALL obj%Display("Test-3 : ")
CALL hdf5file%close(); CALL hdf5file%Deallocate()
CALL obj%Deallocate()
END PROGRAM main
```
