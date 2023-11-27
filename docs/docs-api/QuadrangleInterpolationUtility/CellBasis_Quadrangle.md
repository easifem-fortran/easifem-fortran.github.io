# CellBasis

Evaluate basis functions in the cell.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION CellBasis_Quadrangle(pb, qb, x, y) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: pb
    !! order on bottom vertical edge (e3), it should be greater than 1
    INTEGER(I4B), INTENT(IN) :: qb
    !! order on top vertical edge(e4), it should be greater than 1
    REAL(DFP), INTENT(IN) :: x(:), y(:)
    !! point of evaluation
    REAL(DFP) :: ans(SIZE(x), (pb - 1) * (qb - 1))
  END FUNCTION CellBasis_Quadrangle
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE36 from "./_CellBasis_Quadrangle_test_1.md";

<EXAMPLE36 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
