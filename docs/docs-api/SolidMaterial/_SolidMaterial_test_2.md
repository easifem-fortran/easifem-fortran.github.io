```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  USE easifemMaterials
  TYPE( SolidMaterial_ ) :: obj
  TYPE( ParameterList_ ) :: param
  TYPE( HDF5File_ ) :: hdf5file
  INTEGER( I4B ) :: ierr
  !> main
  CALL FPL_Init(); CALL param%Initiate()
  ! #SolidMaterial/SetSolidMaterialParam
  CALL SetSolidMaterialParam( param=param, name="SolidMaterial", &
    & massDensity=5000.0_DFP, stressStrainModel="LinearElasticModel" )
  ! #LinearElasticModel/SetLinearElasticModelParam
  CALL SetLinearElasticModelParam( &
    & param = param,  &
    & ElasticityType = IsoLinearElasticModel, &
    & isPlaneStress = .FALSE., &
    & isPlaneStrain = .TRUE., &
    & PoissonRatio = 0.3_DFP, &
    & YoungsModulus = 1.0D+6 )
  ! #SolidMaterial/Initiate
  CALL obj%Initiate( param )
  ! #HDF5File/Initiate
  CALL hdf5file%Initiate( filename="./TemplateSolid1.hdf5", mode="NEW" )
  ! #HDF5File/Open
  CALL hdf5file%Open()
  ! #HDF5File/Export
  CALL obj%Export( hdf5file, group="" )
  CALL hdf5file%Close()
  CALL hdf5file%Deallocate()
  CALL FPL_FINALIZE; CALL param%Deallocate()
END PROGRAM main
```
