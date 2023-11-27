# Domain_Pointer

This function returns a pointer to newly created domain.

```fortran
INTERFACE
  MODULE FUNCTION Domain_Pointer(hdf5, group) RESULT(Ans)
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(*), INTENT(IN) :: group
    CLASS(Domain_), POINTER :: ans
  END FUNCTION Domain_Pointer
END INTERFACE
```
