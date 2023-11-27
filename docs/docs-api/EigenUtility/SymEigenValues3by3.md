# SymEigenValues3by3

Calculate the eigenvalues of 3 by 3 matrix.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION SymEigenValues3by3(mat) RESULT(ans)
    REAL(DFP), INTENT(IN) :: mat(3, 3)
    REAL(DFP) :: ans(3)
  END FUNCTION SymEigenValues3by3
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE5 from "./_SymEigenValues3by3_test_1.md";

<EXAMPLE5 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
