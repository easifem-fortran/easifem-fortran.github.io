# RecursiveNode1D

Returns the barycentric coordinates of recursive nodes on the line.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```fortran
INTERFACE
  MODULE FUNCTION RecursiveNode1D(order, ipType, &
    & domain) RESULT(ans)
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
    CHARACTER(*), OPTIONAL, INTENT(IN) :: domain
      !! unit (0,1)
      !! biunit (-1, 1)
      !! equilateral
    REAL(DFP), ALLOCATABLE :: ans(:, :)
      !! barycentric coordinates, in xiJ format
      !! size(ans,1) = 2 corresponding to b0 and b1
      !! size(ans,2) total number of points
  END FUNCTION RecursiveNode1D
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

- `UNIT`, unit segment $[0,1]$, in this case `SIZE(ans,1)` is 1.
- `BIUNIT`, biunit segment $[-1,1]$, in this case `SIZE(ans, 1)` is 1.
- `BARYCENTRIC`, in this case `SIZE(ans,1)` is 2.

<Tabs>
<TabItem value="example" label="️܀ Example 1">

import EXAMPLE64 from "./_RecursiveNode1D_test_1.md";

<EXAMPLE64 />

</TabItem>

<TabItem value="example2" label="Example 2">

import EXAMPLE77 from "./_RecursiveNode1D_test_2.md";

<EXAMPLE77 />

</TabItem>

<TabItem value="example3" label="Example 3">

import EXAMPLE85 from "./_RecursiveNode1D_test_3.md";

<EXAMPLE85 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
