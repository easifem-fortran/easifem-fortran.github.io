```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(MSHFile_) :: mshFile
TYPE(HDF5File_) :: hdf5File
CHARACTER(LEN=*), PARAMETER :: testName = "test_MSHFile_1"
INTEGER(I4B) :: error
!> main
! #MSHFile/Initiate
! #MSHFile/Open
! #MSHFile/Read
! #HDF5File/Initiate
! #HDF5File/Open
! #HDF5File/Close
CALL mshFile%initiate(filename="./mesh3D.msh", status="OLD", action="READ")
CALL mshFile%OPEN()
CALL mshFile%READ(error)
CALL hdf5File%initiate(filename="./mesh3D.h5", mode="NEW")
CALL hdf5File%OPEN()
CALL mshFile%Export(hdf5=hdf5File, group="")
CALL hdf5File%CLOSE()
CALL hdf5File%Deallocate()
CALL mshFile%CLOSE()
CALL mshFile%Deallocate()
END PROGRAM main
```
