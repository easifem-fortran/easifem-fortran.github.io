# JacobiLeadingCoeff

Leading coefficient of Jacobi polynomials.

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobiLeadingCoeff(n, alpha, beta) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Jacobi polynomial
    REAL(DFP), INTENT(IN) :: alpha
    !! alpha in Jacobi poly
    REAL(DFP), INTENT(IN) :: beta
    !! beta in Jacobi poly
    REAL(DFP) :: ans
    !! answer
  END FUNCTION JacobiLeadingCoeff
END INTERFACE
```

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE25 from "./_JacobiLeadingCoeff_test_1.md";

<EXAMPLE25 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
