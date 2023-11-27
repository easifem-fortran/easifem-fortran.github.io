# Import

Initiate an instance of vector field by import.

## Interface

```fortran
 INTERFACE
  MODULE SUBROUTINE vField_Import(obj, hdf5, group, dom, domains)
    CLASS(VectorField_), INTENT(INOUT) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(*), INTENT(IN) :: group
    TYPE(Domain_), TARGET, OPTIONAL, INTENT(IN) :: dom
    TYPE(DomainPointer_), TARGET, OPTIONAL, INTENT(IN) :: domains(:)
  END SUBROUTINE vField_Import
END INTERFACE
```

## Template

| Variable     | Data type |                          Value                          |                                                      Comment |
| ------------ | :-------: | :-----------------------------------------------------: | -----------------------------------------------------------: |
| `restart`*   |   Char    |                       `T` or `F`                        | aThe default value is False. If it is true then it represents that we are restarting the simulation, in this case more information are necessary. |
| `name`       |  String   |                                                         |                                     Name of the scalar field |
| `fieldType`  |  String   | `NORMAL`, `CONSTANT`, `CONSTANT_SPACE`, `CONSTANT_TIME` |                                                              |
| `spaceCompo` |  Integer  |                                                         | It represents the number of the  number of spatial components in the field. For example, in 2D problem, velocity variable has two spatial components. |
