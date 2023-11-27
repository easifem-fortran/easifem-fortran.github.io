# Import

Import the field from an external file.

## Interface

```fortran
ABSTRACT INTERFACE
SUBROUTINE Import( obj, hdf5, group, dom )
  IMPORT :: AbstractField_, I4B, HDF5File_, Domain_
  CLASS( AbstractField_ ), INTENT( INOUT ) :: obj
  TYPE( HDF5File_ ), INTENT( INOUT ) :: hdf5
  CHARACTER( LEN = * ), INTENT( IN ) :: group
  TYPE( Domzain_ ), TARGET, INTENT( IN ) :: dom
END SUBROUTINE Import
END INTERFACE
```


