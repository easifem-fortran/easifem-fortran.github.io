# Set

Set the kernel.

- Once we are done setting up the finite element model for the kernel, we should call this subroutine.
- Only after calling this routine we should proceed to the main computation
- After initiating the kernel, we have all the information to construct the state of the kernel
- This routine checks all the options.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Set(obj)
    CLASS(SteadyStokes221_), INTENT(INOUT) :: obj
  END SUBROUTINE Set
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE12 from "./_Set_test_1.md";

<EXAMPLE12 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
