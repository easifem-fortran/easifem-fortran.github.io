# Export

Export the field to an external file.

## Interface

```fortran
INTERFACE
SUBROUTINE Export( obj, hdf5, group )
  CLASS( STVectorFieldLis_ ), INTENT( INOUT ) :: obj
  TYPE( HDF5File_ ), INTENT( INOUT ) :: hdf5
  CHARACTER( LEN = * ), INTENT( IN ) :: group
END SUBROUTINE Export
END INTERFACE
```
