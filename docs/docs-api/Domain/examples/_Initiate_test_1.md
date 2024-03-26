This example show how to initiate an instance of `Domain_` from the `HDF5File_` mesh/domain file.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE(Domain_) :: dom
  TYPE(HDF5File_) :: meshfile
  CHARACTER(*), PARAMETER :: filename= &
  & "../../Mesh/examples/meshdata/small_mesh_3d.h5" 

  CALL meshfile%Initiate(filename, mode="READ")
  CALL meshfile%Open()

  CALL dom%Initiate(meshfile, '')

  CALL dom%Deallocate()
  CALL meshfile%Deallocate()
END PROGRAM main
```
