# JacobiEvalSum

Evaluate the finite sum of Jacobi polynomials at point x.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobiEvalSum(n, alpha, beta, x, coeff) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of polynomial
    REAL(DFP), INTENT(IN) :: alpha
    !! alpha of Jacobi polynomial
    REAL(DFP), INTENT(IN) :: beta
    !! beta of Jacobi Polynomial
    REAL(DFP), INTENT(IN) :: x
    !! point
    REAL(DFP), INTENT(IN) :: coeff(0:n)
    !! Coefficient of finite sum, size = n+1
    REAL(DFP) :: ans
    !! Evaluate Jacobi polynomial of order n at point x
  END FUNCTION JacobiEvalSum
END INTERFACE
```

## Interface 2

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobiEvalSum(n, alpha, beta, x, coeff) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of polynomial
    REAL(DFP), INTENT(IN) :: alpha
    !! alpha of Jacobi polynomial
    REAL(DFP), INTENT(IN) :: beta
    !! beta of Jacobi Polynomial
    REAL(DFP), INTENT(IN) :: x(:)
    !! point
    REAL(DFP), INTENT(IN) :: coeff(0:n)
    !! Coefficient of finite sum, size = n+1
    REAL(DFP) :: ans(SIZE(x))
    !! Evaluate Jacobi polynomial of order n at point x
  END FUNCTION JacobiEvalSum
END INTERFACE
```

## Example

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE53 from "./_JacobiEvalSum_test_1.md";

<EXAMPLE53 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE68 from "./_JacobiEvalSum_test_2.md";

<EXAMPLE68 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
