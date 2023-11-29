Initiate an instance of `DirichletBC_` by importing config from a Toml file.

In the toml file we define details of [UserFunction](/docs-api/UserFunction).

<details>
<summary>Click here to see the toml file</summary>
<div>

```toml
[bc3]
name = "DirichletBC"
idof = 1
nodalValueType = "Space"
isUserFunction = true

[bc3.function]
name = "func"
returnType = "Scalar"
argType = "Space"
luaScript = "DirichletBC.lua"
luaFunctionName = "Func1"

# boundary
[bc3.boundary]
isSelectionByMeshID = true

[bc3.boundary.meshID]
surface = [1]
```

</div>
</details>

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE

TYPE(DirichletBC_) :: obj
TYPE(Domain_) :: dom
TYPE(HDF5File_) :: domainfile
CHARACTER(*), PARAMETER :: domainfilename = "./mesh3D.h5"
CHARACTER(*), PARAMETER :: tomlFileName = "./DirichletBC.toml"
INTEGER(I4B) :: bottom = 1, top = 2, left = 3, right = 4,  &
  & front = 5, behind = 6
INTEGER(I4B), ALLOCATABLE :: nodeNum(:)
REAL(DFP), ALLOCATABLE :: nodalValue(:, :)

CALL FPL_Init()
CALL domainfile%Initiate(filename=domainfilename, mode="READ")
CALL domainfile%OPEN()
CALL dom%Initiate(domainfile, group="")
CALL obj%ImportFromToml(filename=tomlFileName, dom=dom, tomlName="bc3")

CALL obj%Get(nodeNum=nodeNum, nodalValue=nodalValue)

CALL Display(nodeNum, "nodeNum", advance="NO")
CALL Display(nodalValue, "nodalValue", advance="YES")
CALL display(SIZE(nodeNum), "size = ")

CALL domainfile%DEALLOCATE()
CALL dom%DEALLOCATE()
CALL FPL_Finalize()
END PROGRAM main
```
