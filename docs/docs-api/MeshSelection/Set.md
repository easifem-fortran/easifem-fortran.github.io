# Set

This method should be called when we are done adding entries into `MeshSelection_`.

After this method we should not call `add` method.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Set(obj)
    CLASS(MeshSelection_), INTENT(INOUT) :: obj
  END SUBROUTINE Set
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE12 from "./_MeshSelection_test_1.md";

<EXAMPLE12 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
