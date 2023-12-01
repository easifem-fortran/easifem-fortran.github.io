# ImportFromToml

Initiate an instance by using a `toml` config.

<span class="badge badge--secondary"> @IOMethods </span>

<details>
<summary>Click here to see toml-config</summary>
<div>

```fortran
[[material]]
returnType = "Scalar"
# returnType = "Vector"
# returnType = "Matrix"
argType = "Space"
# argType = "Constant"
# argType = "Space"
# argType = "Time"
# argType = "SpaceTime"
numArgs = 3
numReturns = 1
luaScript = "./hello.lua"
luaFunctionName="hello"
scalarValue = 1.0 
vectorValue = [1.0, 2.0, 3.0]
matrixValue = [[1.0, 2.0, 3.0], [4.0, 5.0, 6.0], [7.0, 8.0, 9.0]]

[[material]]
returnType = "Scalar"
# returnType = "Vector"
# returnType = "Matrix"
argType = "Space"
# argType = "Constant"
# argType = "Space"
# argType = "Time"
# argType = "SpaceTime"
numArgs = 3
numReturns = 1
luaScript = "./hello.lua"
luaFunctionName="hello"
scalarValue = 1.0 
vectorValue = [1.0, 2.0, 3.0]
matrixValue = [[1.0, 2.0, 3.0], [4.0, 5.0, 6.0], [7.0, 8.0, 9.0]]
```

This `toml` configuration is almost same as the [UserFunction](/docs-api/UserFunction).

</div>
</details>

## Interface

```fortran
INTERFACE AbstractMaterialImportFromToml
  MODULE SUBROUTINE ImportFromToml3(obj, tomlName, afile, filename,  &
    & printToml)
    CLASS(AbstractMaterial_), INTENT(INOUT) :: obj
    CHARACTER(*), INTENT(IN) :: tomlName
    TYPE(TxtFile_), OPTIONAL, INTENT(INOUT) :: afile
    CHARACTER(*), OPTIONAL, INTENT(IN) :: filename
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: printToml
  END SUBROUTINE ImportFromToml3
END INTERFACE AbstractMaterialImportFromToml
```

:::info
The following interfaces are mainly for internal use only. Most of the users should use the above interface.
:::

<span class="badge badge--warning"> Developer only </span>

```fortran
INTERFACE AbstractMaterialImportFromToml
  MODULE SUBROUTINE ImportFromToml1(obj, table)
    CLASS(AbstractMaterial_), INTENT(INOUT) :: obj
    TYPE(toml_table), INTENT(INOUT) :: table
  END SUBROUTINE ImportFromToml1
END INTERFACE AbstractMaterialImportFromToml
```

<span class="badge badge--warning"> Developer only </span>

```fortran
INTERFACE AbstractMaterialImportFromToml
  MODULE SUBROUTINE ImportFromToml2(obj, array)
    CLASS(AbstractMaterial_), INTENT(INOUT) :: obj
    TYPE(toml_array), POINTER, INTENT(INOUT) :: array
  END SUBROUTINE ImportFromToml2
END INTERFACE AbstractMaterialImportFromToml
```
