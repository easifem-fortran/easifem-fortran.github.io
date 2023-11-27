# LagrangeVandermonde

This routine returns the Vandermonde matrix.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LagrangeVandermonde(x, order, elemType) &
    & RESULT(ans)
    REAL(DFP), INTENT(IN) :: x(:, :)
  !!  points in $x_{iJ}$ format
    INTEGER(I4B), INTENT(IN) :: order
  !! order
    INTEGER(I4B), INTENT(IN) :: elemType
  !! element type
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  !! vandermonde matrix nrows = number of points
  !! ncols = number of dof
  END FUNCTION LagrangeVandermonde
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE11 from "./_LagrangeVandermonde_test_1.md";

<EXAMPLE11 />

</TabItem>

<TabItem value="example2" label="️܀ Example 2">

import EXAMPLE12 from "./_LagrangeVandermonde_test_2.md";

<EXAMPLE12 />

</TabItem>

<TabItem value="example3" label="️܀ Example 3">

import EXAMPLE13 from "./_LagrangeVandermonde_test_3.md";

<EXAMPLE13 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
