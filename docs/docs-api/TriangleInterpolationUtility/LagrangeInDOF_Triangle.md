# LagrangeInDOF

Returns the total number of degree of freedom for a lagrange polynomial in cell/face of triangle.

:::note The dof are strictly inside the triangle.
:::

The total number of DOF inside the triangle is given by:

$$
\frac{1}{2}(n-1)(n-2)
$$

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LagrangeInDOF_Triangle(order) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    INTEGER(I4B) :: ans
  END FUNCTION LagrangeInDOF_Triangle
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE35 from "./_LagrangeInDOF_Triangle_test_1.md";

<EXAMPLE35 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
