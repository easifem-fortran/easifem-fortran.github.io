# JacobiGaussRadauQuadrature

This routine returns the $n+1$ Quadrature points and weights.

The Gauss-Radau quadrature points consists one of the end points denoted
by $a$. So $a$ can be $\pm 1$. The remaining $n$ points are internal to $(-1, +1)$, and they are n-zeros of Jacobi  polynomial of order n with
respect to the following weight.

- $(1-x)^{\alpha} (1+x)^{\beta} (x+1)$ if $a=-1$.
- $(1-x)^{\alpha} (1+x)^{\beta} (1-x)$ if $a=+1$.

 Here n is the order of Jacobi polynomial.

 If $a=1$ then n+1 quadrature point will be +1
 If $a=-1$ then 1st quadrature point will be -1

```fortran
INTERFACE
  MODULE SUBROUTINE JacobiGaussRadauQuadrature(a, n, alpha, beta, pt, wt)
    REAL(DFP), INTENT(IN) :: a
    !! the value of one of the end points
    !! it should be either -1 or +1
    INTEGER(I4B), INTENT(IN) :: n
    !! order of jacobi polynomial
    REAL(DFP), INTENT(IN) :: alpha
    !! alpha of Jacobi polynomial
    REAL(DFP), INTENT(IN) :: beta
    !! beta of Jacobi polynomial
    REAL(DFP), INTENT(OUT) :: pt(:)
    !! n+1 quadrature points from 1 to n+1
    REAL(DFP), OPTIONAL, INTENT(OUT) :: wt(:)
    !! n+1 weights from 1 to n+1
  END SUBROUTINE JacobiGaussRadauQuadrature
END INTERFACE
```

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE42 from "./_JacobiGaussRadauQuadrature_test_1.md";

<EXAMPLE42 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
