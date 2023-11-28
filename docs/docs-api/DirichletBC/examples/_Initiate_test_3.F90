PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE

CHARACTER(*), PARAMETER :: myName = "main"
CHARACTER(*), PARAMETER :: modName = "main"
TYPE(DirichletBC_) :: obj
TYPE(MeshSelection_) :: boundary
TYPE(ParameterList_) :: param
TYPE(Domain_) :: dom
TYPE(HDF5File_) :: domainfile
CLASS(UserFunction_), POINTER :: func
CHARACTER(*), PARAMETER :: domainfilename = "./mesh3D.h5"
INTEGER(I4B) :: bottom = 1, top = 2, left = 3, right = 4,  &
  & front = 5, behind = 6, nsd
INTEGER(I4B), ALLOCATABLE :: nodeNum(:)
REAL(DFP), ALLOCATABLE :: nodalValue(:, :)
PROCEDURE(iface_ScalarFunction), POINTER :: scalarFunction => NULL()

CALL FPL_Init; CALL param%Initiate()
CALL domainfile%Initiate(filename=domainfilename, mode="READ")
CALL domainfile%OPEN()
CALL dom%Initiate(domainfile, group="")
nsd = dom%GetNSD()

CALL SetAbstractBCParam(param=param, prefix=obj%GetPrefix(),  &
  & name="ZeroBC", idof=1, nodalValueType=Space, isUserFunction=.TRUE.)

CALL SetMeshSelectionParam(param=param, prefix=boundary%GetPrefix(),  &
  & isSelectionByMeshID=.TRUE.)

CALL SetUserFunctionParam(param=param, name="bc", returnType=Scalar,  &
  & argType=Space)

CALL boundary%Initiate(param)
CALL boundary%Add(dom=dom, dim=nsd - 1, meshID=[top])
CALL boundary%Set()

CALL obj%Initiate(param=param, boundary=boundary, dom=dom)

ALLOCATE (func)
CALL func%Initiate(param)
scalarFunction => func1
CALL func%Set(scalarFunction=scalarFunction)

CALL obj%Set(userFunction=func)

CALL obj%Get(nodeNum=nodeNum, nodalValue=nodalValue)

CALL Display(nodeNum, "nodeNum", advance="NO")
CALL Display(nodalValue, "nodalValue", advance="YES")

CALL domainfile%DEALLOCATE()
CALL dom%DEALLOCATE()
CALL param%DEALLOCATE(); CALL FPL_Finalize

CONTAINS
PURE FUNCTION func1(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ans = x(1) + x(2) + x(3)
END FUNCTION func1
END PROGRAM main
