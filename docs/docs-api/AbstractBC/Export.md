# Export

Export [AbstractBC_](AbstractBC_.md) to hdf5 file.

## Interface

```fortran
ABSTRACT INTERFACE
  SUBROUTINE Export(obj, hdf5, group)
    IMPORT :: AbstractBC_, HDF5File_
    CLASS(AbstractBC_), INTENT(IN) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(*), INTENT(IN) :: group
  END SUBROUTINE Export
END INTERFACE
```
