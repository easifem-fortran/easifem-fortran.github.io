# Export

Export the abstract field to an external file.

Inherited from [AbstractField_](../AbstractField/Export.md)

## Interface

```fortran
ABSTRACT INTERFACE
SUBROUTINE Export( obj, hdf5, group )
  IMPORT :: AbstractField_, HDF5File_
  CLASS( AbstractField_ ), INTENT( INOUT ) :: obj
  TYPE( HDF5File_ ), INTENT( INOUT ) :: hdf5
  CHARACTER( LEN = * ), INTENT( IN ) :: group
END SUBROUTINE Export
END INTERFACE
```
