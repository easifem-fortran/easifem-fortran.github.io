# LegendreDMatrix

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LegendreDMatrix(n, x, quadType) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
      !! order of Legendre polynomial
    REAL(DFP), INTENT(IN) :: x(0:n)
      !! quadrature points
    INTEGER(I4B), INTENT(IN) :: quadType
      !! Gauss and GaussLobatto
    REAL(DFP) :: ans(0:n, 0:n)
      !! D matrix
  END FUNCTION LegendreDMatrix
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE8 from "./_LegendreDMatrix_test_1.md";

<EXAMPLE8 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
