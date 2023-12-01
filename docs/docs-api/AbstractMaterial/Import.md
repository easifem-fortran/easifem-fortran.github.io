# Import

Initiate an instance of `AbstractMaterial_` by using `HDF5File`.

<span class="badge badge--secondary"> @IOMethods </span>

## Interface

```fortran
INTERFACE AbstractMaterialImport
  MODULE SUBROUTINE Import(obj, hdf5, group)
    CLASS(AbstractMaterial_), INTENT(INOUT) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(*), INTENT(IN) :: group
  END SUBROUTINE Import
END INTERFACE AbstractMaterialImport
```
