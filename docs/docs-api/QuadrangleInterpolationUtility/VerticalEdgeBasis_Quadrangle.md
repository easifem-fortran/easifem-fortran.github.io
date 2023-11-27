# VerticalEdgeBasis

Evaluate basis functions on left and right edge of biunit Quadrangle.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION VerticalEdgeBasis_Quadrangle(qe1, qe2, x, y) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: qe1
    !! order on left vertical edge (e1), it should be greater than 1
    !! It should be greater than 2
    INTEGER(I4B), INTENT(IN) :: qe2
    !! order on right vertical edge(e2), it should be greater than 1
    !! It should be greater than 2
    REAL(DFP), INTENT(IN) :: x(:), y(:)
    !! point of evaluation
    !! these points should be between [-1, 1].
    REAL(DFP) :: ans(SIZE(x), qe1 + qe2 - 2)
  END FUNCTION VerticalEdgeBasis_Quadrangle
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
