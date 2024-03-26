```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( FEMesh_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  CHARACTER(*), PARAMETER :: filename="./meshdata/small_mesh.h5"

  CALL meshfile%Initiate( filename, "READ" )
  CALL meshfile%Open()
  CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )

  ! Now we get the full information about the element 
  ! connected to the given global element numbers.

block 
  nptrs = obj%GetElementToElements( globalElement=250, onlyElements=.TRUE. )
end block 

  nptrs = obj%GetElementToElements( globalElement=250, onlyElements=.TRUE. )
  CALL Display( nptrs, "Element connected to iel=250")

  nptrs = obj%GetElementToElements( globalElement=316, onlyElements=.FALSE. )
  CALL Display( nptrs, "Element connected to iel=316")

  CALL obj%Deallocate()
  CALL meshfile%Close()
  CALL meshfile%Deallocate()
END PROGRAM main
```
