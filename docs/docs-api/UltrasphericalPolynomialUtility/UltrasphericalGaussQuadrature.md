# UltrasphericalGaussQuadrature

This routine computes the n Gauss-Quadrature points.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE UltrasphericalGaussQuadrature(n, lambda, pt, wt)
    INTEGER(I4B), INTENT(IN) :: n
    !! It represents the order of Ultraspherical polynomial
    REAL(DFP), INTENT(IN) :: lambda
    !! lambda should be greater than -0.5
    REAL(DFP), INTENT(OUT) :: pt(:)
    !! the size is 1 to n
    REAL(DFP), OPTIONAL, INTENT(OUT) :: wt(:)
    !! the size is 1 to n
  END SUBROUTINE UltrasphericalGaussQuadrature
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE31 from "./_UltrasphericalGaussQuadrature_test_1.md";

<EXAMPLE31 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
