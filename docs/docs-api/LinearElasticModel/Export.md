# Export

Export the content of `LinearElasticModel_` into a HDF5File.

<span class="badge badge--secondary"> @IOMethods </span>

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Export(obj, hdf5, group)
    CLASS(LinearElasticModel_), INTENT(IN) :: obj
    TYPE(HDF5File_), INTENT(INOUT) :: hdf5
    CHARACTER(*), INTENT(IN) :: group
  END SUBROUTINE Export
END INTERFACE
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE9 from "./examples/_Export_test_1.md";

<EXAMPLE9 />

</TabItem>

<TabItem value="ex2" label="example 2">

import EXAMPLE34 from "./examples/_Export_test_2.md";

<EXAMPLE34 />

</TabItem>

<TabItem value="ex3" label="example 3">

import EXAMPLE42 from "./examples/_Export_test_3.md";

<EXAMPLE42 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
