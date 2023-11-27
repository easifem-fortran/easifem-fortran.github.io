---
sidebar_label: LagrangeCoeff
---

# LagrangeCoeff_Line

## Interface 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE FUNCTION LagrangeCoeff_Line(order, i, xij) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of polynomial, it should be SIZE(xij,2)-1
    INTEGER(I4B), INTENT(IN) :: i
    !! ith coefficients for lagrange polynomial
    REAL(DFP), INTENT(IN) :: xij(:, :)
    !! points in xij format, size(xij,2) = order+1
    REAL(DFP) :: ans(order + 1)
    !! coefficients
  END FUNCTION LagrangeCoeff_Line
END INTERFACE
```

:::note `order`
order of polynomial space.
:::

:::note `i`
ith polynomial
:::

:::note `xij`

- Interpolation points
- SIZE(xij,1) is equal to 1
- SIZE(xij,2) is equal to order+1
:::

:::note `ans`
`order+1` coefficients of ith Lagrange polynomial.
:::

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE30 from "./_LagrangeCoeff_Line_test_1.md";

<EXAMPLE30 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE FUNCTION LagrangeCoeff_Line(order, i, v, isVandermonde) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of polynomial, it should be SIZE(v,2)-1
    INTEGER(I4B), INTENT(IN) :: i
    !! coefficient for ith lagrange polynomial
    REAL(DFP), INTENT(IN) :: v(:, :)
    !! vandermonde matrix size should be (order+1,order+1)
    LOGICAL(LGT), INTENT(IN) :: isVandermonde
    !! This is just to resolve interface issue
    REAL(DFP) :: ans(order + 1)
    !! coefficients
  END FUNCTION LagrangeCoeff_Line
END INTERFACE
```

:::note `order`
order of polynomial space.
:::

:::note `i`
ith polynomial
:::

:::note `v`

- Vandermonde matrix
- The jth col of v denotes the values of basis function on interpolation points.
- The ith row of v denotes the values of all basis function on ith interpolation points.
:::

:::note `ans`
`order+1` coefficients of ith Lagrange polynomial.
:::

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 3

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE FUNCTION LagrangeCoeff_Line(order, i, v, ipiv) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of polynomial, it should be SIZE(x,2)-1
    INTEGER(I4B), INTENT(IN) :: i
    !! ith coefficients for lagrange polynomial
    REAL(DFP), INTENT(INOUT) :: v(:, :)
    !! LU decomposition of vandermonde matrix
    INTEGER(I4B), INTENT(IN) :: ipiv(:)
    !! inverse pivoting mapping, compes from LU decomposition
    REAL(DFP) :: ans(order + 1)
    !! coefficients
  END FUNCTION LagrangeCoeff_Line
END INTERFACE
```

:::note `order`
order of polynomial space.
:::

:::note `i`
ith polynomial
:::

:::note `v`

- LU decomposition of Vandermonde matrix
- The jth col of v denotes the values of basis function on interpolation points.
- The ith row of v denotes the values of all basis function on ith interpolation points.
:::

:::note `ipiv`
`ipiv` is returned by Lapack when performing `LU` decomposition.
:::

:::note `ans`
`order+1` coefficients of ith Lagrange polynomial.
:::

</TabItem>

<TabItem value="example" label="️܀ See example">

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 4

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE FUNCTION LagrangeCoeff_Line(order, xij) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of polynomial, it should be SIZE(xij,2)-1
    REAL(DFP), INTENT(IN) :: xij(:, :)
    !! points in xij format, size(xij,2) = order+1
    REAL(DFP) :: ans(order + 1, order + 1)
    !! coefficients
    !! jth column of ans corresponds to the coeff of lagrange polynomial
    !! at the jth point
  END FUNCTION LagrangeCoeff_Line
END INTERFACE
```

:::note `xij`
Interpolation points. SIZE(xij, 1) is 1. SIZE(xij, 2) should be equal to order+1.
:::

:::note `order`
order denotes the order of polynomial space.
:::

:::note `ans`
The jth col of `ans` denotes the `order+1` coefficents of jth polynomial.
:::

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE131 from "./_LagrangeCoeff_Line_test_2.md";

<EXAMPLE131 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interace 5

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE LagrangeCoeff_Line
  MODULE FUNCTION LagrangeCoeff_Line5(order, xij, orthopol, alpha, &
    & beta, lambda) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of polynomial, it should be SIZE(xij,2)-1
    REAL(DFP), INTENT(IN) :: xij(:, :)
    !! points in xij format, size(xij,2) = order+1
    INTEGER(I4B), INTENT(IN) :: orthopol
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
    REAL(DFP) :: ans(order + 1, order + 1)
    !! coefficients
    !! jth column of ans corresponds to the coeff of lagrange polynomial
    !! at the jth point
  END FUNCTION LagrangeCoeff_Line5
END INTERFACE LagrangeCoeff_Line
```

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
The jth col of `ans` denotes the `order+1` coefficents of jth polynomial.
:::

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE144 from "./_LagrangeCoeff_Line_test_3.md";

<EXAMPLE144 />

</TabItem>

<TabItem value="example2" label="Example 2">

import EXAMPLE219 from "./_LagrangeCoeff_Line_test_4.md";

<EXAMPLE219 />

</TabItem>

<TabItem value="example3" label="Example 3">

import EXAMPLE227 from "./_LagrangeCoeff_Line_test_5.md";

<EXAMPLE227 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
