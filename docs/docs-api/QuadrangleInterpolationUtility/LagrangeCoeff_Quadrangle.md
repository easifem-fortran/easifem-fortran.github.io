# LagrangeCoeff

Returns the coefficients for lagrange polynomial.

This function returns the coefficient of basis functions.

$$
p_{n}(x,y) = \sum_{a=0}^{p}\sum_{b=0}^{q}{c_{a,b}x^{a}y^{b}}
$$

This routine returns the coefficients, $c_{a,b}$.

For example, for Lagrange polynomial of order 2, on equidistance grid, we have following coefficients of Monomials basis:

coeff:

| Basis  | $l_1$  | $l_2$  |  $l_3$ | $l_4$ | $l_5$ | $l_6$  | $l_7$  | $l_8$  | $l_9$ |
| --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |
| $1$  | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| $x$ | 0 | 0 | 0 | 0 | 0 | 0.5 | 0 | -0.5 | -0 |
| $x^2$ | 0 | 0 | -0 | 0 | 0 | 0.5 | 0 | 0.5 | -1 |
| $y$ | 0 | 0 | 0 | 0 | -0.5 | 0 | 0.5 | 0 | -0 |
| $xy$ | 0.25 | -0.25 | 0.25 | -0.25 | 0 | 0 | 0 | 0 | -0 |
| $x^2 y$ | -0.25 | -0.25 | 0.25 | 0.25 | 0.5 | -0 | -0.5 | 0 | -0 |
| $y^2$ | 0 | 0 | 0 | 0 | 0.5 | 0 | 0.5 | 0 | -1 |
| $xy^2$ | -0.25 | 0.25 | 0.25 | -0.25 | 0 | -0.5 | 0 | 0.5 | -0 |
| $x^2 y^2$ | 0.25 | 0.25 | 0.25 | 0.25 | -0.5 | -0.5 | -0.5 | -0.5 | 1 |

## Interface 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE FUNCTION LagrangeCoeff_Quadrangle(order, i, xij) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of polynomial
    INTEGER(I4B), INTENT(IN) :: i
    !! ith coefficients for lagrange polynomial
    REAL(DFP), INTENT(IN) :: xij(:, :)
    !! points in xij format, size(xij,2)
    REAL(DFP) :: ans(SIZE(xij, 2))
    !! coefficients
  END FUNCTION LagrangeCoeff_Quadrangle
END INTERFACE
```

:::info `order`
Order of Lagrange polynomial.
:::

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE40 from "./_LagrangeCoeff_Quadrangle_test_3.md";

<EXAMPLE40 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE FUNCTION LagrangeCoeff_Quadrangle(order, i, v, isVandermonde) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of polynomial, it should be SIZE(v,2)-1
    INTEGER(I4B), INTENT(IN) :: i
    !! coefficient for ith lagrange polynomial
    REAL(DFP), INTENT(IN) :: v(:, :)
    !! vandermonde matrix size should be (order+1,order+1)
    LOGICAL(LGT), INTENT(IN) :: isVandermonde
    !! This is just to resolve interface issue
    REAL(DFP) :: ans(SIZE(v, 1))
    !! coefficients
  END FUNCTION LagrangeCoeff_Quadrangle
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE78 from "./_LagrangeCoeff_Quadrangle_test_4.md";

<EXAMPLE78 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 3

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE FUNCTION LagrangeCoeff_Quadrangle(order, i, v, ipiv) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of polynomial, it should be SIZE(x,2)-1
    INTEGER(I4B), INTENT(IN) :: i
    !! ith coefficients for lagrange polynomial
    REAL(DFP), INTENT(INOUT) :: v(:, :)
    !! LU decomposition of vandermonde matrix
    INTEGER(I4B), INTENT(IN) :: ipiv(:)
    !! inverse pivoting mapping, compes from LU decomposition
    REAL(DFP) :: ans(SIZE(v, 1))
    !! coefficients
  END FUNCTION LagrangeCoeff_Quadrangle
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE115 from "./_LagrangeCoeff_Quadrangle_test_5.md";

<EXAMPLE115 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 4

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE LagrangeCoeff_Quadrangle
  MODULE FUNCTION LagrangeCoeff_Quadrangle4(order, xij, basisType, &
    & refQuadrangle, alpha, beta, lambda) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of polynomial
    REAL(DFP), INTENT(IN) :: xij(:, :)
    !! points in xij format, size(xij,2)
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: basisType
    !! Monomials
    !! Jacobi
    !! Legendre
    !! Chebyshev
    !! Ultraspherical
    !! Heirarchical
    CHARACTER(*), OPTIONAL, INTENT(IN) :: refQuadrangle
    !! UNIT
    !! BIUNIT
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha
    !! This parameter is needed when basisType is Jacobi
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta
    !! This parameter is needed when basisType is Jacobi
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda
    !! This parameter is needed when basisType is Ultraspherical
    REAL(DFP) :: ans(SIZE(xij, 2), SIZE(xij, 2))
    !! coefficients
  END FUNCTION LagrangeCoeff_Quadrangle4
END INTERFACE LagrangeCoeff_Quadrangle
```

:::info `order`
order of polynomial
:::

:::info `xij`
interpolation points for Lagrange polynomials. The number of rows of xij should be 2 or 3.
The number of columns of xij should be equal to the total number of degrees of freedom.
:::

:::info `basisType`

- Monomials
- Jacobi
- Legendre
- Chebyshev
- Ultraspherical
- Heirarchical
:::

:::info `refQuadrangle`
Reference Quadrangle can be `UNIT` or `BIUNIT`.
:::

:::info `alpha, beta, lambda`

- `alpha` and `beta` are needed when basisType is Jacobi
- `lambda` is needed when basisType is Ultraspherical
:::

</TabItem>

<TabItem value="example" label="️܀ Example 1">

import EXAMPLE138 from "./_LagrangeCoeff_Quadrangle_test_1.md";

<EXAMPLE138 />

</TabItem>

<TabItem value="example2" label="܀ Example 2">

import EXAMPLE146 from "./_LagrangeCoeff_Quadrangle_test_2.md";

<EXAMPLE146 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 5

```fortran
INTERFACE LagrangeCoeff_Quadrangle
  MODULE FUNCTION LagrangeCoeff_Quadrangle5(  &
    & p,  &
    & q,  &
    & xij, &
    & basisType1, &
    & basisType2, &
    & refQuadrangle,  &
    & alpha1, &
    & beta1,  &
    & lambda1, &
    & alpha2,  &
    & beta2,  &
    & lambda2) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: p
    !! order of polynomial in x direction
    INTEGER(I4B), INTENT(IN) :: q
    !! order of polynomial in y direction
    REAL(DFP), INTENT(IN) :: xij(:, :)
    !! points in xij format, size(xij,2)
    INTEGER(I4B), INTENT(IN) :: basisType1
    !! basisType in x direction
    !! Monomials
    !! Jacobi
    !! Legendre
    !! Chebyshev
    !! Ultraspherical
    !! Heirarchical
    INTEGER(I4B), INTENT(IN) :: basisType2
    !! basisType in y direction
    !! Monomials
    !! Jacobi
    !! Legendre
    !! Chebyshev
    !! Ultraspherical
    !! Heirarchical
    CHARACTER(*), OPTIONAL, INTENT(IN) :: refQuadrangle
    !! UNIT
    !! BIUNIT
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha1
    !! This parameter is needed when basisType is Jacobi
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta1
    !! This parameter is needed when basisType is Jacobi
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda1
    !! This parameter is needed when basisType is Ultraspherical
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha2
    !! This parameter is needed when basisType is Jacobi
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta2
    !! This parameter is needed when basisType is Jacobi
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda2
    !! This parameter is needed when basisType is Ultraspherical
    REAL(DFP) :: ans(SIZE(xij, 2), SIZE(xij, 2))
    !! coefficients
  END FUNCTION LagrangeCoeff_Quadrangle5
END INTERFACE LagrangeCoeff_Quadrangle
```

:::info `p, q, r`
order of polynomial in x, y and z direction.
:::

:::info `xij`
interpolation points for Lagrange polynomials. The number of rows of xij should be 2 or 3.
The number of columns of xij should be equal to the total number of degrees of freedom.
:::

:::info `basisType1`, `basisType2`

Basis type in x and y direction. They can take following values:

- Monomials
- Jacobi
- Legendre
- Chebyshev
- Ultraspherical
- Heirarchical
:::

:::info `refQuadrangle`
Reference Quadrangle can be `UNIT` or `BIUNIT`.
:::

:::info `alpha1, beta1, lambda1`

- `alpha1` and `beta1` are needed when `basisType1` is Jacobi
- `lambda1` is needed when `basisType1` is Ultraspherical
:::

:::info `alpha2, beta2, lambda2`

- `alpha2` and `beta2` are needed when `basisType2` is Jacobi
- `lambda2` is needed when `basisType2` is Ultraspherical
:::
