# JacobiNormSQR2

Square norm of Jacobi polynomial.

This function returns the following:

$$
\Vert P_{n}^{\alpha,\beta}\Vert_{d\lambda}^{2}=\int_{-1}^{+1}P_{n}^
{\alpha,\beta}P_{n}^{\alpha,\beta}(1-x)^{\alpha}(1+x)^{\beta}dx
$$

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobiNormSQR2(n, alpha, beta) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP), INTENT(IN) :: alpha
    REAL(DFP), INTENT(IN) :: beta
    REAL(DFP) :: ans(0:n)
  END FUNCTION JacobiNormSQR2
END INTERFACE
```

## Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE28 from "./_JacobiNormSQR2_test_1.md";

<EXAMPLE28 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
