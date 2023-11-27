This example shows how to USE [MeshSelection_](MeshSelection_.md) WITH `meshSelectionByID` option, and import it from [HDF5File_](../HDF5File/HDF5File_.md) format.

You should see [[_MeshSelection_test_2]] before this example.

``` fortran
PROGRAM main
    USE easifemBase
    USE easifemClasses
    IMPLICIT NONE
    TYPE( MeshSelection_ ) :: obj
    TYPE( HDF5File_ ) :: hdf5file
```

Initiate and open a [HDF5File_](../HDF5File/HDF5File_.md) so that we can read it and import data from it.

```fortran
    CALL hdf5file%Initiate(filename="./TemplateMeshSelection.hdf5", mode="READ")
    CALL hdf5file%OPEN()
```

Let us now import data from the [HDF5File_](../HDF5File/HDF5File_.md)

```fortran
    CALL obj%IMPORT(hdf5=hdf5file, group='')
```

Now that we have imported data from hdf5file, do not forget to run `set` method.

```fortran
    CALL obj%Set()
```

We can see the contents using the `Display` method.

```fortran
    CALL obj%Display('')
```

Cleanup

```fortran
    CALL hdf5file%Deallocate()
    CALL obj%Deallocate()
END PROGRAM main
```
