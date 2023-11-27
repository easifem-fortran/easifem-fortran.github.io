This example shows how to USE MeshSelection WITH `meshSelectionByID` option, and export it to [HDF5File_](../HDF5File/HDF5File_.md) format.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( MeshSelection_ ) :: obj
  TYPE( HDF5File_ ) :: hdf5file
```

Initiates an instance of [MeshSelection_](MeshSelection_.md) WITH selection by mesh ID.

```fortran
  CALL obj%Initiate( isSelectionByMeshID=.TRUE. )
```

Let us now add NEW entries.

```fortran
  CALL obj%Add( dim=0, meshID=[1,2,3,4,5,6])
  CALL obj%Add( dim=1, meshID=[2,5,6,7])
  CALL obj%Add( dim=2, meshID=[1,3,5,6,8])
  CALL obj%Add( dim=3, meshID=[1,8])
```

Now that we are done setting the DATA in the instance, let us CALL `set` method.

```fortran
  CALL obj%Set()
```

Now we will OPEN a [HDF5File_](../HDF5File/HDF5File_.md) so that we can WRITE DATA to it.

```fortran
  CALL hdf5file%Initiate(filename="./TemplateMeshSelection.hdf5", &
    & mode="NEW")
  CALL hdf5file%Open()
```

After opening the [HDF5File_](../HDF5File/HDF5File_.md) we export the instance of [MeshSelection_](MeshSelection_.md) to it.

```fortran
  CALL obj%Export(hdf5=hdf5file, group='')
```

Cleanup

```fortran
  CALL hdf5file%Deallocate()
  CALL obj%Deallocate()
END PROGRAM main
```
