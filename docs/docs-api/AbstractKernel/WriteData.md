# WriteData

This routine writes the data in the [HDF5File_](../HDF5File/HDF5File_.md)

```fortran
INTERFACE
  MODULE SUBROUTINE WriteData_hdf5(obj, hdf5, group)
    CLASS(AbstractKernel_), INTENT(INOUT) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(len=*), INTENT(IN) :: group
  END SUBROUTINE WriteData_hdf5
END INTERFACE
```

This routine writes the data in the [VTKFile_](../VTKFile/VTKFile_.md)

```fortran
INTERFACE
  MODULE SUBROUTINE WriteData_vtk(obj, vtk, group)
    CLASS(AbstractKernel_), INTENT(INOUT) :: obj
    TYPE(VTKFile_), INTENT(INOUT) :: vtk
    CHARACTER(len=*), INTENT(IN) :: group
  END SUBROUTINE WriteData_vtk
END INTERFACE
```
