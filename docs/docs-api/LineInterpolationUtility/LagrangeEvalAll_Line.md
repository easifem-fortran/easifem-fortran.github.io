---
sidebar_label: LagrangeEvalAll
---

# LagrangeEvalAll_Line

Evaluate Lagrangepolynomials at single point or several points.

## Interface 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE LagrangeEvalAll_Line
  MODULE FUNCTION LagrangeEvalAll_Line1(order, x, xij, coeff, firstCall, &
    & orthopol, alpha, beta, lambda) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of Lagrange polynomials
    REAL(DFP), INTENT(IN) :: x
    !! point of evaluation
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: xij(1, order + 1)
    !! interpolation points
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: coeff(order + 1, order + 1)
    !! coefficient of Lagrange polynomials
    LOGICAL(LGT), OPTIONAL :: firstCall
    !! If firstCall is true, then coeff will be made
    !! If firstCall is False, then coeff will be used
    !! Default value of firstCall is True
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: orthopol
    !! Monomial
    !! Jacobi
    !! Legendre
    !! Chebyshev
    !! Lobatto
    !! UnscaledLobatto
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha
    !! Jacobi polynomial parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta
    !! Jacobi polynomial parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda
    !! Ultraspherical parameter
    REAL(DFP) :: ans(order + 1)
    !! Value of n+1 Lagrange polynomials at point x
  END FUNCTION LagrangeEvalAll_Line1
END INTERFACE LagrangeEvalAll_Line
```

:::note `x`
Point of evaluation.
:::

:::note `xij`
Interpolation points. SIZE(xij, 1) is 1. SIZE(xij, 2) should be equal to order+1.
:::

:::note `order`
order denotes the order of polynomial space.
:::

:::note `orthopol`
Currently, we can specify following types of orthogonal polynomials:

- [x] Jacobi
- [x] Ultraspherical
- [x] Legendre
- [x] Chebyshev
- [x] Lobatto
- [x] UnscaledLobatto
:::

:::note `alpha, beta`
alpha and beta are parameters of Jacobi Polynomials. They should be present when `orthopol` is equal to `Jacobi`
:::

:::note `lambda`
`lambda` is parameter for Ultraspherical polynomials. They should be present when `orthopol` is equal to the `Ultraspherical`
:::

:::note `ans`
`ans` denotes the `order+1` coefficents of ith polynomial.
:::

:::note `coeff` and `firstCall`
`coeff` denotes the coefficients of Lagrange polynomial. The jth col of `coeff` dentotes the coefficient of jth Lagrange polynomial.

- If `firstCall` is true and `coeff` is present, then this function will return `coeff`, which can be used later. Note that computation of `coeff` involves inversion of a matrix.

- If `firstCall` is false and `coeff` is present, then this function will use `coeff`.
:::

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE7 from "./_LagrangeEvalAll_Line_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="example2" label="Example 2">

import EXAMPLE46 from "./_LagrangeEvalAll_Line_test_2.md";

<EXAMPLE46 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE LagrangeEvalAll_Line
  MODULE FUNCTION LagrangeEvalAll_Line2(order, x, xij, coeff, firstCall, &
    & orthopol, alpha, beta, lambda) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of Lagrange polynomials
    REAL(DFP), INTENT(IN) :: x(:)
    !! point of evaluation
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: xij(1, order + 1)
    !! interpolation points
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: coeff(order + 1, order + 1)
    !! coefficient of Lagrange polynomials
    LOGICAL(LGT), OPTIONAL :: firstCall
    !! If firstCall is true, then coeff will be made
    !! If firstCall is False, then coeff will be used
    !! Default value of firstCall is True
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: orthopol
    !! Monomial
    !! Jacobi
    !! Legendre
    !! Chebyshev
    !! Lobatto
    !! UnscaledLobatto
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha
    !! Jacobi polynomial parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta
    !! Jacobi polynomial parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda
    !! Ultraspherical parameter
    REAL(DFP) :: ans(SIZE(x), order + 1)
    !! Value of n+1 Lagrange polynomials at point x
    !! ans(:, j) is the value of jth polynomial at x points
    !! ans(i, :) is the value of all polynomials at x(i) point
  END FUNCTION LagrangeEvalAll_Line2
END INTERFACE LagrangeEvalAll_Line
```

:::note `x`
Point of evaluation.
:::

:::note `xij`
Interpolation points. SIZE(xij, 1) is 1. SIZE(xij, 2) should be equal to order+1.
:::

:::note `order`
order denotes the order of polynomial space.
:::

:::note `orthopol`
Currently, we can specify following types of orthogonal polynomials:

- [x] Jacobi
- [x] Ultraspherical
- [x] Legendre
- [x] Chebyshev
- [x] Lobatto
- [x] UnscaledLobatto
:::

:::note `alpha, beta`
alpha and beta are parameters of Jacobi Polynomials. They should be present when `orthopol` is equal to `Jacobi`
:::

:::note `lambda`
`lambda` is parameter for Ultraspherical polynomials. They should be present when `orthopol` is equal to the `Ultraspherical`
:::

:::note `ans`
jth col of `ans` denotes the `order+1` coefficents of jth polynomial.
:::

:::note `coeff` and `firstCall`
`coeff` denotes the coefficients of Lagrange polynomial. The jth col of `coeff` dentotes the coefficient of jth Lagrange polynomial.

- If `firstCall` is true and `coeff` is present, then this function will return `coeff`, which can be used later. Note that computation of `coeff` involves inversion of a matrix.

- If `firstCall` is false and `coeff` is present, then this function will use `coeff`.
:::

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE90 from "./_LagrangeEvalAll_Line_test_3.md";

<EXAMPLE90 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
