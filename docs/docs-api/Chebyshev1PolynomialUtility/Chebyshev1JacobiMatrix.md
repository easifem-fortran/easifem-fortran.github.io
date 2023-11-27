# Chebyshev1JacobiMatrix

Chebyshev1 matrix for Jacobi polynomials.

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Chebyshev1JacobiMatrix(n, D, E, alphaCoeff, betaCoeff)
    INTEGER(I4B), INTENT(IN) :: n
    !! n should be greater than or equal to 1
    REAL(DFP), INTENT(OUT) :: D(:)
    !! the size should be 1:n
    REAL(DFP), INTENT(OUT) :: E(:)
    !! the size should be 1:n-1
    REAL(DFP), OPTIONAL, INTENT(OUT) :: alphaCoeff(0:)
    !! recurrence coefficient of monic legendre polynomial, from 0 to n-1
    REAL(DFP), OPTIONAL, INTENT(OUT) :: betaCoeff(0:)
    !! recurrence coefficient of monic legendre polynomial, from 0 to n-1
  END SUBROUTINE Chebyshev1JacobiMatrix
END INTERFACE
```

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE30 from "./_Chebyshev1JacobiMatrix_test_1.md";

<EXAMPLE30 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
