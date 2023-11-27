This example shows how to USE [MeshSelection_](MeshSelection_.md) WITH `meshSelectionByID` option.

You should see [[_MeshSelection_test_2]] before this example.

``` fortran
PROGRAM main
    USE easifemBase
    USE easifemClasses
    IMPLICIT NONE
    TYPE( MeshSelection_ ) :: obj
```

Initiate an instance of [MeshSelection_](MeshSelection_.md) with mesh slection by mesh ID.


```fortran
    CALL obj%Initiate( isSelectionByMeshID=.TRUE. )
```

Add mesh regions.

```fortran
    CALL obj%Add( dim=0, meshID=[1,2,3,4,5,6])
    CALL obj%Add( dim=1, meshID=[2,5,6,7])
    CALL obj%Add( dim=2, meshID=[1,3,5,6,8])
    CALL obj%Add( dim=3, meshID=[1,8])
```

Now that we have added the region, we should call set function.

```fortran
    CALL obj%Set()
```

The following code block shows how to use getMeshID.

```fortran
    CALL OK( ALL([1,2,3,4,5,6] .EQ. obj%getMeshID(0)), "getMeshID" )
    CALL OK( ALL([2,5,6,7] .EQ. obj%getMeshID(1)), "getMeshID" )
    CALL OK( ALL([1,3,5,6,8] .EQ. obj%getMeshID(2)), "getMeshID" )
    CALL OK( ALL([1,8] .EQ. obj%getMeshID(3)), "getMeshID" )
```

Cleanup.

```fortran
    CALL obj%Deallocate()
END PROGRAM main
```
