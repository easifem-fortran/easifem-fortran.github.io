# Export

Export the linear solver.

## Interface

```fortran
INTERFACE
  SUBROUTINE Export(obj, hdf5, group)
    CLASS(LinSolverLis_), INTENT(IN) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(*), INTENT(IN) :: group
  END SUBROUTINE Export
END INTERFACE
```
