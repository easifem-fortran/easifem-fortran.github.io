
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( MSHFile_ ) :: mshFile
  TYPE( HDF5File_ ) :: hdf5file

CALL mshFile%Initiate( filename="./mesh.msh", STATUS="OLD", ACTION="READ" )

CALL mshFile%Open()

CALL mshFile%Read()

CALL hdf5file%Initiate( "./mesh.h5", MODE="NEW" )

CALL hdf5file%Open()

CALL mshFile%Export( hdf5=hdf5file, group="" )

  CALL mshFile%Deallocate()
  CALL hdf5file%Deallocate()
END PROGRAM main
