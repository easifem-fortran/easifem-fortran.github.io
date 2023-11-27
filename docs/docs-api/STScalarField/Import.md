# Import

Import the field from an external file.

## Interface

```fortran
INTERFACE
SUBROUTINE Import( obj, hdf5, group, dom )
  CLASS( STScalarField_ ), INTENT( INOUT ) :: obj
  TYPE( HDF5File_ ), INTENT( INOUT ) :: hdf5
  CHARACTER( LEN = * ), INTENT( IN ) :: group
  TYPE( Domzain_ ), TARGET, INTENT( IN ) :: dom
END SUBROUTINE Import
END INTERFACE
```

## Template

| Variable    | Data type |                          Value                          |                                                      Comment |
| ----------- | :-------: | :-----------------------------------------------------: | -----------------------------------------------------------: |
| `restart`*  |   Char    |                       `T` or `F`                        | The default value is False. If it is true then it represents that we are restarting the simulation, in this case more information are necessary. |
| `name`      |  String   |                                                         |                                     Name of the scalar field |
| `fieldType` |  String   | `NORMAL`, `CONSTANT`, `CONSTANT_SPACE`, `CONSTANT_TIME` |                                                              |
| `timeCompo` |  Integer  |                                                         |                                    Number of time components |
|             |           |                                                         |                                                              |
