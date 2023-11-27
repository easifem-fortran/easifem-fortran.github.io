# LagrangeDegree

Returns the polynomial space for constructing the Lagrange polynomials.

A Lagrange polynomial is given by

$$
p(x,y) = \sum_{a=0}\sum_{b=0} x^{a} y^{b}
$$

Here span of $x^{a}y^{b}$ is called the LagrangeDegree.

- as are given by first column of ans.
- bs are given by second column of ans.

For example for order = 3, we have the following degrees:

$$
x^{0}y^{0}, x, x^2, x^3, y, xy, x^2 y, y^2, x y^2, y^3
$$

which is representd by:

| a  |  b |
|----|----|
| 0  | 0  |
| 1  | 0  |
| 2  | 0  |
| 3  | 0  |
| 0  | 1  |
| 1  | 1  |
| 2  | 1  |
| 0  | 2  |
| 1  | 2  |
| 0  | 3  |

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LagrangeDegree_Triangle(order) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    INTEGER(I4B), ALLOCATABLE :: ans(:, :)
  END FUNCTION LagrangeDegree_Triangle
END INTERFACE
```

:::note `order`
Order of Lagrange polynomial
:::

:::note `ans`

- The first col of `ans` denotes the exponent of `x`
- The second col of `ans` denotes the exponent of `y`
:::

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE26 from "./_LagrangeDegree_Triangle_test_1.md";

<EXAMPLE26 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
