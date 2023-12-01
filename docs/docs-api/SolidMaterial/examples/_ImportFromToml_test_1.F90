! Initiate an instance of `SolidMaterial_`.

PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials

CHARACTER(*), PARAMETER :: tomlFileName = "./SolidMaterial.toml"
CHARACTER(*), PARAMETER :: tomlName = "solid"
TYPE(SolidMaterial_) :: obj
INTEGER(I4B) :: ierr

CALL FPL_Init

CALL obj%ImportFromToml(tomlName="solid", filename=tomlFileName)
CALL obj%Display("obj:")

CALL FPL_FINALIZE

END PROGRAM main
