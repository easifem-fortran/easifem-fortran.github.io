# Import

Import the field from an external file.

Inherited from [AbstractField_](../AbstractField/Import.md)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
SUBROUTINE Import( obj, hdf5, group, dom )
  CLASS( ScalarField_ ), INTENT( INOUT ) :: obj
  TYPE( HDF5File_ ), INTENT( INOUT ) :: hdf5
  CHARACTER( LEN = * ), INTENT( IN ) :: group
  TYPE( Domain_ ), TARGET, INTENT( IN ) :: dom
END SUBROUTINE Import
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE9 from "./_ScalarField_test_2.md";

<EXAMPLE9 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

 The Schema of [HDF5File_](../HDF5File/HDF5File_.md), which is used for import and export calls, is given below.

| Variable    | Data type |                          Value                          |                                                      Comment |
| ----------- | :-------: | :-----------------------------------------------------: | -----------------------------------------------------------: |
| `name`      |  String   |                                                         |                                     Name of the scalar field |
| `fieldType` |  String   | `NORMAL`, `CONSTANT` |                                                              |
| `engine`   | String | `NATIVE_SERIAL` | This is constant variable, it tells constructor about the engine name |
| `dof` | [DOF_](../DOF/DOF_.md) | Group(/) | See [DOF_](../DOF/DOF_.md) class for more details |
| `realVec` | [RealVector_](../RealVector/RealVector_.md) | Group(/) | See [RealVector_](../RealVector/RealVector_.md) class for more details |
