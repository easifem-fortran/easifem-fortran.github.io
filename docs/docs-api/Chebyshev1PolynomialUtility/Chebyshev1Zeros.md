# Chebyshev1Zeros

Zeros of Chebyshev1 polynomials.

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE FUNCTION Chebyshev1Zeros(n) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Chebyshev1 polynomial
    REAL(DFP) :: ans(n)
  END FUNCTION Chebyshev1Zeros
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE10 from "./_Chebyshev1Zeros_test_1.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
