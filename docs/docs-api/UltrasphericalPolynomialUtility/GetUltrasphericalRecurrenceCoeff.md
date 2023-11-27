# GetUltrasphericalRecurrenceCoeff

Recurrence coefficients are for monic and nonmonic Ultraspherical polynomials.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

Monic polynomials:

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE GetUltrasphericalRecurrenceCoeff(n, &
    & lambda, alphaCoeff, betaCoeff)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Ultraspherical polynomial, it should be greater than 1
    REAL(DFP), INTENT(IN) :: lambda
    !! lambda should be greater than -0.5
    !! lambda should not be zero
    REAL(DFP), INTENT(OUT) :: alphaCoeff(0:n - 1)
    REAL(DFP), INTENT(OUT) :: betaCoeff(0:n - 1)
  END SUBROUTINE GetUltrasphericalRecurrenceCoeff
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE23 from "./_GetUltrasphericalRecurrenceCoeff_test_1.md";

<EXAMPLE23 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE SUBROUTINE GetUltrasphericalRecurrenceCoeff2(n, lambda, &
    & A, B, C)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of jacobi polynomial, it should be greater than 1
    REAL(DFP), INTENT(IN) :: lambda
    !! lambda should be greater than -0.5
    !! lambda should not be 0.0
    REAL(DFP), INTENT(OUT) :: A(0:n - 1)
    !! size is n
    REAL(DFP), INTENT(OUT) :: B(0:n - 1)
    !! this coefficient is zero
    REAL(DFP), INTENT(OUT) :: C(0:n - 1)
    !! size is n
  END SUBROUTINE GetUltrasphericalRecurrenceCoeff2
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE61 from "./_GetUltrasphericalRecurrenceCoeff2_test_1.md";

<EXAMPLE61 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
