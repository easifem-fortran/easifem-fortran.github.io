# GetSymEigenValues_

This subroutine calculates eigenvalues of a symmetric matrix.

- For `n=2` it calls [SymEigenValues2y2](SymEigenValues2by2.md)
- For `n=3` it calls [SymEigenValues3by3](SymEigenValues3by3.md)
- For `n>=4` it calls `SYEV` routine from Lapack95

:::caution
In this routine matrix `mat` will be destroyed. If you want to preserve `mat`, then call [GetSymEigenValues](GetSymEigenValues.md).
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE SUBROUTINE GetSymEigenValues_(mat, eigenValues)
    REAL(DFP), INTENT(INOUT) :: mat(:, :)
    REAL(DFP), INTENT(OUT) :: eigenValues(:)
  END SUBROUTINE GetSymEigenValues_
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE14 from "./_GetSymEigenValues__test_1.md";

<EXAMPLE14 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
