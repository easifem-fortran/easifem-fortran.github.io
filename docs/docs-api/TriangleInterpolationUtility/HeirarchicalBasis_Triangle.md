# HeirarchicalBasis

Evaluate all modal basis (heirarchical polynomial) on Triangle.

# Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION HeirarchicalBasis_Triangle(order, pe1, pe2, pe3,&
    & xij, refTriangle) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order in the cell of triangle, it should be greater than 2
    INTEGER(I4B), INTENT(IN) :: pe1
    !! order of interpolation on edge e1
    INTEGER(I4B), INTENT(IN) :: pe2
    !! order of interpolation on edge e2
    INTEGER(I4B), INTENT(IN) :: pe3
    !! order of interpolation on edge e3
    REAL(DFP), INTENT(IN) :: xij(:, :)
    !! points of evaluation in xij format
    CHARACTER(*), INTENT(IN) :: refTriangle
    !! reference triangle
    REAL(DFP) :: ans( &
      & SIZE(xij, 2), &
      & pe1 + pe2 + pe3 + INT((order - 1) * (order - 2) / 2))
    !!
  END FUNCTION HeirarchicalBasis_Triangle
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE41 from "./_HeirarchicalBasis_Triangle_test_1.md";

<EXAMPLE41 />

</TabItem>

<TabItem value="example2" label="Example 2">

import EXAMPLE49 from "./_HeirarchicalBasis_Triangle_test_2.md";

<EXAMPLE49 />

</TabItem>

<TabItem value="example3" label="Example 3">

import EXAMPLE57 from "./_HeirarchicalBasis_Triangle_test_3.md";

<EXAMPLE57 />

</TabItem>

<TabItem value="example4" label="Example 4">

import EXAMPLE65 from "./_HeirarchicalBasis_Triangle_test_4.md";

<EXAMPLE65 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
