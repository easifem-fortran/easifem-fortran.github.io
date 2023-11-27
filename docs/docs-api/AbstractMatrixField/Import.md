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

## Template

Following is the template

| Variable     | Data type | Value    | Comment                                                      |
| ------------ | --------- | -------- | ------------------------------------------------------------ |
| `name`       | String    |          |                                                              |
| `fieldType`  | String    |          |                                                              |
| `matrixProp` | String    |          |                                                              |
| `spaceCompo` |           |          |                                                              |
| `timeCompo`* |           |          |                                                              |
| `restart`*   | CHAR      | `T`, `F` |  |
|              |           |          |                                                              |

`restart` The default value is False. If it is true then it represents that we are restarting the simulation, in this case more information are necessary.