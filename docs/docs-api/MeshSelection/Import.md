# Import

Import an instance of `MeshSelection_` from hdf5 file.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE Import(obj, hdf5, group, dom)
    CLASS(MeshSelection_), INTENT(INOUT) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(*), INTENT(IN) :: group
    TYPE(Domain_), OPTIONAL, INTENT(IN) :: dom
  END SUBROUTINE Import
END INTERFACE
```

The template of HDF5File is given below.

| Variable              | Data type |     Value     |                                                      Comment |
| --------------------- | :-------: | :-----------: | -----------------------------------------------------------: |
| `isSelectionByMeshID` |   Bool    | True or False | Optional. Set it to true, if you want to select by supply `meshID` |
| `isSelectionByElemID` |   Bool    | True or False | Optional. Set it to true, if you want to select by supply `elemID` |
| `isSelectionByBox`    |   Bool    | True or False | Optional. Set it to true, if you want to select by supply bounding box |
| `PointMeshID`         |           |               |                                                              |
| `CurveMeshID`         |           |               |                                                              |
| `SurfaceMeshID`       |           |               |                                                              |
| `PointElemNum`        |           |               |                                                              |
| `CurveElemNum`        |           |               |                                                              |
| `SurfaceElemNum`      |           |               |                                                              |
| `VolumeElemNum`       |           |               |                                                              |
