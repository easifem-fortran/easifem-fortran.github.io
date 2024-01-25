In this example we initiate `SolidMaterial_` by reading the `toml` file.

<details>
<summary>Click here to see the toml file</summary>
<div>

```fortran
[solid]

[[solid.property]]
name = "massDensity"
returnType = "Scalar"
argType = "Constant"
value = 1.0

[[solid.property]]
name = "poissonRatio"
returnType = "Scalar"
argType = "Constant"
value = 2.0

[[solid.property]]
name = "youngsModulus"
returnType = "Scalar"
argType = "Constant"
value = 3.0
```

</div>
</details>

```fortran
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
```
