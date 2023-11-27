# Import

Import the field from an external file.

## Interface

```fortran
INTERFACE
SUBROUTINE Import( obj, hdf5, group, dom )
  CLASS( AbstractMatrixField_ ), INTENT( INOUT ) :: obj
  TYPE( HDF5File_ ), INTENT( INOUT ) :: hdf5
  CHARACTER( LEN = * ), INTENT( IN ) :: group
  TYPE( Domain_ ), TARGET, INTENT( IN ) :: dom
END SUBROUTINE Import
END INTERFACE
```
