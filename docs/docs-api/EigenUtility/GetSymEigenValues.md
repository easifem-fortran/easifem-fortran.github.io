# GetSymEigenValues

This subroutine calculates eigenvalues of a symmetric matrix.

- For `n=2` it calls [SymEigenValues2y2](SymEigenValues2by2.md)
- For `n=3` it calls [SymEigenValues3by3](SymEigenValues3by3.md)
- For `n>=4` it calls `SYEV` routine from Lapack95

:::note
In this routine a copy of matrix `mat` is formed and passed to Lapack library. If you do not want to save `mat` then please call [GetSymEigenValues_](GetSymEigenValues_.md)
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
 INTERFACE
  MODULE SUBROUTINE GetSymEigenValues(mat, eigenValues)
    REAL(DFP), INTENT(IN) :: mat(:, :)
    REAL(DFP), INTENT(OUT) :: eigenValues(:)
  END SUBROUTINE GetSymEigenValues
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE13 from "./_GetSymEigenValues_test_1.md";

<EXAMPLE13 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
