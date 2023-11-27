# VertexBasis

Returns value of vertex function on triangle.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE VertexBasis_Quadrangle
  MODULE PURE FUNCTION VertexBasis_Quadrangle1(x, y) &
     & RESULT(ans)
    REAL(DFP), INTENT(IN) :: x(:), y(:)
    !! point of evaluation
    REAL(DFP) :: ans(SIZE(x), 4)
    !! ans(:,v1) basis function of vertex v1 at all points
  END FUNCTION VertexBasis_Quadrangle1
END INTERFACE VertexBasis_Quadrangle
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE12 from "./_VertexBasis_Quadrangle_test_1.md";

<EXAMPLE12 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
