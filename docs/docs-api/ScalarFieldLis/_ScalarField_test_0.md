In this example we convert mshfile to hdf5file. This hdf5 file is needed for following examples.

Mesh used in this example is given below:

![](./figures/mesh.png)

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE( MSHFile_ ) :: mshFile
TYPE( HDF5File_ ) :: aHDF5File
INTEGER( I4B ) :: error
CALL mshFile%initiate( filename="./mesh.msh", status="OLD", action="READ" )
CALL mshFile%open()
CALL aHDF5File%initiate( filename="./mesh.h5", mode="NEW" )
CALL aHDF5File%open()
CALL mshFile%Export( hdf5=aHDF5File, group="" )
CALL aHDF5File%Deallocate()
CALL mshFile%Deallocate()
END PROGRAM main
```
