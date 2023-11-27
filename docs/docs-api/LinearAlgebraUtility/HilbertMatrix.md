# HilbertMatrix

Returns Hilbert matrix.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION HilbertMatrix(n) RESULT(Ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP) :: Ans(n, n)
  END FUNCTION HilbertMatrix
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE5 from "./_HilbertMatrix_test_1.md";

<EXAMPLE5 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
