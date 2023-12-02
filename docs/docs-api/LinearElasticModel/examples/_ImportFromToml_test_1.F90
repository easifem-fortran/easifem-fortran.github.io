! :::info
! This program initiates an instance of LinearElasticModel by
! reading config from toml.
! :::
!
! The config is given below. It is for isotropic elasticity type.
!
! ```toml
! [linearElasticModel1]
! name = "linearElasticModel"
! # name of the model
!
! elasticityType = "ISO"
! # elasticity type, default is "ISO".
!
! poissonRatio = 0.1
! # Poisson's Ratio, it is necessary when elasticityType is ISO
! youngsModulus = 1.0
! # Young's Modulus, it is necessary when elasticityType is ISO
! ```

PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials

TYPE(LinearElasticModel_) :: obj
CHARACTER(*), PARAMETER :: filename = "./LinearElasticModel.toml"
CHARACTER(*), PARAMETER :: tomlName = "linearElasticModel1"

CALL FPL_Init

CALL obj%ImportFromToml2(tomlName=tomlName, filename=filename,  &
  & printToml=.TRUE.)
CALL obj%Display("[1]"//CHAR_LF)

CALL FPL_Finalize

END PROGRAM main
