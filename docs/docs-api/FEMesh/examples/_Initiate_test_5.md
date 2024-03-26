---
title: BetterMesh Initiate Example 3
---

This example shows how to initiate an instance of `Mesh_` by reading data
from mesh file, which is in `HDF5File_` format.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( FEMesh_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  CHARACTER( LEN = *), PARAMETER :: filename= &
    & "../../Mesh/examples/meshdata/small_mesh_3d_two_region.h5"
```

Initiate and open the mesh file which is in `HDF5File_` format.

```fortran
CALL meshfile%Initiate( FileName=filename, MODE="READ" )
```

Open the mesh file

```fortran
CALL meshfile%Open()
```

Initiate an instance of `Mesh_`

```fortran
CALL obj%Initiate(hdf5=meshfile, dim=2, entities =[1, 2, 3, 4, 5, 7, 8, 9, 10, 11] )
```

Display the content of mesh.

```fortran
CALL obj%Display("")
```

cleaning up.

```fortran
  CALL obj%Deallocate()
  CALL meshfile%Deallocate()
END PROGRAM main
```
