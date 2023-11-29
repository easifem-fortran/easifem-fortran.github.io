! Import from toml
! we define userfunction in the config file.

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
