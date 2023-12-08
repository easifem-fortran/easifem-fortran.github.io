!> authors: Vikas Sharma, Ph. D.
! date: 26 Oct 2021
! summary: testing #UserFunction/Import for matrixValue

!----------------------------------------------------------------------------
!
!----------------------------------------------------------------------------

! [[UserFunction_]], [[HDF5File_]]

PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( UserFunction_ ) :: obj
  TYPE( HDF5File_ ) :: hdf5file
  ! #HDF5File/Initiate
  CALL hdf5file%Initiate(filename="./test_6.h5", MODE="READ")
  ! #HDF5File/Open
  CALL hdf5file%Open()
  ! #UserFunction/Import
  CALL obj%Import(hdf5file, "")
  CALL obj%Display("")
  CALL hdf5file%Deallocate()
  CALL obj%Deallocate()
END PROGRAM main
