:::info
Initiate an instance of `SolidMaterial_`.
:::

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials

CHARACTER(*), PARAMETER :: myName = "main"
CHARACTER(*), PARAMETER :: modName = "main"
TYPE(SolidMaterial_) :: obj
TYPE(ParameterList_) :: param
CLASS(UserFunction_), POINTER :: func => NULL()
INTEGER(I4B) :: ierr

CALL FPL_Init(); CALL param%Initiate()

! Set parameter
CALL SetSolidMaterialParam(param=param, name="SolidMaterial")

! Initiate an instance of `SolidMaterial_`
CALL obj%Initiate(param)

CALL obj%AddMaterial("massDensity")

func => obj%GetMaterialPointer("massDensity")

IF (.NOT. ASSOCIATED(func)) THEN
  CALL e%RaiseError(modName//'::'//myName//' - '// &
    & '[error 1]')
END IF

CALL SetUserFunctionParam(param=param, name="massDensity",  &
  & returnType=Scalar, argType=Constant)
CALL func%Initiate(param)
CALL func%Set(scalarValue=1.0_DFP)

CALL obj%Display(msg="SolidMaterial")

CALL FPL_FINALIZE; CALL param%DEALLOCATE()
END PROGRAM main
```
