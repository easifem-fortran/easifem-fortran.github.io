# LegendreLeadingCoeff

Leading coefficient of Legendre polynomials.

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LegendreLeadingCoeff(n) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Legendre polynomial
    REAL(DFP) :: ans
    !! answer
  END FUNCTION LegendreLeadingCoeff
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE25 from "./_LegendreLeadingCoeff_test_1.md";

<EXAMPLE25 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
