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

PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE

TYPE(GmshStructuredMesh_) :: obj
TYPE(Gmsh_) :: gmsh
TYPE(ParameterList_) :: param
CHARACTER(*), PARAMETER :: filename = "mesh3D.msh"
REAL(DFP), ALLOCATABLE :: pointsOnAxis1(:, :)
REAL(DFP), ALLOCATABLE :: pointsOnAxis2(:, :)
REAL(DFP), ALLOCATABLE :: pointsOnAxis3(:, :)
INTEGER(I4B), ALLOCATABLE :: transfinitePointsOnAxis1(:)
INTEGER(I4B), ALLOCATABLE :: transfinitePointsOnAxis2(:)
INTEGER(I4B), ALLOCATABLE :: transfinitePointsOnAxis3(:)
INTEGER(I4B) :: ierr

CALL FPL_Init()
CALL param%Initiate()

CALL Reallocate(pointsOnAxis1, 3, 2)
pointsOnAxis1(:, 1) = [0.0, 0.0, 0.0]
pointsOnAxis1(:, 2) = [1.0, 0.0, 0.0]

CALL Reallocate(transfinitePointsOnAxis1, SIZE(pointsOnAxis1, 2) - 1)
transfinitePointsOnAxis1 = 4

CALL Reallocate(pointsOnAxis2, 3, 2)
pointsOnAxis2(:, 1) = [0.0, 0.0, 0.0]
pointsOnAxis2(:, 2) = [0.0, 1.0, 0.0]

CALL Reallocate(transfinitePointsOnAxis2, SIZE(pointsOnAxis2, 2) - 1)
transfinitePointsOnAxis2 = 4

CALL Reallocate(pointsOnAxis3, 3, 2)
pointsOnAxis3(:, 1) = [0.0, 0.0, 0.0]
pointsOnAxis3(:, 2) = [0.0, 0.0, 1.0]

CALL Reallocate(transfinitePointsOnAxis3, SIZE(pointsOnAxis3, 2) - 1)
transfinitePointsOnAxis3 = 4

CALL SetGmshStructuredMeshParam( &
  & param=param,  &
  & filename=filename, &
  & pointsOnAxis1=pointsOnAxis1,  &
  & pointsOnAxis2=pointsOnAxis2,  &
  & pointsOnAxis3=pointsOnAxis3,  &
  & transfinitePointsOnAxis1=transfinitePointsOnAxis1,  &
  & transfinitePointsOnAxis2=transfinitePointsOnAxis2,  &
  & transfinitePointsOnAxis3=transfinitePointsOnAxis3,  &
  & recombineAll=.TRUE.)

CALL obj%Initiate(param)
CALL obj%Display("GmshStructuredMesh3D = ")

ierr = gmsh%initialize()
ierr = gmsh%model%add("GmshStructuredMesh3D")
CALL obj%Generate(gmsh)
ierr = gmsh%fltk%run()
ierr = gmsh%finalize()

CALL param%DEALLOCATE()
CALL obj%DEALLOCATE()

END PROGRAM main
