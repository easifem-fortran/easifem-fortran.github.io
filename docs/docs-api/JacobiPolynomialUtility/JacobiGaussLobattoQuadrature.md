# JacobiGaussLobattoQuadrature

This routine returns the $n+2$ Quadrature points and weights.

The Gauss-Lobatto quadrature points consists both $\pm 1$ as
quadrature points.

- The first quadrature point is $-1$
- The second quadrature point is $+1$

The remaining $n$ points are internal to $(-1, +1)$, and they are n-zeros of Jacobi  polynomial of order n with
respect to the following weight.

$$
(1-x)^{\alpha} (1+x)^{\beta} (x+1)(1-x)
$$

Here n is the order of Jacobi polynomial.

```fortran
INTERFACE
  MODULE SUBROUTINE JacobiGaussLobattoQuadrature(n, alpha, beta, pt, wt)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Jacobi polynomial
    REAL(DFP), INTENT(IN) :: alpha
    REAL(DFP), INTENT(IN) :: beta
    REAL(DFP), INTENT(OUT) :: pt(:)
    !! n+2 quad points indexed from 1 to n+2
    REAL(DFP), INTENT(OUT) :: wt(:)
    !! n+2 weights, index from 1 to n+2
  END SUBROUTINE JacobiGaussLobattoQuadrature
END INTERFACE
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE40 from "./_JacobiGaussLobattoQuadrature_test_1.md";

<EXAMPLE40 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
