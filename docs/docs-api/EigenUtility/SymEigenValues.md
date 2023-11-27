# SymEigenValues

This function calculates eigenvalues of a symmetric matrix.

:::note

- For `n=2` it calls [SymEigenValues2y2](SymEigenValues2by2.md)
- For `n=3` it calls [SymEigenValues3by3](SymEigenValues3by3.md)
- For `n>=4` it calls `SYEV` routine from Lapack95
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE FUNCTION SymEigenValues(mat) RESULT(ans)
    REAL(DFP), INTENT(IN) :: mat(:, :)
    !! for n=2, we call SymEigenValues2by2
    !! for n=3, we call SymEigenValues3by3
    !! for n>=4, we call Lapack or JacobiMethod
    REAL(DFP) :: ans(SIZE(mat, 1))
  END FUNCTION SymEigenValues
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE6 from "./_SymEigenValues_test_1.md";

<EXAMPLE6 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
