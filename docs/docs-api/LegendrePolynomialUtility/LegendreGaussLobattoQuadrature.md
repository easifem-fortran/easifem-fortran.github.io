# LegendreGaussLobattoQuadrature

This routine returns the $n+2$ Quadrature points and weights.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE LegendreGaussLobattoQuadrature(n, pt, wt)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Legendre polynomials
    REAL(DFP), INTENT(OUT) :: pt(:)
    !! n+2 quad points indexed from 1 to n+2
    REAL(DFP), OPTIONAL, INTENT(OUT) :: wt(:)
    !! n+2 weights, index from 1 to n+2
  END SUBROUTINE LegendreGaussLobattoQuadrature
END INTERFACE
```

:::note `n`
Order of Legendre polynomial. The order of accuracy of this rule is $2n+1$.
:::

:::note `pt`
$n+2$ quadrature points
:::

:::note `wt`
$n+2$ weights.
:::

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE40 from "./_LegendreGaussLobattoQuadrature_test_1.md";

<EXAMPLE40 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Some LegendreGaussLobattoQuadrature

### n+2 = 3

 | Point | Weight |
 |  --- |  --- |
 | -1 | 0.33333 |
 | -2.66578E-17 | 1.3333 |
 | 1 | 0.33333 |

### n+2 = 4

 | Point | Weight |
 |  --- |  --- |
 | -1 | 0.16667 |
 | -0.44721 | 0.83333 |
 | 0.44721 | 0.83333 |
 | 1 | 0.16667 |

### n+2 = 5

 | Point | Weight |
 |  --- |  --- |
 | -1 | 0.1 |
 | -0.65465 | 0.54444 |
 | 4.1375E-17 | 0.71111 |
 | 0.65465 | 0.54444 |
 | 1 | 0.1 |

### n+2 = 6

 | Point | Weight |
 |  --- |  --- |
 | -1 | 6.66667E-02 |
 | -0.76506 | 0.37847 |
 | -0.28523 | 0.55486 |
 | 0.28523 | 0.55486 |
 | 0.76506 | 0.37847 |
 | 1 | 6.66667E-02 |

### n+2 = 7

 | Point | Weight |
 |  --- |  --- |
 | -1 | 4.7619E-02 |
 | -0.83022 | 0.27683 |
 | -0.46885 | 0.43175 |
 | 2.39125E-16 | 0.48762 |
 | 0.46885 | 0.43175 |
 | 0.83022 | 0.27683 |
 | 1 | 4.7619E-02 |

### n+2 = 8

 | Point | Weight |
 |  --- |  --- |
 | -1 | 3.57143E-02 |
 | -0.87174 | 0.2107 |
 | -0.5917 | 0.34112 |
 | -0.2093 | 0.41246 |
 | 0.2093 | 0.41246 |
 | 0.5917 | 0.34112 |
 | 0.87174 | 0.2107 |
 | 1 | 3.57143E-02 |

### n+2 = 9

 | Point | Weight |
 |  --- |  --- |
 | -1 | 2.77778E-02 |
 | -0.89976 | 0.1655 |
 | -0.67719 | 0.27454 |
 | -0.36312 | 0.34643 |
 | -2.81541E-16 | 0.37152 |
 | 0.36312 | 0.34643 |
 | 0.67719 | 0.27454 |
 | 0.89976 | 0.1655 |
 | 1 | 2.77778E-02 |

### n+2 = 10

 | Point | Weight |
 |  --- |  --- |
 | -1 | 2.22222E-02 |
 | -0.91953 | 0.13331 |
 | -0.73877 | 0.22489 |
 | -0.47792 | 0.29204 |
 | -0.16528 | 0.32754 |
 | 0.16528 | 0.32754 |
 | 0.47792 | 0.29204 |
 | 0.73877 | 0.22489 |
 | 0.91953 | 0.13331 |
 | 1 | 2.22222E-02 |
