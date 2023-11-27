# JacobiQuadrature

This routine returns the Quadrature point of Jacobi polynomial.

Here n is the number of quadrature points. Please note it is not
the order of jacobi polynomial. The order is decided internally
depending upon the quadType

`pt` and `wt` should be allocated outside, and length should be n.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE JacobiQuadrature(n, alpha, beta, pt, wt, quadType)
    INTEGER(I4B), INTENT(IN) :: n
    !! number of quadrature points, the order will be computed as follows
    !! for quadType = Gauss, n is same as order of Jacobi polynomial
    !! for quadType = GaussRadauLeft or GaussRadauRight n is order+1
    !! for quadType = GaussLobatto, n = order+2
    REAL(DFP), INTENT(IN) :: alpha
    !! alpha of Jacobi polynomial
    REAL(DFP), INTENT(IN) :: beta
    !! beta of Jacobi polynomial
    REAL(DFP), INTENT(OUT) :: pt(n)
    !! n+1 quadrature points from 1 to n+1
    REAL(DFP), INTENT(OUT) :: wt(n)
    !! n+1 weights from 1 to n+1
    INTEGER(I4B), INTENT(IN) :: quadType
    !! Gauss
    !! GaussRadauLeft
    !! GaussRadauRight
    !! GaussLobatto
  END SUBROUTINE JacobiQuadrature
END INTERFACE
```

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE43 from "./_JacobiQuadrature_test_1.md";

<EXAMPLE43 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
