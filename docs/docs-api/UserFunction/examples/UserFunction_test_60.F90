!> authors: Vikas Sharma, Ph. D.
! date: 26 Oct 2021
! summary: testing export for user function

MODULE MyFunction_Module
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE, EXTENDS( UserFunction_ ) :: MyUserFunction_
    CONTAINS
    PROCEDURE, PUBLIC, PASS( obj ) :: getScalarValue => myf_getScalarValue
  END TYPE MyUserFunction_
  CONTAINS
  RECURSIVE SUBROUTINE myf_getScalarValue(obj, val, args)
    CLASS( MyUserFunction_ ), INTENT( INOUT ) :: obj
    REAL( DFP ), INTENT( OUT ) :: val
    REAL( DFP ), OPTIONAL, INTENT( IN ) :: args( : )
    val = SIN(args(1))
  END SUBROUTINE myf_getScalarValue
END MODULE MyFunction_Module

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

! [[UserFunction_]], [[HDF5File_]]

PROGRAM main
  USE MyFunction_Module
  IMPLICIT NONE
  TYPE( UserFunction_ ) :: obj
  TYPE( MyUserFunction_ ) :: MyUserFunction
  TYPE( HDF5File_ ) :: hdf5file
  ! #UserFunction/Initiate
  CALL MyUserFunction%Initiate( returnType=SCALAR, argType=TIME )
  ! #UserFunction/Set
  CALL obj%Set( MyUserFunction )
  ! #HDF5File/Initiate
  CALL hdf5file%Initiate(filename="./test_6.h5", MODE="NEW")
  ! #HDF5File/Open
  CALL hdf5file%Open()
  ! #UserFunction/Export
  CALL MyUserFunction%Export( hdf5file, "MyUserFunction" )
  CALL obj%Export(hdf5file, "obj")
  CALL hdf5file%Deallocate()
END PROGRAM main
