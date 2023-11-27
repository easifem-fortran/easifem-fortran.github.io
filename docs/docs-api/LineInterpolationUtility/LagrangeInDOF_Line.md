---
sidebar_label: LagrangeInDOF
---

# LagrangeInDOF_Line

Returns the total number of degree of freedom for a lagrange polynomial on an edge of a Line.

These dof are strictly inside the line.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LagrangeInDOF_Line(order) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    INTEGER(I4B) :: ans
  END FUNCTION LagrangeInDOF_Line
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE13 from "./_LagrangeInDOF_Line_test_1.md";

<EXAMPLE13 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
