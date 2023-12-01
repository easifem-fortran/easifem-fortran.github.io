# Export

Export the content of `SolidMaterial_` in [HDF5File](/docs-api/HDF5File).

<span class="badge badge--secondary"> @IOMethods </span>

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE Export(obj, hdf5, group)
    CLASS(SolidMaterial_), INTENT(IN) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(*), INTENT(IN) :: group
  END SUBROUTINE Export
END INTERFACE
```
