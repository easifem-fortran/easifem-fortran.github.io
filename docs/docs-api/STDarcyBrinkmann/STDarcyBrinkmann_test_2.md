!> authors: Vikas Sharma, Ph. D.
! date: 29 Sept 2021
! last-update:
!   - 21 Oct 2021
! summary: Testing for read and write of mesh

! [[MSHFile_]], [[HDF5File_]]

PROGRAM main
USE easifemBase
USE easifemClasses
USE easifemMaterials
USE easifemKernels
USE STDarcyBrinkmann_Class
IMPLICIT NONE
TYPE( MSHFile_ ) :: mshFile
TYPE( HDF5File_ ) :: hdf5File
INTEGER( I4B ) :: error
CHARACTER( LEN = * ), PARAMETER :: domainFileForPressure="./mesh_tri3"
CHARACTER( LEN = * ), PARAMETER :: domainFileForVelocity="./mesh_tri6"
!> main
! #MSHFile/Initiate
CALL mshFile%Initiate( domainFileForPressure//".msh", STATUS="OLD", &
  & ACTION="READ" )
! #MSHFile/Open
! #MSHFile/Read
CALL mshFile%Open(); CALL mshFile%Read(error)
! #HDF5File/Initiate
CALL hdf5File%Initiate( domainFileForPressure//".h5", MODE="NEW" )
! #HDF5File/Open
CALL hdf5File%Open()
! #MSHFile/Export
CALL mshFile%Export( hdf5=hdf5File, group="" )
CALL mshFile%Deallocate()
CALL hdf5File%Deallocate()
! velocity mesh
! #MSHFile/Initiate
CALL mshFile%Initiate( domainFileForVelocity//".msh", STATUS="OLD", &
  & ACTION="READ" )
! #MSHFile/Open
! #MSHFile/Read
CALL mshFile%Open(); CALL mshFile%Read(error)
! #HDF5File/Initiate
CALL hdf5File%Initiate( domainFileForVelocity//".h5", MODE="NEW" )
! #HDF5File/Open
CALL hdf5File%Open()
! #MSHFile/Export
CALL mshFile%Export( hdf5=hdf5File, group="" )
CALL mshFile%Deallocate()
CALL hdf5File%Deallocate()
END PROGRAM main
