# WriteData

This routine writes the simulation data in the hdf5 file [HDF5File_](../HDF5File/HDF5File_.md).

```fortran
INTERFACE
  MODULE SUBROUTINE STDBE_WriteData_hdf5(obj, hdf5, group)
    CLASS(AbstractSTDBE_), INTENT(INOUT) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(LEN=*), INTENT(IN) :: group
  END SUBROUTINE STDBE_WriteData_hdf5
END INTERFACE
```

- [ ] TODO Add `WriteData` for [VTKFile_](../VTKFile/VTKFile_.md) in [AbstractSTDBE_](AbstractSTDBE_.md).
