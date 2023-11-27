This example show how to initiate an instance of [[Domain_]] from the [[HDF5File]] mesh/domain file.

``` fortran
PROGRAM main
    USE easifemBase
    USE easifemClasses
    IMPLICIT NONE
    TYPE(Domain_) :: dom
    TYPE(HDF5File_) :: meshfile
```

Initiates the [[HDF5File_]] and open it.

```fortran
    CALL meshfile%Initiate("./mesh.h5", mode="READ")
    CALL meshfile%Open()
```

Initiates an instance of [[Domain_]].

```fortran
    CALL dom%Initiate(meshfile, '')
```

```fortran
    CALL dom%Deallocate()
    CALL meshfile%Deallocate()
END PROGRAM main
```
