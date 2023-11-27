This example show how to get maximum and minimum node/element number inside the domain.

``` fortran
PROGRAM main
    USE easifemBase
    USE easifemClasses
    IMPLICIT NONE
    TYPE(Domain_) :: obj
    TYPE(HDF5File_) :: meshfile
```

Open the mesh file

```fortran
    CALL meshfile%Initiate("./mesh.h5", mode="READ")
    CALL meshfile%Open()
```

Initiate the domain.

```fortran
    CALL obj%Initiate(meshfile, '')
```

We can obtain the largest and smallest node number by using `obj%maxNptrs` and `obj%minNptrs`

```fortran
    CALL Display(obj%maxNptrs, "maxNptrs : ")
    CALL Display(obj%minNptrs, "minNptrs : ")
```

We can obtain the largest and smallest element number by using `obj%maxElemNum` and `obj%minElemNum`

```fortran
    CALL Display(obj%maxElemNum, "maxElemNum : ")
    CALL Display(obj%minElemNum "minElemNum : ")
```

```fortran
    CALL obj%Deallocate()
    CALL meshfile%Deallocate()
END PROGRAM main
```
