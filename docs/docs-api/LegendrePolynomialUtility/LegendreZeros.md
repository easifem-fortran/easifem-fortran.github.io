# LegendreZeros

Zeros of Legendre polynomials.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE FUNCTION LegendreZeros(n) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Legendre polynomial
    REAL(DFP) :: ans(n)
  END FUNCTION LegendreZeros
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE23 from "./_LegendreZeros_test_1.md";

<EXAMPLE23 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
