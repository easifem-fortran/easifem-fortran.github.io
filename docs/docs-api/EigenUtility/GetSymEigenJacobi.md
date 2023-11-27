# GetSymEigenJacobi

This subroutine computes all eigenvalues and eigenvectors of a real symmetric N × N matrix `Mat`.

:::note Reference
  The algorithm is direct implementation of Numerical Reciepe in Fortran, Page 1225
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE GetSymEigenJacobi(mat, eigenValues, eigenVectors, &
    & maxIter)
    REAL(DFP), INTENT(IN) :: mat(:, :)
    REAL(DFP), INTENT(INOUT) :: eigenValues(:)
    REAL(DFP), INTENT(INOUT) :: eigenVectors(:, :)
    INTEGER(I4B), INTENT(IN) :: maxIter
  END SUBROUTINE GetSymEigenJacobi
END INTERFACE
```

- On output, elements of `Mat` above the diagonal are destroyed.
- `eigenvalues` is a vector of length N that returns the eigenvalues of `Mat`.
- `EigenVectors` is a `N × N` matrix whose columns contain on output, the normalized eigenvectors (directions) of `Mat`.
- `maxIter` returns the number of Jacobi rotations that were required.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE14 from "./_GetSymEigenJacobi_test_1.md";

<EXAMPLE14 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
