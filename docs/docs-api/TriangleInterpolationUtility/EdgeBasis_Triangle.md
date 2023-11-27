# EdgeBasis

Evaluate basis functions on left and right edge of biunit Triangle.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION EdgeBasis_Triangle(pe1, pe2, pe3, xij, refTriangle) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: pe1
    !! order on edge (e1), should be greater than 1
    INTEGER(I4B), INTENT(IN) :: pe2
    !! order on edge(e2), should be greater than 1
    INTEGER(I4B), INTENT(IN) :: pe3
    !! order on edge(e3), should be greater than 1
    REAL(DFP), INTENT(IN) :: xij(:, :)
    !! point of evaluation
    CHARACTER(*), INTENT(IN) :: refTriangle
    !! Reference triangle
    !! "BIUNIT"
    !! "UNIT"
    REAL(DFP) :: ans(SIZE(xij, 2), pe1 + pe2 + pe3 - 3)
  END FUNCTION EdgeBasis_Triangle
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE38 from "./_EdgeBasis_Triangle_test_1.md";

<EXAMPLE38 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
