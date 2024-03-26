This example tests the `SetMeshFacetElement` method of the domain.

``` fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE(Domain_) :: obj
  TYPE(HDF5File_) :: domfile
  CHARACTER(*), PARAMETER :: filename="../../Mesh/examples/meshdata/small_mesh.h5" 

  CALL domfile%Initiate(filename, "READ")
  CALL domfile%Open()

  CALL obj%Initiate(domfile, '')

  CALL obj%SetMeshMap()
  CALL obj%SetMeshFacetElement()
  CALL obj%DisplayMeshFacetData( "MeshFacetData = " )
  CALL Display( "OK" )

  CALL obj%Deallocate()
  CALL domfile%Deallocate()
END PROGRAM main
```
