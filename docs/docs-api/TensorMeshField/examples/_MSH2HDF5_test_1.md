:::info
This example shows how to convert the mesh generated from `MSH` format to `HDF5` format.
:::

In this example, we use the following mesh.

![](./mesh.png)

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( MSHFile_ ) :: mshFile
  TYPE( HDF5File_ ) :: hdf5file
```

### Step 1:

Initiate an instance of [MSHFile_](/docs-api/MSHFile) which is created by GMSH.

```fortran
CALL mshFile%Initiate( filename="./mesh.msh", STATUS="OLD", ACTION="READ" )
```

### Step 2:

Open the mesh file `MSHFile`

```fortran
CALL mshFile%Open()
```

### Step 3:

Read the mesh information from the file.

```fortran
CALL mshFile%Read()
```

### Step 4:

Initiate an instance of [HDF5File_](/docs-api/HDF5File), we will save mesh data in this file.

```fortran
CALL hdf5file%Initiate( "./mesh.h5", MODE="NEW" )
```

### Step 5:

Open the `HDF5` file so that we can write mesh data in this file.

```fortran
CALL hdf5file%Open()
```

### Step 6:

Export mesh from `MSHFile_file` to `HDF5File` format.

```fortran
CALL mshFile%Export( hdf5=hdf5file, group="" )
```

```fortran
  CALL mshFile%Deallocate()
  CALL hdf5file%Deallocate()
END PROGRAM main
```
