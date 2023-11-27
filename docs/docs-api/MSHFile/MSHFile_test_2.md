```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(MSHFile_) :: mshFile
TYPE(HDF5File_) :: hdf5File
INTEGER(I4B) :: error
CALL mshFile%Initiate(filename="./mesh2D.msh", status="OLD", action="READ")
CALL mshFile%OPEN()
CALL mshFile%READ(error)
CALL hdf5File%Initiate(filename="./mesh2D.h5", mode="NEW")
CALL hdf5File%OPEN()
CALL mshFile%Export(hdf5=hdf5File, group="")
CALL hdf5File%CLOSE()
CALL hdf5File%Deallocate()
CALL mshFile%CLOSE()
CALL mshFile%Deallocate()
END PROGRAM main
```
