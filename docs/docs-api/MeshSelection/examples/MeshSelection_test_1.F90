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

!> author: Vikas Sharma, Ph. D.
! date:  2023-11-15
! summary:  SelectioByMeshID

PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(MeshSelection_) :: obj
TYPE(ParameterList_) :: param

CALL FPL_Init()
CALL param%Initiate()

CALL MeshSelectionSetParam(param=param,  &
  & prefix=obj%GetPrefix(), isSelectionByMeshID=.TRUE.)
CALL obj%Initiate(param=param)

CALL obj%Add(dim=0, meshID=[1, 2, 3, 4, 5, 6])
CALL obj%Add(dim=1, meshID=[2, 5, 6, 7])
CALL obj%Add(dim=2, meshID=[1, 3, 5, 6, 8])
CALL obj%Add(dim=3, meshID=[1, 8])
CALL obj%Set()
CALL obj%Display("")

CALL obj%DEALLOCATE()
CALL param%Initiate()
CALL FPL_Finalize
END PROGRAM main
