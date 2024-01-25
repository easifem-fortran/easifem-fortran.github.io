:::info
In this example we initiate an instance of `LinearElasticModel_` by importing data from `hdf5File_`.
:::

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
IMPLICIT NONE
TYPE( LinearElasticModel_ ) :: obj
TYPE( hdf5File_ ) :: hdf5file
TYPE( ParameterList_ ) :: param
CALL FPL_INIT; CALL param%initiate()
CALL hdf5file%initiate( "./TemplateLinearElasticModel1.hdf5", &
  & mode="READ" ); CALL hdf5file%open()
CALL obj%import( hdf5file, "" )
CALL obj%display(msg="")
CALL hdf5file%close(); CALL hdf5file%Deallocate()
CALL param%Deallocate(); CALL FPL_FINALIZE
END PROGRAM main
```
