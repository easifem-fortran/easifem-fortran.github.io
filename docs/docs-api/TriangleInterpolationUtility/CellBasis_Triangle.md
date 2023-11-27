# CellBasis

Evaluate basis functions in the cell.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION CellBasis_Triangle(order, xij, refTriangle) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of approximation inside the cell
    !! order should be greater than two
    REAL(DFP), INTENT(IN) :: xij(:, :)
    !! point of evaluation
    !! number of rows = nsd
    !! number of cols = number of points
    CHARACTER(*), INTENT(IN) :: refTriangle
    !! Reference triangle
    !! "BIUNIT"
    !! "UNIT"
    REAL(DFP) :: ans(SIZE(xij, 2), INT((order - 1) * (order - 2) / 2))
  END FUNCTION CellBasis_Triangle
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE36 from "./_CellBasis_Triangle_test_1.md";

<EXAMPLE36 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
