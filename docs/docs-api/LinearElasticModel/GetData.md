# GetData

Return the data.

<span class="badge badge--secondary"> @GetMethods </span>

## Interface

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE GetData(obj, DATA)
    CLASS(LinearElasticModel_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(INOUT) :: DATA(:)
  END SUBROUTINE GetData
END INTERFACE
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE9 from "./examples/_GetData_test_1.md";

<EXAMPLE9 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>
