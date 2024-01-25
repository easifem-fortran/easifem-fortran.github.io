! This example shows the usage of the set method.
! In this example we initiate`STScalarMeshField_`by using user FUNCTION
! In addition, we also set DATA in`STScalarMeshField_`by using user FUNCTION.
!
! The STScalarMeshField_ has following properties
! - `varType=Time`

PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(HDF5File_) :: meshfile
CLASS(Mesh_), POINTER :: amesh => NULL()
TYPE(Domain_) :: dom
TYPE(STScalarMeshField_) :: obj
TYPE(ParameterList_) :: param
TYPE(UserFunction_) :: func
PROCEDURE(iface_ScalarFunction), POINTER :: func_ptr => NULL()

CALL meshfile%Initiate(FileName="./mesh.h5", MODE="READ")
CALL meshfile%OPEN()

CALL dom%Initiate(meshfile, "")
amesh => dom%GetMeshPointer(dim=dom%GetNSD(), entityNum=1)

CALL FPL_INIT(); CALL param%Initiate()
CALL SetUserFunctionParam(param=param, name="func", returnType=Scalar,  &
  & argType=Time)
CALL func%Initiate(param)
func_ptr => func1
CALL func%Set(scalarFunction=func_ptr)

CALL obj%Initiate(mesh=amesh, func=func, name="func",  &
  & engine="NATIVE_SERIAL", nnt=2)
CALL obj%Display("STScalarMeshField_ : ")
CALL obj%Set(func=func, dom=dom, timeVec=[0.0_DFP, 1.0_DFP])

BLOCK
  TYPE(FEVariable_) :: fevar
  INTEGER(I4B) :: minElem, maxElem, iel
  LOGICAL(LGT) :: problem

  minElem = amesh%GetMinElemNumber()
  maxElem = amesh%GetMaxElemNumber()

  DO iel = minElem, maxElem
    problem = .NOT. amesh%IsElementPresent(iel)
    IF (problem) CYCLE
    CALL obj%Get(globalElement=iel, fevar=fevar)
    CALL BlankLines()
    CALL Display(fevar, "fevar: ")
    CALL BlankLines()
  END DO
END BLOCK

CALL obj%DEALLOCATE()
CALL amesh%DEALLOCATE()
CALL meshfile%CLOSE()
CALL meshfile%DEALLOCATE()
CALL param%DEALLOCATE(); CALL FPL_FINALIZE()

CONTAINS
PURE FUNCTION func1(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ans = x(1)
END FUNCTION func1
END PROGRAM main
