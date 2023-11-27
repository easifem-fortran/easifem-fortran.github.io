# RecursiveNode3D

Returns the barycentric coordinates of recursive nodes on a tetrahedron.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```fortran
INTERFACE
  MODULE FUNCTION RecursiveNode3D(order, ipType, &
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
    REAL(DFP), ALLOCATABLE :: ans(:, :)
      !! barycentric coordinates, in xiJ format
      !! size(ans,1) = 4 corresponding to b0, b1, b2, b3
      !! size(ans,2) total number of points
    CHARACTER(*), OPTIONAL, INTENT(IN) :: domain
      !! unit
      !! Biunit
      !! Equilateral
  END FUNCTION RecursiveNode3D
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

- `UNIT`, unit segment $[0,1]$, in this case `SIZE(ans,1)` is 3.
- `BIUNIT`, biunit segment $[-1,1]$, in this case `SIZE(ans, 1)` is 3.
- `BARYCENTRIC`, in this case `SIZE(ans,1)` is 4. This is also the default value.

## Examples

<Tabs>
<TabItem value="example" label="️܀ Example">

import EXAMPLE37 from "./_RecursiveNode3D_test_1.md";

<EXAMPLE37 />

</TabItem>

<TabItem value="example2" label="Example 2">

import EXAMPLE79 from "./_RecursiveNode3D_test_2.md";

<EXAMPLE79 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
