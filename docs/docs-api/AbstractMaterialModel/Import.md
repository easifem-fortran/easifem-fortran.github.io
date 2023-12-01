# Import

Import an instance of `AbstractMaterialModel_` from the HDF5 file.

<span class="badge badge--secondary"> @IOMethods </span>

## Interface

```fortran
ABSTRACT INTERFACE
  SUBROUTINE Import(obj, hdf5, group)
    IMPORT :: AbstractMaterialModel_, HDF5File_
    CLASS(AbstractMaterialModel_), INTENT(INOUT) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(*), INTENT(IN) :: group
  END SUBROUTINE Import
END INTERFACE
```
