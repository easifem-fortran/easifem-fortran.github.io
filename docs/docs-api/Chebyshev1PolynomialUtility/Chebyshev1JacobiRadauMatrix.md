# Chebyshev1JacobiRadauMatrix

Radau matrix for Chebyshev1 polynomials.

```fortran
INTERFACE
  MODULE PURE SUBROUTINE Chebyshev1JacobiRadauMatrix(a, n, D, E, alphaCoeff, &
    & betaCoeff)
    REAL(DFP), INTENT(IN) :: a
    !! one of the end of the domain
    INTEGER(I4B), INTENT(IN) :: n
    !! n should be greater than or equal to 1
    REAL(DFP), INTENT(OUT) :: D(:)
    !! the size should be 1:n+1
    REAL(DFP), INTENT(OUT) :: E(:)
    !! the size should be 1:n
    REAL(DFP), OPTIONAL, INTENT(OUT) :: alphaCoeff(0:)
    REAL(DFP), OPTIONAL, INTENT(OUT) :: betaCoeff(0:)
  END SUBROUTINE Chebyshev1JacobiRadauMatrix
END INTERFACE
```

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE32 from "./_Chebyshev1JacobiRadauMatrix_test_1.md";

<EXAMPLE32 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
