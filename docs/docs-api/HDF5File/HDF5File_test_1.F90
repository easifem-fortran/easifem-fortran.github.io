!> authors: Vikas Sharma, Ph. D.
! date: 26 Oct 2021
! summary:

! [[HDF5File_]]

PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE( HDF5File_ ) :: obj
CHARACTER( LEN=* ), PARAMETER ::  filename = "./test-1.h5"
! #HDF5File/Initiate
CALL obj%Initiate( filename, mode="NEW" )
! #HDF5File/Open
CALL obj%Open()
! #HDF5File/Close
CALL obj%Close()
! #HDF5File/Deallocate
CALL obj%Deallocate()
END PROGRAM main