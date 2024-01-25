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
!

MODULE myModule
USE easifemBase
USE easifemClasses
IMPLICIT NONE
PRIVATE
PUBLIC :: MyUserFunction_

TYPE, EXTENDS(UserFunction_) :: MyUserFunction_
CONTAINS
  PROCEDURE, PUBLIC, PASS(obj) :: GetScalarValue => GetScalarValue1
END TYPE MyUserFunction_

CONTAINS
RECURSIVE SUBROUTINE GetScalarValue1(obj, val, args)
  CLASS(MyUserFunction_), INTENT(INOUT) :: obj
  REAL(DFP), INTENT(INOUT) :: val
  REAL(DFP), OPTIONAL, INTENT(IN) :: args(:)

  TYPE(ParameterList_) :: param

  CALL param%Initiate()
  CALL SetUserFunctionParam(param=param, returnType=SCALAR, argType=TIME)
  CALL obj%Initiate(param)
  val = SIN(args(1))
  CALL param%DEALLOCATE()
END SUBROUTINE GetScalarValue1
END MODULE myModule

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

PROGRAM main
USE easifemBase
USE easifemClasses
USE myModule
IMPLICIT NONE

TYPE(UserFunction_) :: obj
TYPE(MyUserFunction_) :: MyUserFunction
REAL(DFP) :: val

CALL FPL_Init
CALL obj%SET(MyUserFunction)
CALL obj%Get(val=val, args=[3.14_DFP * 0.5_DFP])

CALL Display(val, "val: ")
CALL obj%Display("")

CALL FPL_Finalize
END PROGRAM main
