# xzFacetBasis

Returns the basis on facets which are parallel to xz-plane.

<iframe src="/elements/hexahedron/xzFacetBasis.html" height="600" width="100%" scrolling="no"></iframe>

## Interface 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

 ```fortran
INTERFACE yzFacetBasis_Hexahedron
  MODULE PURE FUNCTION yzFacetBasis_Hexahedron1(  &
    & n1, &
    & n2, &
    & x,   &
    & y,   &
    & z)   &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n1
    !! order along axis 1 of yz face
    INTEGER(I4B), INTENT(IN) :: n2
    !! order along axis 2 of yz face
    REAL(DFP), INTENT(IN) :: x(:), y(:), z(:)
    !! point of evaluation
    !! these points should be between [-1, 1].
    REAL(DFP) :: ans( &
      & SIZE(x), &
      & (n1 - 1_I4B) * (n2 - 1_I4B) * 2_I4B)
  END FUNCTION yzFacetBasis_Hexahedron1
END INTERFACE yzFacetBasis_Hexahedron
```

:::info `n1, n2`
:::

These are order of approximations along the `x` and `z` axis.

$$
n_{1}, n_{2} \ge 2
$$

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

import EXAMPLE16 from "./_xzFacetBasis_Hexahedron_test_1.md";

<EXAMPLE16 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
