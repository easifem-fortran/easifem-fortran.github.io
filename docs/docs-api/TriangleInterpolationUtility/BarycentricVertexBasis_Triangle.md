# BarycentricVertexBasis

Returns the vertex basis functions on reference Triangle.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION BarycentricVertexBasis_Triangle(lambda) &
    & RESULT(ans)
    REAL(DFP), INTENT(IN) :: lambda(:, :)
    !! point of evaluation in terms of barycentrix coords
    REAL(DFP) :: ans(SIZE(lambda, 2), 3)
    !! ans(:,v1) basis function of vertex v1 at all points
  END FUNCTION BarycentricVertexBasis_Triangle
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE29 from "./_BarycentricVertexBasis_Triangle_test_1.md";

<EXAMPLE29 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
