# yEdgeBasis

Returns the basis on edges parallel to the y axis.

<iframe src="/elements/hexahedron/yEdgeBasis.html" height="600" width="100%" scrolling="no"></iframe>

## Interface 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

 ```fortran
INTERFACE yEdgeBasis_Hexahedron
  MODULE PURE FUNCTION yEdgeBasis_Hexahedron1(  &
    & pe1, &
    & pe2, &
    & pe3, &
    & pe4, &
    & x, &
    & y,  &
    & z) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: pe1
    !! order on edge e1, it should be greater than 1
    INTEGER(I4B), INTENT(IN) :: pe2
    !! order on edge e2, it should be greater than 1
    INTEGER(I4B), INTENT(IN) :: pe3
    !! order on edge e3, it should be greater than 1
    INTEGER(I4B), INTENT(IN) :: pe4
    !! order on edge e4, it should be greater than 1
    REAL(DFP), INTENT(IN) :: x(:), y(:), z(:)
    !! point of evaluation
    !! these points should be between [-1, 1].
    REAL(DFP) :: ans(SIZE(x), pe1 + pe2 + pe3 + pe4 - 4)
  END FUNCTION yEdgeBasis_Hexahedron1
END INTERFACE yEdgeBasis_Hexahedron
```

:::info `pe1, pe2, pe3, pe4`
:::

These are orders of approximation on edges parallel to y axis.

:::info `x`
:::

`x` coordinate of all points.

:::info `y`
:::

`y` coordinate of all points.

:::info `z`
:::

`z` coordinate of all points.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE16 from "./_yEdgeBasis_Hexahedron_test_1.md";

<EXAMPLE16 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
