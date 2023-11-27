# UltrasphericalGaussLobattoQuadrature

This routine returns the $n+2$ Quadrature points and weights.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE UltrasphericalGaussLobattoQuadrature(n, lambda, pt, wt)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Ultraspherical polynomials
    REAL(DFP), INTENT(IN) :: lambda
    !! lambda should be greater than -0.5
    REAL(DFP), INTENT(OUT) :: pt(:)
    !! n+2 quad points indexed from 1 to n+2
    REAL(DFP), OPTIONAL, INTENT(OUT) :: wt(:)
    !! n+2 weights, index from 1 to n+2
  END SUBROUTINE UltrasphericalGaussLobattoQuadrature
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE40 from "./_UltrasphericalGaussLobattoQuadrature_test_1.md";

<EXAMPLE40 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
