```fortran
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
logical( lgt ), save, private :: isMeshExported = .false.
contains

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test11
  type( mesh_ ) :: obj
  integer( I4B ) :: ierr, ii
  type( HDF5File_ ) :: meshfile
  type( VTKFile_ ) :: vtkfile
  real( DFP ), allocatable :: nodeCoord( :, : ), pressure( : )
  call display( "Testing ExportToVTK" )
  call meshfile%initiate( filename="./mesh.h5", mode="READ" ); call meshfile%open()
  call obj%initiate(hdf5=meshfile, group="/surfaceEntities_1" )
  call obj%getNodeCoord( nodeCoord=nodeCoord, hdf5=meshfile, &
    & group="/nodeCoord" )
  call obj%ExportToVTK( vtkFile=vtkFile, nodeCoord=nodeCoord, &
    & filename="./surfaceEntities_1.vtu", OpenTag=.TRUE., &
    & Content=.TRUE., CloseTag=.FALSE. )
  !> writing node data
  call vtkFile%WriteDataArray(location=String('node'), &
    & action=String('open'))
  call reallocate( pressure, obj%getTotalNodes() )
  call random_number( pressure ); pressure = pressure * 10
  call vtkFile%WriteDataArray( name=String("node_data"), &
    & x=pressure, numberOfComponents=1 )
  call vtkFile%WriteDataArray( location=String('node'), &
    & action=String('close') )
  !> writing cell data
  call vtkFile%WriteDataArray(location=String('cell'), &
    & action=String('open'))
  call reallocate( pressure, obj%getTotalElements() )
  call random_number( pressure ); pressure = pressure * 10
  call vtkFile%WriteDataArray( name=String("cell_data"), &
    & x=pressure, numberOfComponents=1 )
  call vtkFile%WriteDataArray( location=String('cell'), &
    & action=String('close') )
  call vtkFile%WritePiece()
  call vtkFile%Close( )
  call obj%Deallocate()
  call meshfile%close()
  call meshfile%Deallocate()
  call display( "test-11 [OK!]")
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test10
  type( mesh_ ) :: obj
  integer( I4B ) :: ierr, ii
  type( HDF5File_ ) :: meshfile
  call blanklines(); call equalline( )
  call display( colorize('TEST:', color_fg='blue', style='underline_on') &
    & // colorize('BOUNDARY ELEMENT DATA:', color_fg='green', &
    & style='underline_on') )
  call equalline(); call blanklines()
  call meshfile%initiate( filename="./mesh.h5", mode="READ" )
  call meshfile%open()
  call obj%initiate(hdf5=meshfile, group="/surfaceEntities_1" )
  do ii = obj%minElemNum,obj%maxElemNum
    if( .NOT. obj%isElementPresent(ii ) ) cycle
    if( obj%isBoundaryElement(ii) ) then
      call display( obj%getBoundaryElementData( ii ), &
      & "element = " // trim( string( ii ) ) &
      & // ' is connected to global elements = ' )
    end if
  end do
  call obj%Deallocate()
  call meshfile%close()
  call meshfile%Deallocate()
  call display( "test-10 [OK!]")
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test9
  type( mesh_ ) :: obj
  integer( I4B ) :: ierr, ii
  type( HDF5File_ ) :: meshfile
  call blanklines(); call equalline( )
  call display( colorize('TEST:', color_fg='blue', style='underline_on') &
    & // colorize('BOUNDARY AND INTERNAL NPTRS:', color_fg='green', &
    & style='underline_on') )
  call equalline(); call blanklines()
  call meshfile%initiate( filename="./mesh.h5", mode="READ" )
  call meshfile%open()
  call obj%initiate(hdf5=meshfile, group="/surfaceEntities_1" )
  call display( obj%getNptrs(), "getNptrs = ")
  call display( obj%getInternalNptrs(), "getInternalNptrs = ")
  call display( obj%getBoundaryNptrs(), "getBoundaryNptrs = ")
  call obj%Deallocate()
  call meshfile%close()
  call meshfile%Deallocate()
  call display( "test-9 [OK!]")
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test8
  type( mesh_ ) :: obj
  integer( I4B ) :: ierr, ii
  type( HDF5File_ ) :: meshfile
  call blanklines(); call equalline( )
  call display( colorize('TEST:', color_fg='blue', style='underline_on') &
    & // colorize('ELEMENT TO ELEMENTS:', color_fg='green', &
    & style='underline_on') )
  call equalline(); call blanklines()
  call meshfile%initiate( filename="./mesh.h5", mode="READ" )
  call meshfile%open()
  call obj%initiate(hdf5=meshfile, group="/surfaceEntities_1" )
  do ii = obj%minElemNum, obj%maxElemNum
    if( .not. obj%isElementPresent( ii ) ) cycle
    call display( obj%getElementToElements( ii ), &
      & "element = " // trim( string( ii ) ) &
      & // ' is connected to global elements = ' )
  end do
  do ii = obj%minElemNum, obj%maxElemNum
    if( .not. obj%isElementPresent( ii ) ) cycle
    call display( obj%isBoundaryElement( ii ), &
      & "element = " // trim( string( ii ) ) &
      & // ' is a boundary element = ' )
  end do
  call obj%Deallocate()
  call meshfile%close()
  call meshfile%Deallocate()
  call display( "test-8 [OK!]")
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test7
  type( mesh_ ) :: obj
  integer( I4B ) :: ierr, ii
  type( HDF5File_ ) :: meshfile
  call blanklines(); call equalline( )
  call display( colorize('TEST:', color_fg='blue', style='underline_on') &
    & // colorize('NODE TO NODES:', color_fg='green', &
    & style='underline_on') )
  call equalline(); call blanklines()
  call meshfile%initiate( filename="./mesh.h5", mode="READ" )
  call meshfile%open()
  call obj%initiate(hdf5=meshfile, group="/surfaceEntities_1" )
  do ii = obj%minNptrs, obj%maxNptrs
    if( .not. obj%isNodePresent( ii ) ) cycle
    call display( obj%getNodeToNodes( ii, .true. ), &
      & "node = " // trim( string( ii ) ) &
      & // ' is connected to global nodes = ' )
  end do
  call obj%Deallocate()
  call meshfile%close()
  call meshfile%Deallocate()
  call display( "test-7 [OK!]")
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test6
  type( mesh_ ) :: obj
  integer( I4B ) :: ierr, ii
  type( HDF5File_ ) :: meshfile
  call blanklines(); call equalline( )
  call display( colorize('TEST:', color_fg='blue', style='underline_on') &
    & // colorize('NODE TO ELEMENTS:', color_fg='green', &
    & style='underline_on') )
  call equalline(); call blanklines()
  call meshfile%initiate( filename="./mesh.h5", mode="READ" )
  call meshfile%open()
  call obj%initiate(hdf5=meshfile, group="/surfaceEntities_1" )
  do ii = obj%minElemNum, obj%maxElemNum
    if( .not. obj%isElementPresent( ii ) ) cycle
  end do
  do ii = obj%minNptrs, obj%maxNptrs
    if( .not. obj%isNodePresent( ii ) ) cycle
    call display( obj%getNodeToElements( ii ), "node = " // trim( string( ii ) ) // ' is connected to global elements = '  )
  end do
  call obj%Deallocate()
  call meshfile%close()
  call meshfile%Deallocate()
  call display( "test-6 [OK!]")
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test5
  type( mesh_ ) :: obj
  integer( I4B ) :: ierr, ii, jj
  type( HDF5File_ ) :: meshfile
  call blanklines(); call equalline( )
  call display( colorize('TEST:', color_fg='blue', style='underline_on') &
    & // colorize('NODES LOOP:', color_fg='green', &
    & style='underline_on') )
  call equalline(); call blanklines()
  call meshfile%initiate( filename="./mesh.h5", mode="READ" )
  call meshfile%open()
  call obj%initiate(hdf5=meshfile, group="/surfaceEntities_1" )
  do ii = obj%minNptrs, obj%maxNptrs
    if( .not. obj%isNodePresent( ii ) ) cycle
    call display( obj%getNodeToElements( ii ), "node = " &
      & // trim( string( ii ) ) // &
      & ' is connected to global elements = '  )
  end do
  do ii = 1, obj%getTotalNodes()
    jj = obj%getGlobalNodeNumber( ii )
    call display( obj%getNodeToElements( jj ), &
      & "node = " // trim( string( jj ) ) // &
      & ' is connected to global elements = '  )
  end do
  call obj%Deallocate()
  call meshfile%close()
  call meshfile%Deallocate()
  call display( "test-5 [OK!]")
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test4
  type( mesh_ ) :: obj
  integer( I4B ) :: ierr, ii, jj
  type( HDF5File_ ) :: meshfile
  call blanklines(); call equalline( )
  call display( colorize('TEST:', color_fg='blue', style='underline_on') &
    & // colorize('ELEMENT LOOP:', color_fg='green', &
    & style='underline_on') )
  call equalline(); call blanklines()
  call meshfile%initiate( filename="./mesh.h5", mode="READ" )
  call meshfile%open()
  call obj%initiate(hdf5=meshfile, group="/surfaceEntities_1" )
  do ii = obj%minElemNum, obj%maxElemNum
    if( .not. obj%isElementPresent( ii ) ) cycle
  end do
  do ii = 1, obj%getTotalElements()
    jj = obj%getGlobalElemNumber( ii )
    if( .not. obj%isElementPresent( jj ) ) cycle
  end do
  call obj%Deallocate()
  call meshfile%close()
  call meshfile%Deallocate()
  call display( "test-4 [OK!]")
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test3
  type( mesh_ ) :: obj
  integer( I4B ) :: ierr
  type( HDF5File_ ) :: meshfile
  call blanklines(); call equalline( )
  call display( colorize('TEST:', color_fg='blue', style='underline_on') &
    & // colorize('INITIATE POINT ENTITIES:', color_fg='green', &
    & style='underline_on') )
  call equalline(); call blanklines()
  call meshfile%initiate( filename="./mesh.h5", mode="READ" )
  call meshfile%open()
  call obj%initiate(hdf5=meshfile, group="/pointEntities_1" )
  call obj%Deallocate()
  call meshfile%close()
  call meshfile%Deallocate()
  call display( "test-3 [OK!]")
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test2
  type( mesh_ ) :: obj
  integer( I4B ) :: ierr
  type( HDF5File_ ) :: meshfile
  call blanklines(); call equalline( )
  call display( colorize('TEST:', color_fg='blue', style='underline_on') &
    & // colorize('INITIATE CURVE ENTITIES:', color_fg='green', &
    & style='underline_on') )
  call equalline(); call blanklines()
  call meshfile%initiate( filename="./mesh.h5", mode="READ" )
  call meshfile%open()
  call obj%initiate(hdf5=meshfile, group="/curveEntities_1" )
  call obj%Deallocate()
  call meshfile%close()
  call meshfile%Deallocate()
  call display( "test-2 [OK!]")
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

end module test_m

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

program main
use test_m
implicit none
integer :: ierr
call setDisplayProfile( displayProfileTerminal )
call exportMesh
! call test1
! call test2
! call test3
! call test4
! call test5
! call test6
! call test7
! call test8
! call test9
! call test10
call test11
end program main
```
