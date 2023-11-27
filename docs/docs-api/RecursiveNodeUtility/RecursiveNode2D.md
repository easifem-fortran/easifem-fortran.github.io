# RecursiveNode2D

Returns the barycentric coordinates of recursive nodes on the triangle.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```fortran
INTERFACE
  MODULE FUNCTION RecursiveNode2D(order, ipType, domain) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
      !! order >= 0
    INTEGER(I4B), INTENT(IN) :: ipType
      !! interpolation point type
      !! Equidistance
      !! LobattoGaussJacobi
      !! LobattoGaussChebyshev
      !! LobattoGaussGegenbauer
      !! GaussJacobi
      !! GaussChebyshev
      !! GaussGegenbauer
    REAL(DFP), ALLOCATABLE :: ans(:, :)
      !! barycentric coordinates, in xiJ format
      !! size(ans,1) = 3 corresponding to b0, b1, b2
      !! size(ans,2) total number of points
    CHARACTER(*), OPTIONAL, INTENT(IN) :: domain
      !! unit
      !! Biunit
      !! Equilateral
  END FUNCTION RecursiveNode2D
END INTERFACE
```

:::info `order`
:::

Order of element.

:::info `ipType`
:::

Interpolation point type. Following values are allowed.

- Equidistance
- GaussJacobi
- GaussJacobiLobatto
- GaussChebyshev
- GaussChebyshevLobatto
- GaussLegendre
- GaussLegendreLobatto
- GaussUltraspherical
- GaussUltrasphericalLobatto

:::info `domain`
:::

It specifies the domain of the element. It is an optional argument. It can take following values:

- `UNIT`, unit segment $[0,1]$, in this case `SIZE(ans,1)` is 2.
- `BIUNIT`, biunit segment $[-1,1]$, in this case `SIZE(ans, 1)` is 2.
- `BARYCENTRIC`, in this case `SIZE(ans,1)` is 3. This is also the default value.

## Examples

<Tabs>
<TabItem value="example" label="️܀ Example 1">

import EXAMPLE69 from "./_RecursiveNode2D_test_1.md";

<EXAMPLE69 />

</TabItem>

<TabItem value="example2" label="Example 2">

import EXAMPLE79 from "./_RecursiveNode2D_test_2.md";

<EXAMPLE79 />

<TabItem value="example3" label="Example 3">

import EXAMPLE85 from "./_RecursiveNode2D_test_3.md";

<EXAMPLE85 />

</TabItem>

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
