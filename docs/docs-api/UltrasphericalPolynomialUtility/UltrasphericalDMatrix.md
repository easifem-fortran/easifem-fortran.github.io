# UltrasphericalDMatrix

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION UltrasphericalDMatrix(n, lambda, x, quadType) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
      !! order of Ultraspherical polynomial
    REAL(DFP), INTENT(IN) :: lambda
    !! $\lambda > -0.5, \lambda \ne 0.0$
    REAL(DFP), INTENT(IN) :: x(0:n)
      !! quadrature points
    INTEGER(I4B), INTENT(IN) :: quadType
      !! Gauss and GaussLobatto
    REAL(DFP) :: ans(0:n, 0:n)
      !! D matrix
  END FUNCTION UltrasphericalDMatrix
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE8 from "./_UltrasphericalDMatrix_test_1.md";

<EXAMPLE8 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
