# UltrasphericalBeta

Recurrence coeff for Ultraspherical polynomial.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION UltrasphericalBeta(n, lambda) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Ultraspherical polynomial
    REAL(DFP), INTENT(IN) :: lambda
    !! lambda should be greater than -0.5
    REAL(DFP) :: ans
    !! answer
  END FUNCTION UltrasphericalBeta
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE7 from "./_UltrasphericalAlpha_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
