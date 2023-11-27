# BarycentricEdgeBasis

Returns the edge basis functions on reference Triangle.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION BarycentricEdgeBasis_Triangle(pe1, pe2, pe3, lambda) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: pe1
    !! order on  edge (e1)
    INTEGER(I4B), INTENT(IN) :: pe2
    !! order on edge (e2)
    INTEGER(I4B), INTENT(IN) :: pe3
    !! order on edge (e3)
    REAL(DFP), INTENT(IN) :: lambda(:, :)
    !! point of evaluation in terms of barycentric coordinates
    !! Number of rows in lambda is equal to three.
    REAL(DFP) :: ans(SIZE(lambda, 2), pe1 + pe2 + pe3 - 3)
  END FUNCTION BarycentricEdgeBasis_Triangle
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE32 from "./_BarycentricEdgeBasis_Triangle_test_1.md";

<EXAMPLE32 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
