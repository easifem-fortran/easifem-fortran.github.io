:::info
In this case we will initiate an instance of `LinearElasticModel_` by importing the data from an `HDF5File_`. The `HDF5File_` was created in the previous examples.
:::

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
IMPLICIT NONE
TYPE(LinearElasticModel_) :: obj
TYPE(HDF5File_) :: hdf5file
TYPE(ParameterList_) :: param

CALL FPL_INIT; CALL param%Initiate()
CALL hdf5file%Initiate("./TemplateLinearElasticModel3.hdf5", &
  & mode="READ"); CALL hdf5file%OPEN()
CALL obj%IMPORT(hdf5file, "")
CALL obj%Display(msg="")
CALL hdf5file%CLOSE(); CALL hdf5file%DEALLOCATE()
CALL param%DEALLOCATE(); CALL FPL_FINALIZE
END PROGRAM main
```
