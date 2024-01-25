This example shows how to initiate an instance of Mesh by reading data from mesh file.

This example is same as the previous examples, but in this example we construct `curveEntities_2`.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( Mesh_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile

  CALL meshfile%Initiate( FileName="./meshdata/small_mesh.h5", MODE="READ" )
  CALL meshfile%Open()

  CALL obj%Initiate(hdf5=meshfile, group="/curveEntities_2" )
  CALL obj%Display("")

  CALL obj%Deallocate()
  CALL meshfile%Deallocate()
END PROGRAM main
```
