# Chebyshev1NormSQR

Square norm of Chebyshev1 polynomial.

```fortran
INTERFACE
  MODULE PURE FUNCTION Chebyshev1NormSQR(n) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP) :: ans
  END FUNCTION Chebyshev1NormSQR
END INTERFACE
```

## Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE28 from "./_Chebyshev1NormSQR_test_1.md";

<EXAMPLE28 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
