# JacobiGradientEvalSum

Evaluate finite sum of gradient of Jacobi polynomials.

## Interface 1

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobiGradientEvalSum(n, alpha, beta, x, coeff) &
    & RESULT(ans)
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
  END FUNCTION JacobiGradientEvalSum
END INTERFACE
```

## Interface 2

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobiGradientEvalSum(n, alpha, beta, x, coeff) &
    & RESULT(ans)
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
  END FUNCTION JacobiGradientEvalSum
END INTERFACE
```

## Interface 3

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobiGradientEvalSum(n, alpha, beta, x, coeff, k) &
    & RESULT(ans)
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
    INTEGER(I4B), INTENT(IN) :: k
    !! order of derivative
    REAL(DFP) :: ans
    !! Evaluate Jacobi polynomial of order n at point x
  END FUNCTION JacobiGradientEvalSum
END INTERFACE
```

## Interface 4

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobiGradientEvalSum(n, alpha, beta, x, coeff, k) &
    & RESULT(ans)
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
    INTEGER(I4B), INTENT(IN) :: k
    !! kth order derivative
    REAL(DFP) :: ans(SIZE(x))
    !! Evaluate Jacobi polynomial of order n at point x
  END FUNCTION JacobiGradientEvalSum
END INTERFACE
```

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE99 from "./_JacobiGradientEvalSum_test_1.md";

<EXAMPLE99 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE115 from "./_JacobiGradientEvalSum_test_2.md";

<EXAMPLE115 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE128 from "./_JacobiGradientEvalSum_test_3.md";

<EXAMPLE128 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
