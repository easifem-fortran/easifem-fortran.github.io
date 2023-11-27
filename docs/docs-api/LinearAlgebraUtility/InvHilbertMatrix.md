# InvHilbertMatrix

Returns the inverse of Hilbert matrix.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION InvHilbertMatrix(n) RESULT(Ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP) :: Ans(n, n)
  END FUNCTION InvHilbertMatrix
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE6 from "./_InvHilbertMatrix_test_1.md";

<EXAMPLE6 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
