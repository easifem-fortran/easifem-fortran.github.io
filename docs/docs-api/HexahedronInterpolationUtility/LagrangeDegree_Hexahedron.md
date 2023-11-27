# LagrangeDegree

This subroutine returns the monomial degrees (basis) for lagrange polynomials.

Lagrange polynomial of order $p,q,r$ is given by

$$
l(x,y,z) = \text{span} \left\{  x^{a} y^{b} z^{c} \vert a=0,1,\cdots, p; b=0, 1, \cdots, q; c=0,1,\cdots, r \right\}
$$

Calling example:

```fortran
degree = LagrangeDegree_Hexahedron(order)
degree = LagrangeDegree_Hexahedron(p, q, r)
```

## Interface 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE LagrangeDegree_Hexahedron
  MODULE PURE FUNCTION LagrangeDegree_Hexahedron1(order) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    INTEGER(I4B), ALLOCATABLE :: ans(:, :)
  END FUNCTION LagrangeDegree_Hexahedron1
END INTERFACE LagrangeDegree_Hexahedron
```

</TabItem>

<TabItem value="example" label="️܀ Example 1">

import EXAMPLE23 from "./_LagrangeDegree_Hexahedron_test_1.md";

<EXAMPLE23 />

</TabItem>

<TabItem value="example2" label="܀ Example 2">

import EXAMPLE47 from "./_LagrangeDegree_Hexahedron_test_2.md";

<EXAMPLE47 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE LagrangeDegree_Hexahedron
  MODULE PURE FUNCTION LagrangeDegree_Hexahedron2(p, q, r) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: p
    INTEGER(I4B), INTENT(IN) :: q
    INTEGER(I4B), INTENT(IN) :: r
    INTEGER(I4B), ALLOCATABLE :: ans(:, :)
  END FUNCTION LagrangeDegree_Hexahedron2
END INTERFACE LagrangeDegree_Hexahedron
```

:::note `p, q, r`

- `p` is order in x direction
- `q` is order in y direction
- `r` is order in z direction
:::

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE63 from "./_LagrangeDegree_Hexahedron_test_3.md";

<EXAMPLE63 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
