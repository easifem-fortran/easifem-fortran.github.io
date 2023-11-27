# UltrasphericalEval

Evaluate Ultraspherical polynomials of order n at single or several points.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION UltrasphericalEval(n, lambda, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of polynomial
    REAL(DFP), INTENT(IN) :: lambda
    !! lambda should be greater than -0.5
    REAL(DFP), INTENT(IN) :: x
    REAL(DFP) :: ans
    !! Evaluate Ultraspherical polynomial of order n at point x
  END FUNCTION UltrasphericalEval
END INTERFACE
```

Evaluate Ultraspherical polynomial of order n at single points.

- N, the order of polynomial to compute.
- lambda is the polynomial parameter.
- x: the point at which the polynomials are to be evaluated.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE46 from "./_UltrasphericalEval_test_1.md";

<EXAMPLE46 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION UltrasphericalEval(n, lambda, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of polynomial
    REAL(DFP), INTENT(IN) :: lambda
    !! lambda should be greater than -0.5
    REAL(DFP), INTENT(IN) :: x(:)
    REAL(DFP) :: ans(SIZE(x))
    !! Evaluate Ultraspherical polynomial of order n at point x
  END FUNCTION UltrasphericalEval
END INTERFACE
```

- N is  order of polynomial to compute.
- lambda is the polynomial parameter.
- x: the point at which the polynomials are to be evaluated.
- ans, the values of the Ultraspherical polynomials at the several points.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE60 from "./_UltrasphericalEval_test_2.md";

<EXAMPLE60 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
