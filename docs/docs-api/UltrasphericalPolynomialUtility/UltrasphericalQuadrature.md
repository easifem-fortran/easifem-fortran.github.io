# UltrasphericalQuadrature

This routine returns the Quadrature point of Ultraspherical polynomial.

Here n is the number of quadrature points. Please note it is not
the order of Ultraspherical polynomial. The order is decided internally
depending upon the quadType

`pt` and `wt` should be allocated outside, and length should be n.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE UltrasphericalQuadrature(n, lambda, pt, wt, &
    & quadType, onlyInside)
    INTEGER(I4B), INTENT(IN) :: n
    !! number of quadrature points, the order will be computed as follows
    !! for quadType = Gauss, n is same as order of Ultraspherical polynomial
    !! for quadType = GaussRadauLeft or GaussRadauRight n is order+1
    !! for quadType = GaussLobatto, n = order+2
    REAL(DFP), INTENT(IN) :: lambda
    !! lambda should be greater than -0.5
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
  END SUBROUTINE UltrasphericalQuadrature
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE43 from "./_UltrasphericalQuadrature_test_1.md";

<EXAMPLE43 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
