# JacobiGaussQuadrature

This routine computes the n Gauss-Quadrature points.

They are n zeros of a jacobi polynomial defined with respect to the weight $(1-x)^{\alpha} (1+x)^{\beta}$.

All Gauss-Quadrature points are inside $(-1, 1)$

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE JacobiGaussQuadrature(n, alpha, beta, pt, wt)
    INTEGER(I4B), INTENT(IN) :: n
    !! It represents the order of Jacobi polynomial
    REAL(DFP), INTENT(IN) :: alpha
    REAL(DFP), INTENT(IN) :: beta
    REAL(DFP), INTENT(OUT) :: pt(:)
    !! the size is 1 to n
    REAL(DFP), OPTIONAL, INTENT(OUT) :: wt(:)
    !! the size is 1 to n
  END SUBROUTINE JacobiGaussQuadrature
END INTERFACE
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Examples

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE31 from "./_JacobiGaussQuadrature_test_1.md";

<EXAMPLE31 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
