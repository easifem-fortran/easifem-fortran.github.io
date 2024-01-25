:::info
This program initiates an instance of LinearElasticModel by
reading config from toml. The config is given below.
It is for isotropic anisotropic elasticity type.
:::

```toml
[linearElasticModel4]
name = "linearElasticModel"
# name of the model

elasticityType = "ANISO"
# elasticity type, default is "ISO".

c = [
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0],
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0],
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0],
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0],
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0],
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0],
]
# C elasticity tensor
# It should be 6 by 6
# For plane-stress and plane-strain case, it can be 3 by 3

invC = [
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0],
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0],
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0],
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0],
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0],
  [1.0, 2.0, 3.0, 4.0, 5.0, 6.0],
]
# inverse of C elasticity tensor
# It should be 6 by 6
# For plane-stress and plane-strain case, it can be 3 by 3
```

<details>
<summary>See program</summary>
<div>

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials

TYPE(LinearElasticModel_) :: obj
CHARACTER(*), PARAMETER :: filename = "./LinearElasticModel.toml"
CHARACTER(*), PARAMETER :: tomlName = "linearElasticModel4"

CALL FPL_Init

CALL obj%ImportFromToml2(tomlName=tomlName, filename=filename,  &
  & printToml=.TRUE.)
CALL obj%Display("[4]"//CHAR_LF)

CALL FPL_Finalize

END PROGRAM main
```

</div>
</details>
