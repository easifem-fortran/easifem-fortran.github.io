# Chebyshev1DMatrix

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```fortran
INTERFACE
  MODULE PURE FUNCTION Chebyshev1DMatrix(n, x, quadType) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
      !! order of Chebyshev1 polynomial
    REAL(DFP), INTENT(IN) :: x(0:n)
      !! quadrature points
    INTEGER(I4B), INTENT(IN) :: quadType
      !! Gauss and GaussLobatto
    REAL(DFP) :: ans(0:n, 0:n)
      !! D matrix
  END FUNCTION Chebyshev1DMatrix
END INTERFACE
```

## Example

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE26 from "./_Chebyshev1DMatrix_test_1.md";

<EXAMPLE26 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
