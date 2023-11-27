# Export

This routine exports the kernel in the form of an [HDF5File_](../HDF5File/HDF5File_.md).

```fortran
INTERFACE
  MODULE SUBROUTINE STDBE_Export(obj, hdf5, group)
    CLASS(AbstractSTDBE_), INTENT(INOUT) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(LEN=*), INTENT(IN) :: group
  END SUBROUTINE STDBE_Export
END INTERFACE
```
