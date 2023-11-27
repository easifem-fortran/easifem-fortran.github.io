# WriteData

This routine writes the data in the hdf5 file.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE WriteData(obj, hdf5, group)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(*), INTENT(IN) :: group
  END SUBROUTINE WriteData
END INTERFACE
```

```fortran
INTERFACE
  MODULE SUBROUTINE WriteData(obj, vtk, group)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    TYPE(VTKFile_), INTENT(INOUT) :: vtk
    CHARACTER(*), INTENT(IN) :: group
  END SUBROUTINE WriteData
END INTERFACE
```

## Example
