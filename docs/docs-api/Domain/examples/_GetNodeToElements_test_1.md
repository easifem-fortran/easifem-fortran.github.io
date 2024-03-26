This example shows how to initiates an instance of `Domain_` from the `HDF5File` mesh/domain file.
It also tests following methods.

- `isElementPresent`
- `GetConnectivity`
- `GetNodeToElements`

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
IMPLICIT NONE

TYPE(Domain_) :: obj
CLASS(Mesh_), POINTER :: meshptr
TYPE(HDF5File_) :: meshfile
INTEGER(I4B) :: iel
INTEGER(I4B), ALLOCATABLE :: nptrs(:)
CHARACTER(*), PARAMETER :: filename="../../Mesh/examples/meshdata/small_mesh.h5" 

! Initiates the [[HDF5File_]] and OPEN it.

CALL meshfile%Initiate(filename,"READ")
CALL meshfile%Open()

! Initiates an instance of [[Domain_]].

CALL obj%Initiate(meshfile, '')

! Let us now test `isElementPresent` method, which returns true IF a given global element is present in the domain.

DO iel = obj%minElemNum, obj%maxElemNum
  IF(.NOT. obj%isElementPresent(iel)) THEN
    CALL fail("isElementPresent error code 1")
    STOP
  END IF
END DO
CALL PASS("isElementPresent")

! The following code-block shows how to USE `GetConnectivity` method to get the connectivity of an element.

meshptr => obj%GetMeshPointer(dim=2, entityNum=1)
DO iel = meshptr%minElemNum, meshptr%maxElemNum
  IF( .NOT. meshptr%isElementPresent(iel) ) CYCLE

  IF( ANY( meshptr%GetConnectivity(iel) .NE. &
    & obj%GetConnectivity(iel) ) ) THEN
    CALL fail("GetConnectivity error code 2")
    STOP
  END IF
END DO
CALL PASS("GetConnectivity")

! Following code-block shows how to USE `GetNodeToElements`

CALL OK(obj%GetNodeToElements(5) .in. [15, 17, 24], "GetNodeToElements: ")

! Note that the 41 and 42 are the line elements connected to node 35 as shown in figure below.

IF( size(obj%GetNodeToElements(0)) .ne. 0 ) THEN
  CALL FAIL("GetNodeToElements error code 3")
  STOP
ELSE
  CALL PASS("GetNodeToElements")
END IF

! Test: test how absent nodes are handled. Here, node 0 is absent.

CALL OK(obj%GetNodeToElements([5,0]) .in. [15, 17, 24], "GetNodeToElements")

meshptr => NULL()
CALL meshfile%Deallocate()
CALL obj%Deallocate()
END PROGRAM main
```
