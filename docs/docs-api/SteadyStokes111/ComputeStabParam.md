# ComputeStabParam

Compute stabilization parameter.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
ABSTRACT INTERFACE
  SUBROUTINE SSF_ComputeStabParam(obj)
    IMPORT :: SteadyStokes111_
    CLASS(SteadyStokes111_), INTENT(INOUT) :: obj
  END SUBROUTINE SSF_ComputeStabParam
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE18 from "./_ComputeStabParam_test_1.md";

<EXAMPLE18 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
