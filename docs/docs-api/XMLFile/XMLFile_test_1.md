---
title: XMLFile example 1
---

# XMLFile example 1

In this example we show how to initiate, open, and cose the xml file.

## Usage

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
contains

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test0
  TYPE( XMLTag_ ) :: obj
  CALL Display( "Testing XML Tag" )
  CALL obj%setName( String( "VTKFile" ) )
  CALL obj%setAttribute( name=String( "type" ), value=String("StructuredGrid") )
  CALL obj%setAttribute( name=String( "version" ), value=String("1.0") )
  CALL obj%setAttribute( name=String( "byte_order" ), value=String("BigEndian") )
  CALL Display( obj%isEmpty(), "is Empty :: " )
  CALL obj%display("VTK TYPE :: ")
  call obj%Deallocate()
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test4
  TYPE( XMLFile_ ) :: obj
  call obj%import( filename="./testXML.xml" )
  call obj%export( './testXMLout.xml' )
  call obj%close()
  call obj%Deallocate()
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test3
  TYPE( XMLFile_ ) :: obj
  call obj%initiate( "./testXMLout.xml", "NEW" )
  call obj%open()
  call obj%close()
  call obj%Deallocate()
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test2
  TYPE( XMLFile_ ) :: obj
  call obj%import( filename="./testXML.xml" )
  call obj%display( '' )
  call obj%close()
  call obj%Deallocate()
end subroutine

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

subroutine test1
  INTEGER( I4B ) :: unitNo, ierr
  CHARACTER( LEN=1 ) :: tmpChar

  OPEN( NEWUNIT=unitNo,FILE='testXML.xml', &
    & STATUS="OLD", ACCESS="SEQUENTIAL", &
    & FORM="FORMATTED",ACTION="READ", IOSTAT=ierr )
  WRITE( *, * ) "UNIT NO : ", unitNo
  WRITE( *, * ) "IERR : ", IERR
  READ(unitNo,'(a1)',ADVANCE='NO',IOSTAT=ierr) tmpChar
  WRITE( *, * ) trim( tmpChar )
end subroutine

end module

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

program main
use test_m
call test0
end program main
```
