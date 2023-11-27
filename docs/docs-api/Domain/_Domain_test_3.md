This example show how to get bounding box of a domain.

``` fortran
PROGRAM main
    USE easifemBase
    USE easifemClasses
    IMPLICIT NONE
    TYPE(Domain_) :: dom
    TYPE(HDF5File_) :: meshfile
```

[[HDF5File_]] open mesh file

```fortran
    CALL meshfile%Initiate("./mesh.h5", mode="READ")
    CALL meshfile%Open()
```

[[Domain_]] initiates domain by reading the [[HDF5File_]]

```fortran
    CALL dom%Initiate(meshfile, '')
```

Now let us get the bounding box of the domain by using the method called `GetBoundingBox()`.

```fortran
    CALL Display(dom%GetBoundingBox(), "Box : ")
```

```fortran
    CALL dom%Deallocate()
    CALL meshfile%Close()
    CALL meshfile%Deallocate()
END PROGRAM main
```
