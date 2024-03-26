This example show how to get maximum and minimum node/element number inside the domain.

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE
TYPE(Domain_) :: obj
TYPE(HDF5File_) :: meshfile
CHARACTER(*), PARAMETER ::  &
  & filename="../../Mesh/examples/meshdata/small_mesh.h5" 

CALL meshfile%Initiate(filename,"READ")
CALL meshfile%Open()

CALL obj%Initiate(meshfile, '')

! We can obtain the largest and smallest node number 
! by using `obj%maxNptrs` and `obj%minNptrs`

CALL Display(obj%maxNptrs, "maxNptrs : ")
CALL Display(obj%minNptrs, "minNptrs : ")

! We can obtain the largest and smallest element number 
! by using `obj%maxElemNum` and `obj%minElemNum`

CALL Display(obj%maxElemNum, "maxElemNum : ")
CALL Display(obj%minElemNum, "minElemNum : ")

CALL obj%Deallocate()
CALL meshfile%Deallocate()
END PROGRAM main
```
