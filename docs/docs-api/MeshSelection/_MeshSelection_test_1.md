This example shows how to use `MeshSelection_` with `meshSelectionByID` option.

``` fortran
PROGRAM main
    USE easifemBase
    USE easifemClasses
    IMPLICIT NONE
    TYPE( MeshSelection_ ) :: obj
```

Let us initiates an instance, in which we will be selecting the mesh by using mesh-ids.

```fortran
    CALL obj%Initiate( isSelectionByMeshID=.TRUE. )
```

Adding mesh regions

```fortran
    CALL obj%Add( dim=0, meshID=[1,2,3,4,5,6])
    CALL obj%Add( dim=1, meshID=[2,5,6,7])
    CALL obj%Add( dim=2, meshID=[1,3,5,6,8])
    CALL obj%Add( dim=3, meshID=[1,8])
```

Now that we are done with setting regions in the instance, we should call `set()` method. This call will do all the necessary steps.

```fortran
    CALL obj%Set()
```

Display the content.

```fortran
    CALL obj%Display( "" )
```

cleanup

```fortran
    CALL obj%Deallocate()
END PROGRAM main
```
