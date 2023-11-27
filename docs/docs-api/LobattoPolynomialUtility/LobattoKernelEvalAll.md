# LobattoKernelEvalAll

Evaluate all Lobatto kernel.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LobattoKernelEvalAll(n, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! n
    REAL(DFP), INTENT(IN) :: x(:)
    REAL(DFP) :: ans(1:SIZE(x), 0:n)
    !! Evaluate Lobatto polynomial of order = 0 to n (total n+1)
    !! at point x
  END FUNCTION LobattoKernelEvalAll
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE10 from "./_LobattoKernelEvalAll_test_1.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
