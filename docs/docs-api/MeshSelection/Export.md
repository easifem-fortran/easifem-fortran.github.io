# Export

Export an instance of MeshSelection in HDF5File format.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE Export(obj, hdf5, group)
    CLASS(MeshSelection_), INTENT(IN) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(*), INTENT(IN) :: group
  END SUBROUTINE Export
END INTERFACE
```
