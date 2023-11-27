# Chebyshev1GradientCoeff

This routine returns the coefficients of gradient of Chebyshev1 expansion.

Input is cofficients of Chebyshev1polynomials (modal values).

## Interface 1

```fortran
INTERFACE
  MODULE PURE FUNCTION Chebyshev1GradientCoeff(n, coeff) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
      !! order of Jacobi polynomial
    REAL(DFP), INTENT(IN) :: coeff(0:n)
      !! coefficients $\tilde{u}_{n}$ obtained from Chebyshev1Transform
    REAL(DFP) :: ans(0:n)
      !! coefficient of gradient
  END FUNCTION Chebyshev1GradientCoeff
END INTERFACE
```

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE28 from "./_Chebyshev1GradientCoeff_test_1.md";

<EXAMPLE28 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
