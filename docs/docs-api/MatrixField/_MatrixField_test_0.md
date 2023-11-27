```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
```

Declare variables:

```fortran
  TYPE( MSHFile_) :: mshFile
  TYPE( HDF5File_ ) :: hdf5File
```

```fortran
  CALL mshFile%Initiate( "./mesh.msh", ACTION="READ", STATUS="OLD" )
  CALL mshFile%Open(); CALL mshFile%Read()
  CALL hdf5File%Initiate( "./mesh.h5", "NEW" )
  CALL hdf5File%Open()
  CALL mshFile%Export( hdf5File, "" )
  CALL mshFile%Deallocate()
  CALL hdf5File%Deallocate()
```

```fortran
END PROGRAM main
```
