---
sidebar_label: LagrangeDOF
---

# LagrangeDOF_Line

Returns the total number of degree of freedom for a lagrange polynomial on Line.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LagrangeDOF_Line(order) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    INTEGER(I4B) :: ans
  END FUNCTION LagrangeDOF_Line
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE21 from "./_LagrangeDOF_Line_test_1.md";

<EXAMPLE21 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
