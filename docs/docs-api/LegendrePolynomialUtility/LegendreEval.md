# LegendreEval

Evaluate Legendre polynomials of order n at single or several points.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LegendreEval(n, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of polynomial
    REAL(DFP), INTENT(IN) :: x
    !! point of evaluation, it should be between -1 and 1
    REAL(DFP) :: ans
    !! Evaluate Legendre polynomial of order n at point x
  END FUNCTION LegendreEval
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE46 from "./_LegendreEval_test_1.md";

<EXAMPLE46 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LegendreEval(n, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of polynomial
    REAL(DFP), INTENT(IN) :: x(:)
    !! several points of evaluation
    REAL(DFP) :: ans(SIZE(x))
    !! Evaluate Legendre polynomial of order n at points x
  END FUNCTION LegendreEval
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE60 from "./_LegendreEval_test_2.md";

<EXAMPLE60 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
