```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  USE easifemMaterials
  TYPE(SolidMaterial_) :: obj
  TYPE(ParameterList_) :: param
  INTEGER(I4B) :: ierr
  !> main
  CALL FPL_Init(); CALL param%Initiate()
  ! #SolidMaterial/SetSolidMaterialParam
  CALL SetSolidMaterialParam(param=param, name="SolidMaterial", &
    & thermalDiffusivity=REAL(0.146E-6, DFP) )
  CALL obj%Initiate(param)
  CALL obj%Display(msg="Test-4")
  CALL FPL_FINALIZE; CALL param%Deallocate()
END PROGRAM main
```
