! :::info
! This program initiates an instance of LinearElasticModel by
! reading config from toml. The config is given below.
! It is for isotropic anisotropic elasticity type and plane-stress case.
! :::
!
! :::note
!In the case of plane-stress and plane-strain case we only read 3-by-3 block.
! :::
!
! ```toml
! [linearElasticModel7]
! name = "linearElasticModel"
! # name of the model
!
! elasticityType = "ANISO"
! # elasticity type, default is "ISO".
!
! isPlaneStress = true
! # Plane stress
!
! c = [
!   [1.0, 2.0, 3.0],
!   [1.0, 2.0, 3.0],
!   [1.0, 2.0, 3.0],
! ]
! # C elasticity tensor
! # It should be 6 by 6
! # For plane-stress and plane-strain case, we use only 3 by 3 part
!
! invC = [
!   [1.0, 2.0, 3.0],
!   [1.0, 2.0, 3.0],
!   [1.0, 2.0, 3.0],
! ]
! # inverse of C elasticity tensor
! # It should be 6 by 6
! # For plane-stress and plane-strain case, we use only 3 by 3 part
! ```

PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials

TYPE(LinearElasticModel_) :: obj
CHARACTER(*), PARAMETER :: filename = "./LinearElasticModel.toml"
CHARACTER(*), PARAMETER :: tomlName = "linearElasticModel7"

CALL FPL_Init

CALL obj%ImportFromToml2(tomlName=tomlName, filename=filename,  &
  & printToml=.TRUE.)
CALL obj%Display("[7]"//CHAR_LF)

CALL FPL_Finalize

END PROGRAM main
