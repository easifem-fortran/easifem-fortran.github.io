! This program is a part of EASIFEM library
! Copyright (C) 2020-2021  Vikas Sharma, Ph.D
!
! This program is free software: you can redistribute it and/or modify
! it under the terms of the GNU General Public License as published by
! the Free Software Foundation, either version 3 of the License, or
! (at your option) any later version.
!
! This program is distributed in the hope that it will be useful,
! but WITHOUT ANY WARRANTY; without even the implied warranty of
! MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
! GNU General Public License for more details.
!
! You should have received a copy of the GNU General Public License
! along with this program.  If not, see <https: //www.gnu.org/licenses/>

PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE

TYPE(UserFunction_) :: obj
TYPE(ParameterList_) :: param
REAL(DFP) :: val
CHARACTER(*), PARAMETER :: luaScript = "Function1.lua"
CHARACTER(*), PARAMETER :: luaFunction = "Function1"

CALL FPL_Init
CALL param%Initiate()

CALL SetUserFunctionParam(param=param, returnType=Scalar, argType=Space,  &
  & luaScript=luaScript, luaFunctionName=luaFunction, numArgs=1, numReturns=1)
CALL obj%Initiate(param)
! CALL obj%Display("")
! CALL obj%SET(MyUserFunction)
CALL obj%Get(val=val, args=[1.0_DFP])
CALL Display(val, "val: ")

CALL param%DEALLOCATE()
CALL FPL_Finalize
END PROGRAM main
