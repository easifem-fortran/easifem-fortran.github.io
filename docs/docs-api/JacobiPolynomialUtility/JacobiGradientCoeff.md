# JacobiGradientCoeff

This routine returns the coefficients of gradient of Jacobi expansion.

Input is cofficients of Jacobipolynomials (modal values).

## Interface 1

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobiGradientCoeff1(n, alpha, beta, coeff) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
      !! order of Jacobi polynomial
    REAL(DFP), INTENT(IN) :: alpha
      !! alpha > -1.0
    REAL(DFP), INTENT(IN) :: beta
      !! beta > -1.0
    REAL(DFP), INTENT(IN) :: coeff(0:n)
      !! coefficients $\tilde{u}_{n}$ obtained from JacobiTransform
    REAL(DFP) :: ans(0:n)
      !! coefficient of gradient
  END FUNCTION JacobiGradientCoeff1
END INTERFACE
```

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE28 from "./_JacobiGradientCoeff_test_1.md";

<EXAMPLE28 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
