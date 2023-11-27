# VertexBasis

Returns value of vertex function on triangle.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION VertexBasis_Triangle(xij, refTriangle) RESULT(ans)
    REAL(DFP), INTENT(IN) :: xij(:, :)
    !! point of evaluation
    CHARACTER(*), INTENT(IN) :: refTriangle
    REAL(DFP) :: ans(SIZE(xij, 2), 3)
    !! ans(:,v1) basis function of vertex v1 at all points
  END FUNCTION VertexBasis_Triangle
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE12 from "./_VertexBasis_Triangle_test_1.md";

<EXAMPLE12 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
