# UltrasphericalJacobiMatrix

Ultraspherical matrix for Jacobi polynomials.

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE UltrasphericalJacobiMatrix(n, lambda, D, E, &
    &  alphaCoeff, betaCoeff)
    INTEGER(I4B), INTENT(IN) :: n
    !! n should be greater than or equal to 1
    REAL(DFP), INTENT(IN) :: lambda
    !! lambda should be greater than -0.5
    REAL(DFP), INTENT(OUT) :: D(:)
    !! the size should be 1:n
    REAL(DFP), INTENT(OUT) :: E(:)
    !! the size should be 1:n-1
    REAL(DFP), OPTIONAL, INTENT(OUT) :: alphaCoeff(0:)
    !! recurrence coefficient of monic Ultraspherical polynomial, from 0 to n-1
    REAL(DFP), OPTIONAL, INTENT(OUT) :: betaCoeff(0:)
    !! recurrence coefficient of monic Ultraspherical polynomial, from 0 to n-1
  END SUBROUTINE UltrasphericalJacobiMatrix
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE10 from "./_UltrasphericalJacobiMatrix_test_1.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
