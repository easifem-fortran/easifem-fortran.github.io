# Import

Import the field from an external file.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
SUBROUTINE Import( obj, hdf5, group, dom )
  CLASS( BlockMatrixField_ ), INTENT( INOUT ) :: obj
  TYPE( HDF5File_ ), INTENT( INOUT ) :: hdf5
  CHARACTER( LEN = * ), INTENT( IN ) :: group
  TYPE( Domain_ ), TARGET, INTENT( IN ) :: dom
END SUBROUTINE Import
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ example 1">

import EXAMPLE7 from "./BlockMatrixField_test_6.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="example2" label="️܀ example 2">

import EXAMPLE8 from "./BlockMatrixField_test_8.md";

<EXAMPLE8 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
