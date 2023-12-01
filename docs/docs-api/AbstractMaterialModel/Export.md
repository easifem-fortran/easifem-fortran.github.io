# Export

Export the data to HDF5File.

<span class="badge badge--secondary"> @IOMethods </span>

## Interface

```fortran
ABSTRACT INTERFACE
  SUBROUTINE Export(obj, hdf5, group)
    IMPORT :: AbstractMaterialModel_, HDF5File_
    CLASS(AbstractMaterialModel_), INTENT(IN) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(*), INTENT(IN) :: group
  END SUBROUTINE Export
END INTERFACE
```
