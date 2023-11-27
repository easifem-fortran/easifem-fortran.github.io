# Chebyshev1LeadingCoeffRatio

Ratio of Leading coefficient of Chebyshev1 polynomials.

```fortran
INTERFACE
  MODULE PURE FUNCTION Chebyshev1LeadingCoeffRatio(n) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Chebyshev1 polynomial
    REAL(DFP) :: ans
    !! answer
  END FUNCTION Chebyshev1LeadingCoeffRatio
END INTERFACE
```

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE25 from "./_Chebyshev1LeadingCoeffRatio_test_1.md";

<EXAMPLE25 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
