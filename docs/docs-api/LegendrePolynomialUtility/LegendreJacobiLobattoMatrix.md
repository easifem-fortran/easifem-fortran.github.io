# LegendreJacobiLobattoMatrix

Legendre Lobatto matrix for Jacobi polynomial.

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE LegendreJacobiLobattoMatrix(n, D, E, alphaCoeff, &
    & betaCoeff)
    INTEGER(I4B), INTENT(IN) :: n
    !! n should be greater than or equal to 1
    REAL(DFP), INTENT(OUT) :: D(:)
    !! the size should be 1:n+2
    REAL(DFP), INTENT(OUT) :: E(:)
    !! the size should be 1:n+1
    REAL(DFP), OPTIONAL, INTENT(OUT) :: alphaCoeff(0:)
    REAL(DFP), OPTIONAL, INTENT(OUT) :: betaCoeff(0:)
  END SUBROUTINE LegendreJacobiLobattoMatrix
END INTERFACE

```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE31 from "./_LegendreJacobiLobattoMatrix_test_1.md";

<EXAMPLE31 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
