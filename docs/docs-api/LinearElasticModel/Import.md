# Import

Import the content of `LinearElasticModel_` form a HDF5File.

<span class="badge badge--secondary"> @IOMethods </span>

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Import(obj, hdf5, group)
    CLASS(LinearElasticModel_), INTENT(INOUT) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(*), INTENT(IN) :: group
  END SUBROUTINE Import
END INTERFACE
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE9 from "./examples/_Import_test_1.md";

<EXAMPLE9 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>
