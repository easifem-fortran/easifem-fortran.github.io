:::info
This example initiates an instance of `LinearElasticModel_` and
exports its content into a `hdf5File_`.
:::

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
IMPLICIT NONE
TYPE(LinearElasticModel_) :: obj
TYPE(ParameterList_) :: param
TYPE(hdf5File_) :: hdf5file
CALL FPL_INIT; CALL param%initiate()
CALL setLinearElasticModelParam( &
  & param=param,  &
  & ElasticityType=IsoLinearElasticModel, &
  & PoissonRatio=0.3_DFP, &
  & YoungsModulus=1.0D+6)
CALL obj%initiate(param)
CALL hdf5file%initiate("./TemplateLinearElasticModel1.hdf5", &
  & mode="NEW")
CALL hdf5file%OPEN()
CALL obj%export(hdf5file, "")
CALL hdf5file%CLOSE
CALL hdf5file%DEALLOCATE()
CALL param%DEALLOCATE(); CALL FPL_FINALIZE
END PROGRAM main
```
