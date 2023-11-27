This example show how to initiates an instance of [[Domain_]] from the [[HDF5File]] mesh/domain file. It also tests following methods.

- isElementPresent
- getConnectivity
- getNodeToElements

The mesh used in this example is given below.

![[figures/mesh.png]]

## Modules and classes

- [[Domain_]]
- [[HDF5File_]]

## Usage

IMPORT modules and define variables.

``` fortran
PROGRAM main
    USE easifemBase
    USE easifemClasses
    IMPLICIT NONE
    TYPE(Domain_) :: obj
    CLASS(Mesh_), POINTER :: meshptr
    TYPE(HDF5File_) :: meshfile
    INTEGER(I4B) :: iel
    INTEGER(I4B), ALLOCATABLE :: nptrs(:)
```

Initiates the [[HDF5File_]] and OPEN it.

```fortran
    CALL meshfile%Initiate("./mesh.h5", mode="READ")
    CALL meshfile%Open()
```

Initiates an instance of [[Domain_]].

```fortran
    CALL obj%Initiate(meshfile, '')
```

Let us now test `isElementPresent` method, which returns true IF a given global element is present in the domain.

```fortran
    DO iel = obj%minElemNum, obj%maxElemNum
        IF(.NOT. obj%isElementPresent(iel)) THEN
            CALL fail("isElementPresent error code 1")
            STOP
        END IF
    END DO
    CALL PASS("isElementPresent")
```

The following code-block shows how to USE `getConnectivity` method to get the connectivity of an element.

```fortran
    meshptr => obj%getMeshPointer(dim=2, entityNum=1)
    DO iel = meshptr%minElemNum, meshptr%maxElemNum
        IF( .NOT. meshptr%isElementPresent(iel) ) CYCLE
        IF( ANY( meshptr%getConnectivity(iel) .NE. &
            & obj%getConnectivity(iel) ) ) THEN
            CALL fail("getConnectivity error code 2")
            STOP
        END IF
    END DO
    CALL PASS("getConnectivity")
```

Following code-block shows how to USE `getNodeToElements`

```fortran
    CALL OK(obj%getNodeToElements(35) .in. [41,42,79, 97, 114, 203, 185, 165], &
        & "getNodeToElements")
```

Note that the 41 and 42 are the line elements connected to node 35 as shown in figure below.

![[figures/mesh-node-35.png]]

Test: when note is not present. In this case it returns a vector of length 0.

```fortran
    if( size(obj%getNodeToElements(0)) .ne. 0 ) then
        call FAIL("getNodeToElements error code 3")
        stop
    else
        call PASS("getNodeToElements")
    end if
```

Test: test how absent nodes are handled. Here, node 0 is absent.

```fortran
    CALL OK(obj%getNodeToElements([35,0]) .in. [41,42,79, 97, 114, 203, 185, 165], &
        & "getNodeToElements")
```

!!! note "cleanup"

```fortran
    meshptr => NULL()
    CALL meshfile%Deallocate()
    CALL obj%Deallocate()
END PROGRAM main
```
