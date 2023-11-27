# Chebyshev1GaussQuadrature

This routine computes the n Gauss-Quadrature points.

All Gauss-Quadrature points are inside $(-1, 1)$

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Chebyshev1GaussQuadrature(n, pt, wt)
    INTEGER(I4B), INTENT(IN) :: n
    !! It represents the order of Chebyshev1 polynomial
    REAL(DFP), INTENT(OUT) :: pt(:)
    !! the size is 1 to n
    REAL(DFP), OPTIONAL, INTENT(OUT) :: wt(:)
    !! the size is 1 to n
  END SUBROUTINE Chebyshev1GaussQuadrature
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE13 from "./_Chebyshev1GaussQuadrature_test_1.md";

<EXAMPLE13 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Chebyshev-Gauss Quadrature points

Chebyshev1 Gauss Quadrature n = 1

 |  |  |
 |  --- |  --- |
 | 1.03412E-13 | 3.1416 |

Chebyshev1 Gauss Quadrature n = 2

 |  |  |
 |  --- |  --- |
 | -0.70711 | 1.5708 |
 | 0.70711 | 1.5708 |

Chebyshev1 Gauss Quadrature n = 3

 |  |  |
 |  --- |  --- |
 | -0.86603 | 1.0472 |
 | 1.03412E-13 | 1.0472 |
 | 0.86603 | 1.0472 |

Chebyshev1 Gauss Quadrature n = 4

 |  |  |
 |  --- |  --- |
 | -0.92388 | 0.7854 |
 | -0.38268 | 0.7854 |
 | 0.38268 | 0.7854 |
 | 0.92388 | 0.7854 |

Chebyshev1 Gauss Quadrature n = 5

 |  |  |
 |  --- |  --- |
 | -0.95106 | 0.62832 |
 | -0.58779 | 0.62832 |
 | 1.03412E-13 | 0.62832 |
 | 0.58779 | 0.62832 |
 | 0.95106 | 0.62832 |

Chebyshev1 Gauss Quadrature n = 6

 |  |  |
 |  --- |  --- |
 | -0.96593 | 0.5236 |
 | -0.70711 | 0.5236 |
 | -0.25882 | 0.5236 |
 | 0.25882 | 0.5236 |
 | 0.70711 | 0.5236 |
 | 0.96593 | 0.5236 |

Chebyshev1 Gauss Quadrature n = 7

 |  |  |
 |  --- |  --- |
 | -0.97493 | 0.4488 |
 | -0.78183 | 0.4488 |
 | -0.43388 | 0.4488 |
 | 1.03412E-13 | 0.4488 |
 | 0.43388 | 0.4488 |
 | 0.78183 | 0.4488 |
 | 0.97493 | 0.4488 |

Chebyshev1 Gauss Quadrature n = 8

 |  |  |
 |  --- |  --- |
 | -0.98079 | 0.3927 |
 | -0.83147 | 0.3927 |
 | -0.55557 | 0.3927 |
 | -0.19509 | 0.3927 |
 | 0.19509 | 0.3927 |
 | 0.55557 | 0.3927 |
 | 0.83147 | 0.3927 |
 | 0.98079 | 0.3927 |

Chebyshev1 Gauss Quadrature n = 9

 |  |  |
 |  --- |  --- |
 | -0.98481 | 0.34907 |
 | -0.86603 | 0.34907 |
 | -0.64279 | 0.34907 |
 | -0.34202 | 0.34907 |
 | 1.03412E-13 | 0.34907 |
 | 0.34202 | 0.34907 |
 | 0.64279 | 0.34907 |
 | 0.86603 | 0.34907 |
 | 0.98481 | 0.34907 |

Chebyshev1 Gauss Quadrature n = 10

 |  |  |
 |  --- |  --- |
 | -0.98769 | 0.31416 |
 | -0.89101 | 0.31416 |
 | -0.70711 | 0.31416 |
 | -0.45399 | 0.31416 |
 | -0.15643 | 0.31416 |
 | 0.15643 | 0.31416 |
 | 0.45399 | 0.31416 |
 | 0.70711 | 0.31416 |
 | 0.89101 | 0.31416 |
 | 0.98769 | 0.31416 |
