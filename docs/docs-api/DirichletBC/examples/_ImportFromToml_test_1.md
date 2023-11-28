In this example we will initiate an instance of `DirichletBC_` by importing data from `toml` configuration.

The content of toml config file is given below

<details>
<summary>Click here to see the toml file</summary>
<div>

```toml
[bc1]
name = "DirichletBC"
idof = 1
nodalValueType = "Constant"
value = 10.0

[bc1.boundary]
isSelectionByMeshID = true
[bc1.boundary.meshID]
surface = [1, 2]
```

Note that in the boundary condition is constant, and mesh is selected by mesh-id.

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
INTEGER(I4B) :: bottom = 1, top = 2, left = 3, right = 4, front = 5, behind = 6

CALL FPL_Init()
CALL domainfile%Initiate(filename=domainfilename, mode="READ")
CALL domainfile%OPEN()
CALL dom%Initiate(domainfile, group="")
CALL obj%ImportFromToml(filename=tomlFileName,  dom=dom, tomlName="bc")
CALL obj%Display("DirichletBC = ")

CALL domainfile%DEALLOCATE()
CALL dom%DEALLOCATE()
CALL FPL_Finalize()
END PROGRAM main
```
