This example shows how to convert the [MSHFile\_](../MSHFile/MSHFile_.md) file format into the [HDF5File\_](../HDF5File/HDF5File_.md) format.

The mesh is given below

![mesh](mesh.png)

IMPORT modules and declare variables

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( MSHFile_ ) :: mshFile
  TYPE( HDF5File_ ) :: hdf5file
```

Initiate an instance of [MSHFile\_](../MSHFile/MSHFile_.md) which is created by Gmsh.

```fortran
  CALL mshFile%Initiate( filename="./mesh.msh", STATUS="OLD", ACTION="READ" )
```

Open the mesh file [MSHFile\_](../MSHFile/MSHFile_.md)

```fortran
  CALL mshFile%Open()
```

Read the mesh information from the file.

```fortran
  CALL mshFile%Read()
```

Initiate an instance of [HDF5File\_](../HDF5File/HDF5File_.md), we will save mesh data in this file.

```fortran
  CALL hdf5file%Initiate( "./mesh.h5", MODE="NEW" )
```

Open the [HDF5File\_](../HDF5File/HDF5File_.md) file so that we can write mesh data in this file.

```fortran
  CALL hdf5file%Open()
```

exporting mesh from [MSHFile\_](../MSHFile/MSHFile_.md) file to [HDF5File\_](../HDF5File/HDF5File_.md)

```fortran
  CALL mshFile%Export( hdf5=hdf5file, group="" )
```

Cleaning up

```fortran
  CALL mshFile%close()
  CALL mshFile%Deallocate()
  CALL hdf5file%close()
  CALL hdf5file%Deallocate()
END PROGRAM main
```
