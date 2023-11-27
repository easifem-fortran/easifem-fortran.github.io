# Import

This routine imports the properties of kernel and initiates it.

This rotuine imports the properties of the kernel, and then builds it.
All the properties are mentioned in the HDF5 file
Domain `dom` is used as a target for kernel's domain pointer.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE Import(obj, hdf5, group, dom)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(*), INTENT(IN) :: group
    CLASS(Domain_), TARGET, INTENT(INOUT) :: dom
  END SUBROUTINE Import
END INTERFACE
```

## Example
