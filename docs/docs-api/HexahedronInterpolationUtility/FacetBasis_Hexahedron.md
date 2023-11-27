# FacetBasis

Returns the facet basis.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

 ```fortran
INTERFACE FacetBasis_Hexahedron
  MODULE PURE FUNCTION FacetBasis_Hexahedron1(  &
    & n1, &
    & n2, &
    & x,   &
    & y,   &
    & z,  &
    & dim1,  &
    & dim2)   &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n1
    !! order along axis 1 of the face
    !! it should be greater than 1
    INTEGER(I4B), INTENT(IN) :: n2
    !! order along axis 2 of the face
    !! it should be greater than 1
    REAL(DFP), INTENT(IN) :: x(:), y(:), z(:)
    !! point of evaluation
    !! these points should be between [-1, 1].
    INTEGER(I4B), INTENT(IN) :: dim1
    !! direction in n1 direction
    INTEGER(I4B), INTENT(IN) :: dim2
    !! direction in n2 direction
    REAL(DFP) :: ans( &
      & SIZE(x), &
      & (n1 - 1_I4B) * (n1 - 1_I4B) + (n2 - 1_I4B) * (n2 - 1_I4B))
  END FUNCTION FacetBasis_Hexahedron1
END INTERFACE FacetBasis_Hexahedron
```

:::info `n1, n2`
:::

These are order of approximations along the `dim1` and `dim2` axis.

$$
n_{1}, n_{2} \ge 2
$$

:::info `dim1`, `dim2`
:::

- `dim1` denotes the first local axis of the facet.
- `dim2` denotes the second local axis of the facet.

`dim-1` and `dim-2` should be in lexographical order, that is,  following combinations are allowed:

| dim1 | dim2 |
| --- | --- |
| 1 | 2 |
| 1 | 3 |
| 2 | 3 |

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

import EXAMPLE16 from "./_xyFacetBasis_Hexahedron_test_1.md";

<EXAMPLE16 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
