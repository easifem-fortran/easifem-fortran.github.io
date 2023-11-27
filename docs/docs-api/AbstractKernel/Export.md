# Export

This routine exports the kernel.

```fortran
INTERFACE
  MODULE SUBROUTINE Export(obj, hdf5, group)
    CLASS(AbstractKernel_), INTENT(INOUT) :: obj
    !! Kernel object
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    !! Parameter list
    CHARACTER(LEN=*), INTENT(IN) :: group
  END SUBROUTINE Export
END INTERFACE
```

```fortran
INTERFACE KernelExport
  MODULE PROCEDURE Export
END INTERFACE KernelExport
```
