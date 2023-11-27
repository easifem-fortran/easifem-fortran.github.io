# Chebyshev1GaussRadauQuadrature

This routine returns the $n+1$ Quadrature points and weights.

```fortran
INTERFACE
  MODULE SUBROUTINE Chebyshev1GaussRadauQuadrature(a, n, pt, wt)
    REAL(DFP), INTENT(IN) :: a
    !! the value of one of the end points
    !! it should be either -1 or +1
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Chebyshev1 polynomial
    REAL(DFP), INTENT(OUT) :: pt(:)
    !! n+1 quadrature points from 1 to n+1
    REAL(DFP), OPTIONAL, INTENT(OUT) :: wt(:)
    !! n+1 weights from 1 to n+1
  END SUBROUTINE Chebyshev1GaussRadauQuadrature
END INTERFACE
```

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE42 from "./_Chebyshev1GaussRadauQuadrature_test_1.md";

<EXAMPLE42 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
