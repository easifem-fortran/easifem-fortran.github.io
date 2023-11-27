# LegendreAlpha

Recurrence coeff for Legendre polynomial.

```fortran
INTERFACE
  MODULE PURE FUNCTION LegendreAlpha(n) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Legendre polynomial
    REAL(DFP) :: ans
    !! answer
  END FUNCTION LegendreAlpha
END INTERFACE
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE23 from "./_LegendreAlpha_test_1.md";

<EXAMPLE23 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
