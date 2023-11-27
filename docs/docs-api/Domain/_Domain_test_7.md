This example show how to initiate an instance of [[Domain_]] from the [[HDF5File]] mesh/domain file. It tests `isNodePresent`, `getTotalNodes`, and `Operator(.tNodes.)` methods

``` fortran
PROGRAM main
    USE easifemBase
    USE easifemClasses
    IMPLICIT NONE
    TYPE(Domain_) :: obj
    TYPE(HDF5File_) :: meshfile
```

initiates the [[HDF5File_]] and OPEN it

```fortran
    CALL meshfile%Initiate("./mesh.h5", mode="READ")
    CALL meshfile%Open()
```

Initiates an instance of [[Domain_]]

```fortran
    CALL obj%Initiate(meshfile, '')
```

Let us now test `isNodePresent` method, which returns true IF a given global node is present in the domain.

```fortran
    CALL OK( obj%isNodePresent( 1 ), "isNodePresent 1 : "  )
    CALL OK( .NOT. (obj%isNodePresent( 0 )), "isNodePresent 2 : "  )
```

Let us now demonstrate the usage of `getTotalNodes` which returns the total number of nodes in the [[Domain_]], or part of domain (i.e. [[Mesh_]])

Let us get total number of nodes in the domain.

```fortran
    CALL OK( obj%getTotalNodes() .EQ. 102, "getTotalNodes" )
```

Let us not get total number of nodes in the left mesh [[Mesh_]]

```fortran
    CALL Display( obj%getTotalNodes(dim=2, entityNum=1), &
        & "obj%getTotalNodes(dim=2, entityNum=1)=" )
    !! answer should be 56
    CALL Display( obj%getTotalNodes(dim=2, entityNum=2), &
        & "obj%getTotalNodes(dim=2, entityNum=2)=" )
    !! answer should be 55
```

Let us now get total number of nodes in 2D, i.e. nodes in all 2D mesh.

```fortran
    CALL Display( obj%getTotalNodes(dim=2), &
        & "obj%getTotalNodes(dim=2)=" )
    !! answer should be 102
```

Let us now get total number of nodes in 1D, i.e. nodes in all 1D mesh.

TODO BUG : This facility has not been added yet, but we are working on it.

```fortran
    CALL Display( obj%getTotalNodes(dim=1), &
        & "obj%getTotalNodes(dim=1)=" )
```

We can also get total number of nodes using the operator called `.tNodes.`.

To get total number of nodes in the domain use the following.

```fortran
    CALL Display( (.tNodes. obj), "(.tNodes. obj)=" )
```

To get total number of nodes in given dimension `dim` and entity Number, pack them in a vector of length two, that is `[dim, entityNum]`, and pass it to `.tNodes.` as shown below.

```fortran
    CALL Display( (obj .tNodes. [2, 1]), "obj .tNodes. [2, 1]=" )
```

We can also get total number of nodes in a given dimension.

```fortran
    CALL Display( (obj .tNodes. 2), "obj .tNodes.2=" )
```

TODO BUG : The above code block should return the total number of nodes in 2 dimensional meshes.

!!! settings "cleanup"

```fortran
    CALL meshfile%Deallocate()
    CALL obj%Deallocate()
END PROGRAM main
```
