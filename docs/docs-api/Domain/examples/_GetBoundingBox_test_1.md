This example show how to get bounding box of a domain.

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(Domain_) :: dom
TYPE(HDF5File_) :: meshfile
CHARACTER(*), PARAMETER :: filename= &
  & "../../Mesh/examples/meshdata/small_mesh.h5" 

CALL meshfile%Initiate(filename, "READ")
CALL meshfile%Open()

CALL dom%Initiate(meshfile, '')

! Now let us get the bounding box of the domain 
! by using the method called `GetBoundingBox()`.

CALL Display(dom%GetBoundingBox(), "Box : ")

CALL dom%Deallocate()
CALL meshfile%Close()
CALL meshfile%Deallocate()
END PROGRAM main
```
