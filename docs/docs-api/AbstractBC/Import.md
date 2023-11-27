# Import

Import [AbstractBC_](AbstractBC_.md) by reading a [HDF5File_](../HDF5File/HDF5File_.md)

## Interface

```fortran
ABSTRACT INTERFACE
  SUBROUTINE Import(obj, hdf5, group, dom)
    IMPORT :: AbstractBC_, HDF5File_, Domain_
    CLASS(AbstractBC_), INTENT(INOUT) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(*), INTENT(IN) :: group
    CLASS(Domain_), TARGET, INTENT(IN) :: dom
  END SUBROUTINE Import
END INTERFACE
```
