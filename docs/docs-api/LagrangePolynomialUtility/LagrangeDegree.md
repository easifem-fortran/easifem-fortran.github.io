# LagrangeDegree

This routine returns the degrees of monomials for lagrange polynomial.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LagrangeDegree(order, elemType) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    INTEGER(I4B), INTENT(IN) :: elemType
    INTEGER(I4B), ALLOCATABLE :: ans(:, :)
  END FUNCTION LagrangeDegree
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ Example 1">

import EXAMPLE7 from "./_LagrangeDegree_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="example2" label="Example 2">

import EXAMPLE26 from "./_LagrangeDegree_test_2.md";

<EXAMPLE26 />

</TabItem>

<TabItem value="example3" label="Example 3">

import EXAMPLE34 from "./_LagrangeDegree_test_3.md";

<EXAMPLE34 />

</TabItem>

<TabItem value="example4" label="Example 4">

import EXAMPLE52 from "./_LagrangeDegree_test_4.md";

<EXAMPLE52 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
