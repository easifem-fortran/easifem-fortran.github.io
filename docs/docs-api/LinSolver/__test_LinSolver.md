
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

module test_m
use easifemBase
use easifemClasses
implicit none
contains

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test0
  type( LinSolver_ ) :: obj
  type( hdf5File_ ) :: hdf5
  integer( i4b ) :: ierr, tnodes
  call display( "TESTING IMPORT" )
  call hdf5%initiate( filename="./templateLinSolver.hdf5", MODE="READ" )
  call hdf5%open()
  call obj%import(hdf5,"")
  call obj%display("")
  call hdf5%close(); call hdf5%Deallocate()
  call obj%Deallocate()
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test2
  type( LinSolver_ ) :: obj
  type( ParameterList_ ) :: param
  type( hdf5File_ ) :: hdf5
  integer( i4b ) :: ierr, tnodes
  call display( "TESTING INITIATE AND EXPORT" )
  call FPL_INIT(); call param%initiate()
  call setLinSolverParam( param=param, solverName=LIS_CG,&
    & preconditionOption=LEFT_PRECONDITION, convergenceIn=convergenceInRes, &
    & convergenceType=relativeConvergence, maxIter=100,relativeToRHS=.TRUE., &
    & KrylovSubspaceSize=20,rtol=1.0D-10,atol=1.0D-10 )
  call obj%initiate(param)
  call hdf5%initiate( filename="./templateLinSolver.hdf5", MODE="NEW" )
  call hdf5%open()
  call obj%export( hdf5, "" )
  call hdf5%close(); call hdf5%Deallocate()
  call obj%Deallocate()
  call param%Deallocate(); call FPL_FINALIZE()
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test1
  type( LinSolver_ ) :: obj
  type( ParameterList_ ) :: param
  integer( i4b ) :: ierr, tnodes
  call display( "TESTING INITIATE AND Deallocate" )
  call FPL_INIT(); call param%initiate()
  call setLinSolverParam( param=param, solverName=LIS_CG,&
    & preconditionOption=LEFT_PRECONDITION, convergenceIn=convergenceInRes, &
    & convergenceType=relativeConvergence, maxIter=100,relativeToRHS=.TRUE., &
    & KrylovSubspaceSize=20,rtol=1.0D-10,atol=1.0D-10 )
  call obj%initiate(param)
  call obj%Display("LinSolver : ")
  call obj%Deallocate()
  call param%Deallocate(); call FPL_FINALIZE()
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine exportMesh
  TYPE( MSH_ ) :: mshFile
  CALL mshFile%initiate( file="./mesh.msh", NSD=2 )
  CALL mshFile%ExportMesh( file="./mesh.h5" )
  CALL mshFile%Deallocate()
end

end module test_m

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

program main
use test_m
implicit none
call test0
end program main