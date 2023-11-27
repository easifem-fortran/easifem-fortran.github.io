```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(mshFile_) :: afile
TYPE(txtFile_) :: bfile
! main
CALL afile%Initiate(filename="./mesh2D.msh", status="OLD", action="READ")
CALL afile%OPEN()
CALL afile%Read()
CALL bfile%Initiate(filename="./mesh2D_copy.msh", status="REPLACE", action="WRITE")
CALL bfile%Open()
CALL afile%Export(afile=bfile)
CALL afile%Deallocate()
CALL bfile%Deallocate()
END PROGRAM main
```
