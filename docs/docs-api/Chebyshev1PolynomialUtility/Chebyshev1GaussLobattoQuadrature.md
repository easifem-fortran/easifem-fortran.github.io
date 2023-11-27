# Chebyshev1GaussLobattoQuadrature

This routine returns the $n+2$ Quadrature points and weights.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE Chebyshev1GaussLobattoQuadrature(n, pt, wt)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Chebyshev1 polynomials
    REAL(DFP), INTENT(OUT) :: pt(:)
    !! n+2 quad points indexed from 1 to n+2
    REAL(DFP), OPTIONAL, INTENT(OUT) :: wt(:)
    !! n+2 weights, index from 1 to n+2
  END SUBROUTINE Chebyshev1GaussLobattoQuadrature
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE11 from "./_Chebyshev1GaussLobattoQuadrature_test_1.md";

<EXAMPLE11 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Some Chebyshev Gauss Lobatto Quadrature points

### n+2 = 3

 |  |  |
 |  --- |  --- |
 | -1 | 0.7854 |
 | 1.03412E-13 | 1.5708 |
 | 1 | 0.7854 |

### n+2 = 4

 |  |  |
 |  --- |  --- |
 | -1 | 0.5236 |
 | -0.5 | 1.0472 |
 | 0.5 | 1.0472 |
 | 1 | 0.5236 |

### n+2 = 5

 |  |  |
 |  --- |  --- |
 | -1 | 0.3927 |
 | -0.70711 | 0.7854 |
 | 1.03412E-13 | 0.7854 |
 | 0.70711 | 0.7854 |
 | 1 | 0.3927 |

### n+2 = 6

 |  |  |
 |  --- |  --- |
 | -1 | 0.31416 |
 | -0.80902 | 0.62832 |
 | -0.30902 | 0.62832 |
 | 0.30902 | 0.62832 |
 | 0.80902 | 0.62832 |
 | 1 | 0.31416 |

### n+2 = 7

 |  |  |
 |  --- |  --- |
 | -1 | 0.2618 |
 | -0.86603 | 0.5236 |
 | -0.5 | 0.5236 |
 | 1.03412E-13 | 0.5236 |
 | 0.5 | 0.5236 |
 | 0.86603 | 0.5236 |
 | 1 | 0.2618 |

### n+2 = 8

 |  |  |
 |  --- |  --- |
 | -1 | 0.2244 |
 | -0.90097 | 0.4488 |
 | -0.62349 | 0.4488 |
 | -0.22252 | 0.4488 |
 | 0.22252 | 0.4488 |
 | 0.62349 | 0.4488 |
 | 0.90097 | 0.4488 |
 | 1 | 0.2244 |

### n+2 = 9

 |  |  |
 |  --- |  --- |
 | -1 | 0.19635 |
 | -0.92388 | 0.3927 |
 | -0.70711 | 0.3927 |
 | -0.38268 | 0.3927 |
 | 1.03412E-13 | 0.3927 |
 | 0.38268 | 0.3927 |
 | 0.70711 | 0.3927 |
 | 0.92388 | 0.3927 |
 | 1 | 0.19635 |

### n+2 = 10

 |  |  |
 |  --- |  --- |
 | -1 | 0.17453 |
 | -0.93969 | 0.34907 |
 | -0.76604 | 0.34907 |
 | -0.5 | 0.34907 |
 | -0.17365 | 0.34907 |
 | 0.17365 | 0.34907 |
 | 0.5 | 0.34907 |
 | 0.76604 | 0.34907 |
 | 0.93969 | 0.34907 |
 | 1 | 0.17453 |
