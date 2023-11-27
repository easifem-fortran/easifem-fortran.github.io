This example tests the `SetMeshMap` method of the domain.

``` fortran
PROGRAM main
    USE easifemBase
    USE easifemClasses
    IMPLICIT NONE
    TYPE(Domain_) :: obj
    TYPE(HDF5File_) :: domfile
    CHARACTER( LEN = * ), PARAMETER :: domfilename="./meshmap/mesh.h5"
```

Open the mesh file.

```fortran
    CALL domfile%Initiate(domfilename, mode="READ")
    CALL domfile%Open()
```

!!! note ""
    Initiate the domain.

```fortran
    CALL obj%Initiate(domfile, '')
```

!!! note ""
    Setting `MeshFacetData` of the domain.

```fortran
    CALL obj%SetMeshFacetData()
    CALL Display( "OK" )
```

!!! settings "Cleanup"

```fortran
    CALL obj%Deallocate()
    CALL domfile%Deallocate()
END PROGRAM main
```
