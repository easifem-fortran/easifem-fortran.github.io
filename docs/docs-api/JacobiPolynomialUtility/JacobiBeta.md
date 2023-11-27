# JacobiBeta

Recurrence coeff for Jacobi polynomial.

```fortran
INTERFACE
  MODULE ELEMENTAL PURE FUNCTION JacobiBeta(n, alpha, beta) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Jacobi polynomial
    REAL(DFP), INTENT(IN) :: alpha
    !! alpha in Jacobi poly
    REAL(DFP), INTENT(IN) :: beta
    !! beta in Jacobi poly
    REAL(DFP) :: ans
    !! answer
  END FUNCTION JacobiBeta
END INTERFACE
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE23 from "./_JacobiAlpha_test_1.md";

<EXAMPLE23 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
