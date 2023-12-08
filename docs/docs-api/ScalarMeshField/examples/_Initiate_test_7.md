### Example 7 (Initiate by UserFunction)

:::info
This example shows how to initiate an instance of `ScalarMeshField_` by using a `UserFunction`. The user function is space dependent in this example.

:::

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(HDF5File_) :: meshfile
CLASS(Mesh_), POINTER :: amesh => NULL()
TYPE(Domain_) :: dom
TYPE(ScalarMeshField_) :: obj
TYPE(ParameterList_) :: param
TYPE(UserFunction_) :: func
PROCEDURE(iface_ScalarFunction), POINTER :: func_ptr => NULL()

CALL meshfile%Initiate(FileName="./mesh.h5", MODE="READ")
CALL meshfile%OPEN()

CALL dom%Initiate(meshfile, "")
amesh => dom%GetMeshPointer(dim=dom%GetNSD(), entityNum=1)

CALL FPL_INIT(); CALL param%Initiate()
CALL SetUserFunctionParam(param=param, name="func", returnType=Scalar,  &
  & argType=Space)
CALL func%Initiate(param)
func_ptr => func1
CALL func%Set(scalarFunction=func_ptr)

CALL obj%Initiate(mesh=amesh, func=func, name="func", engine="NATIVE_SERIAL")

CALL obj%DEALLOCATE()
CALL amesh%DEALLOCATE()
CALL meshfile%CLOSE()
CALL meshfile%DEALLOCATE()
CALL param%DEALLOCATE(); CALL FPL_FINALIZE()

CONTAINS
PURE FUNCTION func1(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ans = x(1) + x(2)
END FUNCTION func1
END PROGRAM main
```
