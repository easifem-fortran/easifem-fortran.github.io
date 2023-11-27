# UltrasphericalLeadingCoeffRatio

Ratio of Leading coefficient of Ultraspherical polynomials.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION UltrasphericalLeadingCoeffRatio(n, lambda) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Ultraspherical polynomial
    REAL(DFP), INTENT(IN) :: lambda
    !! lambda should be greater than -0.5
    REAL(DFP) :: ans
    !! answer
  END FUNCTION UltrasphericalLeadingCoeffRatio
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE25 from "./_UltrasphericalLeadingCoeffRatio_test_1.md";

<EXAMPLE25 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
