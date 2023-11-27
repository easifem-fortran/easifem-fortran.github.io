This example tests the `setMeshFacetElement` method of the domain.

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

Initiate the domain.

```fortran
    CALL obj%Initiate(domfile, '')
```

Setting `MeshMap` of the domain.

```fortran
    CALL obj%SetMeshMap()
    CALL obj%SetMeshFacetElement()
    CALL obj%DisplayMeshFacetData( "MeshFacetData = " )
    CALL Display( "OK" )
```

```fortran
    CALL obj%Deallocate()
    CALL domfile%Deallocate()
END PROGRAM main
```
