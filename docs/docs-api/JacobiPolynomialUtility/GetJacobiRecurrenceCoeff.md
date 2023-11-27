# GetJacobiRecurrenceCoeff

Recurrence coefficients are for monic and nonmonic jacobi polynomials.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

Monic polynomials

```fortran
INTERFACE
  MODULE PURE SUBROUTINE GetJacobiRecurrenceCoeff(n, alpha, beta, &
    & alphaCoeff, betaCoeff)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of jacobi polynomial, it should be greater than 1
    REAL(DFP), INTENT(IN) :: alpha
    REAL(DFP), INTENT(IN) :: beta
    REAL(DFP), INTENT(OUT) :: alphaCoeff(0:n - 1)
    REAL(DFP), INTENT(OUT) :: betaCoeff(0:n - 1)
  END SUBROUTINE GetJacobiRecurrenceCoeff
END INTERFACE
```

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE23 from "./_GetJacobiRecurrenceCoeff_test_1.md";

<EXAMPLE23 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>

## Interface 2

These recurrence coefficients are for non-monic jacobi polynomials.

$$
 P_{n+1}^{(\alpha,\beta)}=\left(a_{n}x+b_{n}\right)P_{n}^{(\alpha,\beta)}
 -c_{n}P_{n-1}^{(\alpha,\beta)},\quad n=1,2,\cdots
$$

```fortran
INTERFACE
  MODULE PURE SUBROUTINE GetJacobiRecurrenceCoeff2(n, alpha, beta, &
    & A, B, C)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of jacobi polynomial, it should be greater than 1
    REAL(DFP), INTENT(IN) :: alpha
    REAL(DFP), INTENT(IN) :: beta
    REAL(DFP), INTENT(OUT) :: A(0:n - 1)
    REAL(DFP), INTENT(OUT) :: B(0:n - 1)
    REAL(DFP), INTENT(OUT) :: C(0:n - 1)
  END SUBROUTINE GetJacobiRecurrenceCoeff2
END INTERFACE
```

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE61 from "./_GetJacobiRecurrenceCoeff2_test_1.md";

<EXAMPLE61 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
