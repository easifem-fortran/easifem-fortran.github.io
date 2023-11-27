# LagrangeDOF

Returns the total number of degree of freedom for a lagrange polynomial.

The total DOF is given by:

$$
(p+1)(q+1)
$$

Calling example:

```fortran
ans = LagrangeDOF_Quadrangle(order)
ans = LagrangeDOF_Quadrangle(p, q, r)
```

## Interface 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LagrangeDOF_Quadrangle(order) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    INTEGER(I4B) :: ans
  END FUNCTION LagrangeDOF_Quadrangle
END INTERFACE
```

:::info `order`
order denotes the order of quadrangle element.
:::

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE26 from "./_LagrangeDOF_Quadrangle_test_1.md";

<EXAMPLE26 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LagrangeDOF_Quadrangle(p,q) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: p, q
    INTEGER(I4B) :: ans
  END FUNCTION LagrangeDOF_Quadrangle
END INTERFACE
```

:::info `p, q`
p and q denote the order of quadrangle element in x and y direction, respectively.
:::

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE27 from "./_LagrangeDOF_Quadrangle_test_2.md";

<EXAMPLE27 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
