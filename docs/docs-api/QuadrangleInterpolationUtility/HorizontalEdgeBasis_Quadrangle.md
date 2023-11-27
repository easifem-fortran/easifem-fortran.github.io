# HorizontalEdgeBasis

Evaluate basis functions on left and right edge of biunit Quadrangle.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION HorizontalEdgeBasis_Quadrangle(pe3, pe4, x, y) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: pe3
    !! order on bottom vertical edge (e3), it should be greater than 1
    INTEGER(I4B), INTENT(IN) :: pe4
    !! order on top vertical edge(e4), it should be greater than 1
    REAL(DFP), INTENT(IN) :: x(:), y(:)
    !! point of evaluation
    REAL(DFP) :: ans(SIZE(x), pe3 + pe4 - 2)
  END FUNCTION HorizontalEdgeBasis_Quadrangle
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE38 from "./_VerticalEdgeBasis_Quadrangle_test_1.md";

<EXAMPLE38 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
