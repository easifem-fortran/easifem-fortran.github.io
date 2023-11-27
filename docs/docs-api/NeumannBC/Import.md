# Import

Import [NeumannBC_](NeumannBC_.md) by reading a [HDF5File_](../HDF5File/HDF5File_.md)

## Interface

```fortran
INTERFACE
  SUBROUTINE Import(obj, hdf5, group, dom)
    CLASS(NeumannBC_), INTENT(INOUT) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(*), INTENT(IN) :: group
    CLASS(Domain_), TARGET, INTENT(IN) :: dom
  END SUBROUTINE Import
END INTERFACE
```

**Template** is given below.

| Variable         | Data type |                  Value                   | Comment |
| ---------------- | :-------: | :--------------------------------------: | ------: |
| `name`           |           |                                          |         |
| `idof`           |           |                                          |         |
| `nodalValueType` |  String   | `CONSTANT`, `SPACE`, `TIME`, `SPACETIME` |         |
| `UseFunction`    |   BOOL    |                                          |         |
| `Boundary`       |   Group   |                    \                     |         |
|                  |           |                                          |         |