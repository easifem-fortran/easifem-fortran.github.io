# Export

Export the abstract field to an external file.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
SUBROUTINE Export( obj, hdf5, group )
  CLASS( BlockMatrixField_ ), INTENT( INOUT ) :: obj
  TYPE( HDF5File_ ), INTENT( INOUT ) :: hdf5
  CHARACTER( LEN = * ), INTENT( IN ) :: group
END SUBROUTINE Export
END INTERFACE
```

</TabItem>

<TabItem value="example1" label="️܀ example 1">

import EXAMPLE10 from "./BlockMatrixField_test_5.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="example2" label="️܀ example 2">

import EXAMPLE36 from "./BlockMatrixField_test_7.md";

<EXAMPLE36 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
