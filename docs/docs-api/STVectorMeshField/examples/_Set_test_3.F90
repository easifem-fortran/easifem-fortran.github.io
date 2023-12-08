! This example checks the set method.
! In this example we initiate`STVectorMeshField_`by using user FUNCTION
! In addition, we also set DATA in`STVectorMeshField_`by using user FUNCTION.

PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(HDF5File_) :: meshfile
CLASS(Mesh_), POINTER :: amesh => NULL()
TYPE(Domain_) :: dom
TYPE(STVectorMeshField_) :: obj
TYPE(ParameterList_) :: param
TYPE(UserFunction_) :: func
PROCEDURE(iface_VectorFunction), POINTER :: func_ptr => NULL()

CALL meshfile%Initiate(FileName="./mesh.h5", MODE="READ")
CALL meshfile%OPEN()

CALL dom%Initiate(meshfile, "")
amesh => dom%GetMeshPointer(dim=dom%GetNSD(), entityNum=1)

CALL FPL_INIT(); CALL param%Initiate()
CALL SetUserFunctionParam(param=param, name="func", returnType=Vector,  &
  & argType=Space)
CALL func%Initiate(param)
func_ptr => func1
CALL func%Set(vectorFunction=func_ptr)

CALL obj%Initiate(mesh=amesh, func=func, name="func",  &
  & engine="NATIVE_SERIAL", nnt=2)
CALL obj%Set(func=func, dom=dom)

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
  REAL(DFP), ALLOCATABLE :: ans(:)
  CALL Reallocate(ans, 3)
  ans(1:3) = x(1:3)
END FUNCTION func1
END PROGRAM main
