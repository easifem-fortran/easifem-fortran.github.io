# Import

Import the linear solver from external file.

## Interface

```fortran
INTERFACE
  SUBROUTINE Import(obj, hdf5, group)
    IMPORT :: AbstractLinSolver_, HDF5File_
    CLASS(AbstractLinSolver_), INTENT(INOUT) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(*), INTENT(IN) :: group
  END SUBROUTINE Import
END INTERFACE
```
