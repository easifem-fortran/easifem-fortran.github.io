# LegendreGaussRadauQuadrature

This routine returns the $n+1$ Quadrature points and weights.

```fortran
INTERFACE
  MODULE SUBROUTINE LegendreGaussRadauQuadrature(a, n, pt, wt)
    REAL(DFP), INTENT(IN) :: a
    !! the value of one of the end points
    !! it should be either -1 or +1
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Legendre polynomial
    REAL(DFP), INTENT(OUT) :: pt(:)
    !! n+1 quadrature points from 1 to n+1
    REAL(DFP), OPTIONAL, INTENT(OUT) :: wt(:)
    !! n+1 weights from 1 to n+1
  END SUBROUTINE LegendreGaussRadauQuadrature
END INTERFACE
```

:::note `a`

- For left Radau points $a=-1$
- For right Radau points $a=1$
:::

:::note `n`
order Legendre polynomial, this rule has order of accuracy $2n$. It will return $n+1$ points.
:::

:::note `pt` and `wt`
Points and weights.
:::

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE42 from "./_LegendreGaussRadauQuadrature_test_1.md";

<EXAMPLE42 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
