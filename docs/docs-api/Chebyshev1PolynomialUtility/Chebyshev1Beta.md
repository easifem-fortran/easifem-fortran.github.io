# Chebyshev1Beta

Recurrence coeff for Chebyshev1 polynomial.

```fortran
INTERFACE
  MODULE PURE FUNCTION Chebyshev1Beta(n) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Chebyshev1 polynomial
    REAL(DFP) :: ans
    !! answer
  END FUNCTION Chebyshev1Beta
END INTERFACE
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE23 from "./_Chebyshev1Alpha_test_1.md";

<EXAMPLE23 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
