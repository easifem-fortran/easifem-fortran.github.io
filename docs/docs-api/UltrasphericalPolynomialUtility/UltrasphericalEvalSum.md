# UltrasphericalEvalSum

Evaluate the finite sum of Ultraspherical polynomials at point x.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION UltrasphericalEvalSum(n, lambda, x, coeff) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of polynomial
    REAL(DFP), INTENT(IN) :: lambda
    !! alpha of Ultraspherical polynomial
    REAL(DFP), INTENT(IN) :: x
    !! point
    REAL(DFP), INTENT(IN) :: coeff(0:n)
    !! Coefficient of finite sum, size = n+1
    REAL(DFP) :: ans
    !! Evaluate Ultraspherical polynomial of order n at point x
  END FUNCTION UltrasphericalEvalSum
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE53 from "./_UltrasphericalEvalSum_test_1.md";

<EXAMPLE53 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION UltrasphericalEvalSum(n, lambda, x, coeff) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of polynomial
    REAL(DFP), INTENT(IN) :: lambda
    !! alpha of Ultraspherical polynomial
    REAL(DFP), INTENT(IN) :: x(:)
    !! point
    REAL(DFP), INTENT(IN) :: coeff(0:n)
    !! Coefficient of finite sum, size = n+1
    REAL(DFP) :: ans(SIZE(x))
    !! Evaluate Ultraspherical polynomial of order n at point x
  END FUNCTION UltrasphericalEvalSum
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE68 from "./_UltrasphericalEvalSum_test_2.md";

<EXAMPLE68 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
