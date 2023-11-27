# AssembleTanmat

This procedure pointer assembles the global tangent matrix.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE AssembleTanmat(obj)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
  END SUBROUTINE AssembleTanmat
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE7 from "./_AssembleTanMat_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
