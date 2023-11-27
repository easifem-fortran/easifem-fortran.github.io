# JacobiTransform

Discrete Jacobi transform.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobiTransform(n, alpha, beta, coeff, x, w, &
    &  quadType) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of jacobi polynomial
    REAL(DFP), INTENT(IN) :: alpha
    !! alpha of Jacobi polynomial > -1.0_DFP
    REAL(DFP), INTENT(IN) :: beta
    !! beta of Jacobi polynomial > -1.0_DFP
    REAL(DFP), INTENT(IN) :: coeff(0:n)
    !! nodal value (at quad points)
    REAL(DFP), INTENT(IN) :: x(0:n)
    !! quadrature points
    REAL(DFP), INTENT(IN) :: w(0:n)
    !! weights
    INTEGER(I4B), INTENT(IN) :: quadType
    !! Quadrature type, Gauss, GaussLobatto, GaussRadau, GaussRadauLeft
    !! GaussRadauRight
    REAL(DFP) :: ans(0:n)
    !! modal values  or coefficients
  END FUNCTION JacobiTransform
END INTERFACE
```

## Interface 2

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobiTransform(n, alpha, beta, coeff, x, w, &
    & quadType) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of polynomial
    REAL(DFP), INTENT(IN) :: alpha
    !! alpha of Jacobi polynomial > -1.0_DFP
    REAL(DFP), INTENT(IN) :: beta
    !! beta of Jacobi polynomial > -1.0_DFP
    REAL(DFP), INTENT(IN) :: coeff(0:, 1:)
    !! nodal value (at quad points)
    REAL(DFP), INTENT(IN) :: x(0:n)
    !! quadrature points
    REAL(DFP), INTENT(IN) :: w(0:n)
    !! weights
    INTEGER(I4B), INTENT(IN) :: quadType
    !! Quadrature type, Gauss, GaussLobatto, GaussRadau, GaussRadauLeft
    !! GaussRadauRight
    REAL(DFP) :: ans(0:n, 1:SIZE(coeff, 2))
    !! modal values  or coefficients for each column of val
  END FUNCTION JacobiTransform
END INTERFACE
```

## Interface 3

```fortran
INTERFACE
  MODULE FUNCTION JacobiTransform(n, alpha, beta, f, quadType) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of jacobi polynomial
    REAL(DFP), INTENT(IN) :: alpha
    !! alpha of Jacobi polynomial > -1.0_DFP
    REAL(DFP), INTENT(IN) :: beta
    !! beta of Jacobi polynomial > -1.0_DFP
    PROCEDURE(iface_1DFunction), POINTER, INTENT(IN) :: f
    !! 1D space function
    INTEGER(I4B), INTENT(IN) :: quadType
    !! Quadrature type, Gauss, GaussLobatto, GaussRadau, GaussRadauLeft
    !! GaussRadauRight
    REAL(DFP) :: ans(0:n)
    !! modal values  or coefficients
  END FUNCTION JacobiTransform
END INTERFACE
```

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE87 from "./_JacobiTransform_test_1.md";

<EXAMPLE87 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE101 from "./_JacobiTransform_test_2.md";

<EXAMPLE101 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE115 from "./_JacobiTransform_test_3.md";

<EXAMPLE115 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
