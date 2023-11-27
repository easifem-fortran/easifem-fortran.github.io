# Import

This rotuine imports the properties of the kernel, and then builds it. All the properties are mentioned in the hdf5 file [HDF5File_](../HDF5File/HDF5File_.md). Domain `dom` is used as a target for kernel's domain pointer [Domain_](../Domain/Domain_.md).

```fortran
INTERFACE
  MODULE SUBROUTINE STDBE_Import(obj, hdf5, group, dom)
    CLASS(AbstractSTDBE_), INTENT(INOUT) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(LEN=*), INTENT(IN) :: group
    CLASS(Domain_), TARGET, INTENT(INOUT) :: dom
  END SUBROUTINE STDBE_Import
END INTERFACE
```
