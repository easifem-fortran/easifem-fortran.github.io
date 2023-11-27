```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
USE FPL, ONLY: ParameterList_
IMPLICIT NONE
TYPE( NewtonianFluidModel_ ) :: obj
TYPE( HDF5File_ ) :: hdf5file
TYPE( ParameterList_ ) :: param
REAL( DFP ) :: Viscosity
CALL hdf5file%initiate( "./TemplateNewtonianFluidModel1.hdf5", mode="READ")
CALL hdf5file%open()
CALL obj%import(hdf5file, "")
CALL obj%getViscosity(Viscosity=Viscosity)
CALL Display( Viscosity, "Viscosity : ")
CALL FPL_INIT(); CALL param%initiate()
CALL obj%getModelParameters(param)
CALL param%print()
CALL FPL_FINALIZE(); CALL param%Deallocate()
CALL hdf5file%close(); CALL hdf5file%Deallocate()
CALL obj%Deallocate()
END PROGRAM main
```
