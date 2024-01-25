---
sidebar_position: 2
---

# Structure

`UserFunction_` is designed to handle user defined function.

```fortran
TYPE :: UserFunction_
  PRIVATE
  TYPE(String) :: name
  !! name of the function
  LOGICAL(LGT) :: isInitiated = .FALSE.
  LOGICAL(LGT) :: isUserFunctionSet = .FALSE.
  LOGICAL(LGT) :: isLuaScript = .FALSE.
  TYPE(String) :: luaScript
  TYPE(String) :: luaFunctionName
  INTEGER(I4B) :: returnType = 0
  INTEGER(I4B) :: argType = 0
  INTEGER(I4B) :: numArgs = 0
  !! Number of arguments
  !! number of args is 1 for scalar argType scalar
  INTEGER(I4B) :: numReturns = 0
  !! Number of return types
  !! number of return type is 1 for scalar return
  INTEGER(I4B) :: returnShape(2) = 0
  !! Shape of return
  !! Only used when returnType is matrix
  REAL(DFP) :: scalarValue = 0.0
  !! Scalar constant value
  REAL(DFP), ALLOCATABLE :: vectorValue(:)
  !! Vector constant value
  REAL(DFP), ALLOCATABLE :: matrixValue(:, :)
  !! Matrix constant value
  PROCEDURE(iface_ScalarFunction), POINTER, NOPASS :: scalarFunction =>  &
    & NULL()
  !! Scalar function pointer
  PROCEDURE(iface_VectorFunction), POINTER, NOPASS :: vectorFunction =>  &
    & NULL()
  !! vector function pointer
  PROCEDURE(iface_MatrixFunction), POINTER, NOPASS :: matrixFunction =>  &
    & NULL()
  !! matrix function pointer
End Type UserFunction_
```
