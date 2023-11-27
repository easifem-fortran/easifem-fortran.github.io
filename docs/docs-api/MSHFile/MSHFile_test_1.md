```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(mshFile_) :: afile
! main
CALL afile%Initiate(filename="./mesh2D.msh", status="OLD", action="READ")
CALL afile%OPEN()
CALL afile%READ()
CALL afile%Deallocate()
END PROGRAM main
```
