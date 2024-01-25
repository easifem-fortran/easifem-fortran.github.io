# Import

Import data from HDF5 file.

<span class="badge badge--secondary"> @IOMethods </span>

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE Import(obj, hdf5, group, mesh)
    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(*), INTENT(IN) :: group
    CLASS(Mesh_), TARGET, OPTIONAL, INTENT(IN) :: mesh
  END SUBROUTINE Import
END INTERFACE
```
