# Assemble

This procedure pointer assembles the problem

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Assemble(obj)
    CLASS(SteadyStokes111_), INTENT(INOUT) :: obj
  END SUBROUTINE Assemble
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE17 from "./_Assemble_test_1.md";

<EXAMPLE17 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
