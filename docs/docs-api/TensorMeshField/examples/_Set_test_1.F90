! Initiate `VectorMeshField_` by using `UserFunction_` and set data in it by using `UserFunction_`.
!
! Constant vector valued function.

PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(HDF5File_) :: meshfile
CLASS(Mesh_), POINTER :: amesh => NULL()
TYPE(Domain_) :: dom
TYPE(VectorMeshField_) :: obj
TYPE(ParameterList_) :: param
TYPE(UserFunction_) :: func

CALL meshfile%Initiate(FileName="./mesh.h5", MODE="READ")
CALL meshfile%OPEN()

CALL dom%Initiate(meshfile, "")
amesh => dom%GetMeshPointer(dim=dom%GetNSD(), entityNum=1)

CALL FPL_INIT(); CALL param%Initiate()
CALL SetUserFunctionParam(param=param, name="func", returnType=Vector,  &
  & argType=Constant)
CALL func%Initiate(param)
CALL func%Set(vectorValue=[1.0_DFP, 2.0_DFP, 3.0_DFP])

CALL obj%Initiate(mesh=amesh, func=func, name="func", engine="NATIVE_SERIAL")
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
END PROGRAM main
