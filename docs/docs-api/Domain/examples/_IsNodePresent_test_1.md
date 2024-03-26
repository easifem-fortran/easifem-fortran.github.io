This example show how to initiate an instance of `Domain_` from the `HDF5File_` mesh/domain file. 
It tests `isNodePresent`, `getTotalNodes`, and `Operator(.tNodes.)` methods

``` fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE(Domain_) :: obj
  TYPE(HDF5File_) :: meshfile
  CHARACTER(*), PARAMETER :: filename="../../Mesh/examples/meshdata/small_mesh.h5" 

  ! initiates the [[HDF5File_]] and OPEN it

  CALL meshfile%Initiate(filename, "READ")
  CALL meshfile%Open()

! Initiates an instance of [[Domain_]]

  CALL obj%Initiate(meshfile, '')

  ! Let us now test `isNodePresent` method, 
  ! which returns true IF a given global node is present in the domain.

  CALL OK( obj%isNodePresent( 1 ), "isNodePresent : "  )
  CALL OK( .NOT. (obj%isNodePresent( 0 )), "isNodePresent : "  )

  CALL meshfile%Deallocate()
  CALL obj%Deallocate()
END PROGRAM main
```
