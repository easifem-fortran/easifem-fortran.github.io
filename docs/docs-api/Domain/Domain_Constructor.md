# Domain constructor

This function returns an instance of Domain.

```fortran
INTERFACE
  MODULE FUNCTION Domain(hdf5, group) RESULT(Ans)
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(*), INTENT(IN) :: group
    TYPE(Domain_) :: ans
  END FUNCTION Domain
END INTERFACE
```
