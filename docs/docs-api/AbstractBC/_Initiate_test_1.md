Initiate an instance of `DirichletBC`.

```fortran
!> author: Vikas Sharma, Ph. D.
! date:  2023-11-27
! summary:  Initiate an instance of DirichletBC
!
!# Introduction
!
! Initiate an instance of DirichletBC  for
! Constant boundary condition

PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE

TYPE(DirichletBC_) :: obj
TYPE(MeshSelection_) :: boundary
TYPE(ParameterList_) :: param
TYPE(Domain_) :: dom
TYPE(HDF5File_) :: domainfile
CHARACTER(*), PARAMETER :: domainfilename = "./mesh3D.h5"
INTEGER(I4B) :: bottom = 1, top = 2, left = 3, right = 4,  &
  & front = 5, behind = 6, nsd
INTEGER(I4B), ALLOCATABLE :: nodeNum(:)
REAL(DFP), ALLOCATABLE :: nodalValue(:, :)

CALL FPL_Init; CALL param%Initiate()
CALL domainfile%Initiate(filename=domainfilename, mode="READ")
CALL domainfile%OPEN()
CALL dom%Initiate(domainfile, group="")

nsd = dom%GetNSD()

! We call Set SetAbstractBCParam to set the parameter for boundary condition
CALL SetAbstractBCParam(param=param, prefix=obj%GetPrefix(),  &
  & name="ZeroBC", idof=1, nodalValueType=Constant)

! We call SetMeshSelectionParam to set the parameter for boundary condition
CALL SetMeshSelectionParam(param=param, prefix=boundary%GetPrefix(),  &
  & isSelectionByMeshID=.TRUE.)

CALL boundary%Initiate(param)

CALL boundary%Add(dom=dom, dim=nsd - 1, meshID=[top])
CALL boundary%Set()

CALL boundary%Display("boundary")

CALL obj%Initiate(param=param, boundary=boundary, dom=dom)

CALL obj%Set(constantNodalValue=0.0_DFP)

CALL obj%Display("dbc"//CHAR_LF)

CALL obj%Get(nodeNum=nodeNum, nodalValue=nodalValue)

CALL Display(nodeNum, "nodeNum", advance="NO")
CALL Display(nodalValue, "nodalValue", advance="YES")

CALL domainfile%DEALLOCATE()
CALL dom%DEALLOCATE()
CALL param%DEALLOCATE(); CALL FPL_Finalize
END PROGRAM main
```
