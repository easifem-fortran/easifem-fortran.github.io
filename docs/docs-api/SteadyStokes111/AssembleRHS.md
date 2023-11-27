# AssembleRHS

This procedure pointer assembles the right-hand-side vector.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE AssembleRHS(obj)
    CLASS(SteadyStokes111_), INTENT(INOUT) :: obj
  END SUBROUTINE AssembleRHS
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE17 from "./_AssembleRHS_test_1.md";

<EXAMPLE17 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
