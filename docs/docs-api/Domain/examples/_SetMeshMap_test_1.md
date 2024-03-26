This example tests the `SetMeshMap` method of the domain.

``` fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE(Domain_) :: obj
  TYPE(HDF5File_) :: domfile
  CHARACTER(*), PARAMETER :: filename="../../Mesh/examples/meshdata/small_mesh.h5" 

  ! Open the mesh file.

  CALL domfile%Initiate(filename, "READ")
  CALL domfile%Open()

  ! Initiate the domain.

  CALL obj%Initiate(domfile, '')

  ! Setting `MeshFacetData` of the domain.

  CALL obj%SetMeshMap()
  CALL Display( "OK" )

  CALL obj%Deallocate()
  CALL domfile%Deallocate()
END PROGRAM main
```
