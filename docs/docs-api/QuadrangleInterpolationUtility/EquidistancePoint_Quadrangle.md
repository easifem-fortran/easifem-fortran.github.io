# EquidistancePoint

This function returns the nodal coordinates of higher order triangle element

- the layout is always "VEFC"
- coordinates are distributed uniformly
- these coordinates can be used to construct lagrange polynomials
- the returned coordinates are in $x_{iJ}$ format.
- the node numbering is according to Gmsh convention, VEFC.

## Interface 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE RECURSIVE PURE FUNCTION EquidistancePoint_Quadrangle(order, xij) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! Nodal coordinates of quadrangle
    !! number of rows = 2
    !! number of cols = 4
    REAL(DFP), ALLOCATABLE :: ans(:, :)
    !! returned coordinates of interpolation points in $x_{iJ}$ format.
    !! Number of rows in ans is equal to the 2
    !! Number of columns in ans is equal to the number of points
  END FUNCTION EquidistancePoint_Quadrangle
END INTERFACE
```

:::info `order`
Order of Lagrange polynomials in x and y directions.
:::

:::info `xij`
Nodal coordinates of quadrangle, the number of rows in xij is 2, and the number of columns in xij is 4.
:::

:::info `ans`
Returns coordinates of interpolation points in $x_{iJ}$ format. Number of rows in the ans is equal to the 2. Number of columns in the ans is equal to the number of points
:::

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE38 from "./_EquidistancePoint_Quadrangle_test_1.md";

<EXAMPLE38 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE EquidistancePoint_Quadrangle
  MODULE RECURSIVE PURE FUNCTION EquidistancePoint_Quadrangle2(p, q, &
    & xij) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: p
    !! order in x direction
    INTEGER(I4B), INTENT(IN) :: q
    !! order in y direction
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! Nodal coordinates of quadrangle
    !! number of rows = 2 or 3
    !! number of cols = 4
    REAL(DFP), ALLOCATABLE :: ans(:, :)
    !! returned coordinates of interpolation points in $x_{iJ}$ format.
    !! Number of rows in ans is equal to the 2
    !! Number of columns in ans is equal to the number of points
  END FUNCTION EquidistancePoint_Quadrangle2
END INTERFACE EquidistancePoint_Quadrangle
```

:::info `p, q`
p and q are the order of Lagrange polynomials in x and y directions, respectively.
:::

:::info `xij`
Nodal coordinates of quadrangle, the number of rows in xij is 2, and the number of columns in xij is 4.
:::

:::info `ans`
Returns coordinates of interpolation points in $x_{iJ}$ format. Number of rows in the ans is equal to the 2. Number of columns in the ans is equal to the number of points
:::

</TabItem>

<TabItem value="example1" label="️܀ Example 1">

import EXAMPLE65 from "./_EquidistancePoint_Quadrangle_test_2.md";

<EXAMPLE65 />

</TabItem>

<TabItem value="example2" label="܀ Example 2">

import EXAMPLE85 from "./_EquidistancePoint_Quadrangle_test_3.md";

<EXAMPLE85 />

</TabItem>

<TabItem value="example3" label="܀ Example 3">

import EXAMPLE120 from "./_EquidistancePoint_Quadrangle_test_4.md";

<EXAMPLE120 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
