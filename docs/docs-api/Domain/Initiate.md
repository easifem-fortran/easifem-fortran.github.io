# Initiate

This method initiates an instance of domain by reading the mesh-file in [HDF5File_](../HDF5File/HDF5File_.md) format.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE Domain_Initiate(obj, hdf5, group)
    CLASS(Domain_), INTENT(INOUT) :: obj
    !! DomainData object
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    !! HDF5 file
    CHARACTER(*), INTENT(IN) :: group
    !! Group name (directory name)
  END SUBROUTINE Domain_Initiate
END INTERFACE
```
