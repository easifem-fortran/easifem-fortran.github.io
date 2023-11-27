# UltrasphericalGradientCoeff

This routine returns the coefficients of gradient of Ultraspherical expansion.

Input is cofficients of Ultrasphericalpolynomials (modal values).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION UltrasphericalGradientCoeff(n, lambda, coeff) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
      !! order of Jacobi polynomial
    REAL(DFP), INTENT(IN) :: lambda
    !! $\lambda > -0.5, \lambda \ne 0.0$
    REAL(DFP), INTENT(IN) :: coeff(0:n)
      !! coefficients $\tilde{u}_{n}$ obtained from UltrasphericalTransform
    REAL(DFP) :: ans(0:n)
      !! coefficient of gradient
  END FUNCTION UltrasphericalGradientCoeff
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE28 from "./_UltrasphericalGradientCoeff_test_1.md";

<EXAMPLE28 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
