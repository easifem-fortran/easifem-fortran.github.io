# VertexBasis

Returns the vertex basis.

<iframe src="/elements/hexahedron/vertexBasis.html" height="600" width="100%" scrolling="no"></iframe>

<iframe src="/elements/hexahedron/vertexBasis2.html" height="600" width="100%" scrolling="no"></iframe>

<!-- ![](./figures/vertexBasis.svg) -->

## Interface 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

 ```fortran
INTERFACE VertexBasis_Hexahedron
  MODULE PURE FUNCTION VertexBasis_Hexahedron1(x, y, z) &
     & RESULT(ans)
    REAL(DFP), INTENT(IN) :: x(:), y(:), z(:)
    !! point of evaluation
    REAL(DFP) :: ans(SIZE(x), 8)
    !! ans(:,v1) basis function of vertex v1 at all points
  END FUNCTION VertexBasis_Hexahedron1
END INTERFACE VertexBasis_Hexahedron
```

:::info `x`
:::

x coordinate of all points.

:::info `y`
:::

y coordinate of all points.

:::info `z`
:::

z coordinate of all points.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE16 from "./_VertexBasis_Hexahedron_test_1.md";

<EXAMPLE16 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

```fortran
INTERFACE VertexBasis_Hexahedron
  MODULE PURE FUNCTION VertexBasis_Hexahedron3(xij) &
    & RESULT(ans)
    REAL(DFP), INTENT(IN) :: xij(:, :)
    !! point of evaluation
    REAL(DFP) :: ans(SIZE(xij, 2), 8)
    !! ans(:,v1) basis function of vertex v1 at all points
  END FUNCTION VertexBasis_Hexahedron3
END INTERFACE VertexBasis_Hexahedron
```
