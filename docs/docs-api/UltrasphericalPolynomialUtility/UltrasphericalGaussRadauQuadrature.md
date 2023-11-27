# UltrasphericalGaussRadauQuadrature

This routine returns the $n+1$ Quadrature points and weights.

The Gauss-Radau quadrature points consists one of the end points denoted by $a$.

So $a$ can be $\pm 1$.

The remaining $n$ points are internal to $(-1, +1)$, and they are n-zeros of Ultraspherical  polynomial of order n.

Here n is the order of Ultraspherical polynomial.

- If $a=1$ then n+1 quadrature point will be +1.
- If $a=-1$ then 1st quadrature point will be -1.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE UltrasphericalGaussRadauQuadrature(a, n, lambda, pt, wt)
    REAL(DFP), INTENT(IN) :: a
    !! the value of one of the end points
    !! it should be either -1 or +1
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Ultraspherical polynomial
    REAL(DFP), INTENT(IN) :: lambda
    !! lambda should be greater than -0.5
    REAL(DFP), INTENT(OUT) :: pt(:)
    !! n+1 quadrature points from 1 to n+1
    REAL(DFP), OPTIONAL, INTENT(OUT) :: wt(:)
    !! n+1 weights from 1 to n+1
  END SUBROUTINE UltrasphericalGaussRadauQuadrature
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE42 from "./_UltrasphericalGaussRadauQuadrature_test_1.md";

<EXAMPLE42 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
