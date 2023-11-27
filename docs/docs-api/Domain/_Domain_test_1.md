This example show how to convert the domain data from [[MSHFile_]] format to [[HDF5File]] format.

```fortran
PROGRAM main
    USE easifemBase
    USE easifemClasses
    IMPLICIT NONE
    TYPE(MSHFile_) :: mshFile
    TYPE(HDF5File_) :: hdf5File
```

Open mesh file, which is in [[HDF5File_]] file format. It is a three setup process; Initiate, open and read.

```fortran
    CALL mshFile%Initiate("./mesh.msh", STATUS="OLD", ACTION="READ")
    CALL mshFile%Open()
    CALL mshFile%Read()
```

Open the [[HDF5File_]] so that we can export data to it from mesh file [[MSHFile_]].

```fortran
    CALL hdf5File%Initiate("./mesh.h5", MODE="NEW")
    CALL hdf5File%Open()
```

Export mesh file to [[HDF5File_]].

```fortran
    CALL mshFile%Export(hdf5=hdf5File, group="")
```

```fortran
    CALL hdf5File%Deallocate()
    CALL mshFile%Deallocate()
END PROGRAM main
```
