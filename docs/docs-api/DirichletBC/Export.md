# Export

Export [DirichletBC_](DirichletBC_.md) to hdf5 file.

## Interface

```fortran
INTERFACE
  SUBROUTINE Export(obj, hdf5, group)
    CLASS(DirichletBC_), INTENT(IN) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(*), INTENT(IN) :: group
  END SUBROUTINE Export
END INTERFACE
```
