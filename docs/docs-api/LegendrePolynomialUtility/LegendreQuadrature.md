# LegendreQuadrature

This routine returns the Quadrature point of Legendre polynomial.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE LegendreQuadrature(n, pt, wt, quadType, onlyInside)
    INTEGER(I4B), INTENT(IN) :: n
    !! number of quadrature points, the order will be computed as follows
    !! for quadType = Gauss, n is same as order of Legendre polynomial
    !! for quadType = GaussRadauLeft or GaussRadauRight n is order+1
    !! for quadType = GaussLobatto, n = order+2
    REAL(DFP), INTENT(OUT) :: pt(n)
    !! n+1 quadrature points from 1 to n+1
    REAL(DFP), OPTIONAL, INTENT(OUT) :: wt(n)
    !! n+1 weights from 1 to n+1
    INTEGER(I4B), INTENT(IN) :: quadType
    !! Gauss
    !! GaussRadauLeft
    !! GaussRadauRight
    !! GaussLobatto
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: onlyInside
    !! only inside
  END SUBROUTINE LegendreQuadrature
END INTERFACE
```

:::info `n`
n is the total number of quadrature points.

- `n` point Gauss quadrature rule has $2n-1$ degree of accuracy.
- `n` point Gauss-Radau quadrature rule has $2n-2$ degree of accuracy.
- `n` point Gauss-Lobatto quadrature rule has $2n-3$ degree of accuracy.
:::

:::info `quadType`
Type of quadrature, following values are accepted:

- Gauss
- GaussRadauLeft
- GaussRadauRight
- GaussLobatto
:::

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE43 from "./_LegendreQuadrature_test_1.md";

<EXAMPLE43 />

</TabItem>

<TabItem value="example2" label="Example 2">

import EXAMPLE48 from "./_LegendreQuadrature_test_2.md";

<EXAMPLE48 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
