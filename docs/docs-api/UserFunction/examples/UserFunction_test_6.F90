!> authors: Vikas Sharma, Ph. D.
! date: 26 Oct 2021
! summary: testing #UserFunction/Export

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
  ! #UserFunction/Initiate
  CALL obj%Initiate( returnType=VECTOR, argType=CONSTANT )
  ! #UserFunction/Set
  CALL obj%Set( vectorValue=[20.0_DFP, 20.0_DFP, 20.0_DFP] )
  ! #HDF5File/Initiate
  CALL hdf5file%Initiate(filename="./test_6.h5", MODE="NEW")
  ! #HDF5File/Open
  CALL hdf5file%Open()
  ! #UserFunction/Export
  CALL obj%Export(hdf5file, "")
  CALL hdf5file%Deallocate()
  CALL obj%Deallocate()
END PROGRAM main
