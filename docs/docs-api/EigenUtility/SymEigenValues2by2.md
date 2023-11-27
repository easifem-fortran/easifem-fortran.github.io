# SymEigenValues2by2

Calculate the eigenvalues of 2 by 2 matrix.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION SymEigenValues2by2(mat) RESULT(ans)
    REAL(DFP), INTENT(IN) :: mat(2, 2)
    REAL(DFP) :: ans(2)
  END FUNCTION SymEigenValues2by2
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE6 from "./_SymEigenValues2by2_test_1.md";

<EXAMPLE6 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
