# LegendreEvalAll

Evaluate Legendre polynomials from order = 0 to n at single or several points.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LegendreEvalAll(n, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! Highest order of polynomial.
    !! Polynomials from 0 to n will be computed.
    REAL(DFP), INTENT(IN) :: x
    !! Point of evaluation, $x \in [-1, 1]$
    REAL(DFP) :: ans(n + 1)
    !! Evaluate Legendre polynomial of order = 0 to n (total n+1)
    !! at point x
  END FUNCTION LegendreEvalAll
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE57 from "./_LegendreEvalAll_test_1.md";

<EXAMPLE57 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LegendreEvalAll(n, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! Highest order of polynomial.
    !! Polynomials from 0 to n will be computed.
    REAL(DFP), INTENT(IN) :: x(:)
    !! number of points, SIZE(x)=M
    REAL(DFP) :: ans(SIZE(x), n + 1)
    !! shape (M,N+1)
  END FUNCTION LegendreEvalAll
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE71 from "./_LegendreEvalAll_test_2.md";

<EXAMPLE71 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
