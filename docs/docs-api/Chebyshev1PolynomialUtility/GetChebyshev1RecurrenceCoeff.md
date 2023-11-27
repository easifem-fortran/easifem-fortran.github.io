# GetChebyshev1RecurrenceCoeff

Recurrence coefficients are for monic and nonmonic Chebyshev1 polynomials.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

Monic polynomials

```fortran
INTERFACE
  MODULE PURE SUBROUTINE GetChebyshev1RecurrenceCoeff(n, alphaCoeff, betaCoeff)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Chebyshev1 polynomial, it should be greater than 1
    REAL(DFP), INTENT(OUT) :: alphaCoeff(0:n - 1)
    REAL(DFP), INTENT(OUT) :: betaCoeff(0:n - 1)
  END SUBROUTINE GetChebyshev1RecurrenceCoeff
END INTERFACE
```

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE23 from "./_GetChebyshev1RecurrenceCoeff_test_1.md";

<EXAMPLE23 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>

## Interface 2

```fortran
INTERFACE
  MODULE PURE SUBROUTINE GetChebyshev1RecurrenceCoeff2(n, A, B, C)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Chebyshev1 polynomial, it should be greater than 1
    REAL(DFP), INTENT(OUT) :: A(0:n - 1)
    !! size is n
    REAL(DFP), INTENT(OUT) :: B(0:n - 1)
    !! this coefficient is zero
    REAL(DFP), INTENT(OUT) :: C(0:n - 1)
    !! size is n
  END SUBROUTINE GetChebyshev1RecurrenceCoeff2
END INTERFACE
```

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE61 from "./_GetChebyshev1RecurrenceCoeff2_test_1.md";

<EXAMPLE61 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
