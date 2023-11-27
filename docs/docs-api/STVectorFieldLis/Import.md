# Import

Initiate an instance of space-time vector field by import.

## Interface

```fortran
 INTERFACE
  MODULE SUBROUTINE Import(obj, hdf5, group, dom, domains)
    CLASS(STVectorFieldLis_), INTENT(INOUT) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(*), INTENT(IN) :: group
    TYPE(Domain_), TARGET, OPTIONAL, INTENT(IN) :: dom
    TYPE(DomainPointer_), TARGET, OPTIONAL, INTENT(IN) :: domains(:)
  END SUBROUTINE Import
END INTERFACE
```

## Template


| Variable     | Data type |                          Value                          |                                                      Comment |
| ------------ | :-------: | :-----------------------------------------------------: | -----------------------------------------------------------: |
| `restart`*   |   Char    |                       `T` or `F`                        | The default value is False. If it is true then it represents that we are restarting the simulation, in this case more information are necessary. |
| `name`       |  String   |                                                         |                                     Name of the scalar field |
| `fieldType`  |  String   | `NORMAL`, `CONSTANT`, `CONSTANT_SPACE`, `CONSTANT_TIME` |                                                              |
| `timeCompo`  |  Integer  |                                                         |                                    Number of time components |
| `spaceCompo` |  Integer  |                                                         |                                 Number of spatial components |


