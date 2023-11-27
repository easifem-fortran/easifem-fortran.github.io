# Import

This routine initiates the kernel from input file

- `hdf5` contains the parameters for kernel in hdf5file format, the main content depends upon the type of kernel
- `dom` is the domain of computation. If `dom` is present then we point to this domain, otherwise, we allocate memory for the domain, and use the mesh file information given in the hdf5 file to generate that domain.

```fortran
INTERFACE
  MODULE SUBROUTINE Import(obj, hdf5, group, dom)
    CLASS(AbstractKernel_), INTENT(INOUT) :: obj
    !! Kernel object
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    !! Parameter list
    CHARACTER(LEN=*), INTENT(IN) :: group
    !! group or directory
    CLASS(Domain_), TARGET, INTENT(INOUT) :: dom
    !! Domain of computation
  END SUBROUTINE Import
END INTERFACE
```

```fortran
INTERFACE KernelImport
  MODULE PROCEDURE Import
END INTERFACE KernelImport
```
