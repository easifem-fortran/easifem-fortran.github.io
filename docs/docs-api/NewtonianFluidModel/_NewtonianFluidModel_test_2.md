```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
IMPLICIT NONE
TYPE( NewtonianFluidModel_ ) :: obj
TYPE( ParameterList_ ) :: param
TYPE( HDF5File_ ) :: hdf5file
CALL FPL_INIT; CALL param%initiate()
CALL setNewtonianFluidModelParam( param = param, Viscosity=0.001_DFP )
CALL obj%initiate( param )
CALL hdf5file%initiate( "./TemplateNewtonianFluidModel1.hdf5", mode="NEW ")
CALL hdf5file%open()
CALL obj%export(hdf5file, "")
CALL hdf5file%close(); CALL hdf5file%Deallocate()
CALL obj%Deallocate()
CALL param%Deallocate(); CALL FPL_FINALIZE
END PROGRAM main
```
