# Chebyshev1Quadrature

This routine returns the Quadrature point of Chebyshev1 polynomial.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Chebyshev1Quadrature(n, pt, wt, quadType, onlyInside)
    INTEGER(I4B), INTENT(IN) :: n
    !! number of quadrature points, the order will be computed as follows
    !! for quadType = Gauss, n is same as order of Chebyshev1 polynomial
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
  END SUBROUTINE Chebyshev1Quadrature
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE43 from "./_Chebyshev1Quadrature_test_1.md";

<EXAMPLE43 />

</TabItem>

<TabItem value="example2" label="Example 2">

import EXAMPLE48 from "./_Chebyshev1Quadrature_test_2.md";

<EXAMPLE48 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
