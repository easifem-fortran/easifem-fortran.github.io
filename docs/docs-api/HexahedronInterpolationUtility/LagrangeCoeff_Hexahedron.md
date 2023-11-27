# LagrangeCoeff

Returns the coefficients of Lagrange polynomials for monomial basis.

A Lagrange polynomial in terms of monomials is given by

$$
l(x,y,z) = \sum_{a,b,c}^{p,q,r} c_{a,b,c} x^{a} y^{b} z^{c}
$$

A Lagrange polynomial in terms of general basis is given by

$$
l(x,y,z) = \sum_{a,b,c}^{p,q,r} c_{a,b,c} \phi_{a,b,c}
$$

:::note
This subroutine returns $c_{a,b,c}$ for Lagrange polynomial.
:::

For example, if we select monomial basis: 

$$
1, x, y, xy, z, xz, yz, xyz 
$$

then for order = 1 (linear), we have following results:


coeff 

| basis | $l_1$  | $l_2$  | $l_3$  | $l_4$  | $l_5$  | $l_6$  | $l_7$ | $l_8$  |
| ----- | ------ | ------ | ------ | ------ | ------ | ------ | ----- | ------ |
| 1     | 0.125  | 0.125  | 0.125  | 0.125  | 0.125  | 0.125  | 0.125 | 0.125  |
| x     | -0.125 | 0.125  | 0.125  | -0.125 | -0.125 | 0.125  | 0.125 | -0.125 |
| y     | -0.125 | -0.125 | 0.125  | 0.125  | -0.125 | -0.125 | 0.125 | 0.125  |
| xy    | 0.125  | -0.125 | 0.125  | -0.125 | 0.125  | -0.125 | 0.125 | -0.125 |
| z     | -0.125 | -0.125 | -0.125 | -0.125 | 0.125  | 0.125  | 0.125 | 0.125  |
| xz    | 0.125  | -0.125 | -0.125 | 0.125  | -0.125 | 0.125  | 0.125 | -0.125 |
| yz    | 0.125  | 0.125  | -0.125 | -0.125 | -0.125 | -0.125 | 0.125 | 0.125  |
| xyz   | -0.125 | 0.125  | -0.125 | 0.125  | 0.125  | -0.125 | 0.125 | -0.125 |


## Interface 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```fortran
INTERFACE LagrangeCoeff_Hexahedron
  MODULE FUNCTION LagrangeCoeff_Hexahedron1(order, i, xij) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of polynomial
    INTEGER(I4B), INTENT(IN) :: i
    !! ith coefficients for lagrange polynomial
    REAL(DFP), INTENT(IN) :: xij(:, :)
    !! interpolation points in xij format
    !! number of rows in xij is 3
    !! number of columns should be equal to the number degree of freedom
    REAL(DFP) :: ans(SIZE(xij, 2))
    !! coefficients
  END FUNCTION LagrangeCoeff_Hexahedron1
END INTERFACE LagrangeCoeff_Hexahedron
```

## Interface 2

```fortran
INTERFACE LagrangeCoeff_Hexahedron
  MODULE FUNCTION LagrangeCoeff_Hexahedron2(order, i, v, isVandermonde) &
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
  END FUNCTION LagrangeCoeff_Hexahedron2
END INTERFACE LagrangeCoeff_Hexahedron
```


## Interface 3

```fortran
INTERFACE LagrangeCoeff_Hexahedron
  MODULE FUNCTION LagrangeCoeff_Hexahedron3(order, i, v, ipiv) RESULT(ans)
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
  END FUNCTION LagrangeCoeff_Hexahedron3
END INTERFACE LagrangeCoeff_Hexahedron
```

## Interface 4

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE LagrangeCoeff_Hexahedron
  MODULE FUNCTION LagrangeCoeff_Hexahedron4(order, xij, basisType, &
    & refHexahedron, alpha, beta, lambda) RESULT(ans)
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
    CHARACTER(*), OPTIONAL, INTENT(IN) :: refHexahedron
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
  END FUNCTION LagrangeCoeff_Hexahedron4
END INTERFACE LagrangeCoeff_Hexahedron
```

:::info `order`
order of polynomial
:::

:::info `xij`
interpolation points for Lagrange polynomials. The number of rows of xij should be 3. The number of columns of xij should be equal to the total number of degrees of freedom.
:::

:::info `basisType`
- Monomials
- Jacobi
- Legendre
- Chebyshev
- Ultraspherical
- Heirarchical
:::

:::info `refHexahedron`
Reference hexahedron can be `UNIT` or `BIUNIT`.
:::

:::info `alpha, beta, lambda`
- `alpha` and `beta` are needed when basisType is Jacobi
- `lambda` is needed when basisType is Ultraspherical
:::


</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE77 from "./_LagrangeCoeff_Hexahedron_test_1.md";

<EXAMPLE77 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>


## Interface 5

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE LagrangeCoeff_Hexahedron
  MODULE FUNCTION LagrangeCoeff_Hexahedron5(&
    & p, &
    & q, &
    & r, &
    & xij, &
    & basisType1, &
    & basisType2, &
    & basisType3, &
    & alpha1, &
    & beta1, &
    & lambda1, &
    & alpha2, &
    & beta2, &
    & lambda2, &
    & alpha3, &
    & beta3, &
    & lambda3, &
    & refHexahedron &
    & ) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: p
    !! order of polynomial
    INTEGER(I4B), INTENT(IN) :: q
    !! order of polynomial
    INTEGER(I4B), INTENT(IN) :: r
    !! order of polynomial
    REAL(DFP), INTENT(IN) :: xij(:, :)
    !! These are interpolation points in xij format, size(xij,2)
    INTEGER(I4B), INTENT(IN) :: basisType1
    !! basis type in x direction
    !! Monomials
    !! Jacobi
    !! Legendre
    !! Chebyshev
    !! Ultraspherical
    !! Heirarchical
    INTEGER(I4B), INTENT(IN) :: basisType2
    !! basis type in y direction
    !! Monomials
    !! Jacobi
    !! Legendre
    !! Chebyshev
    !! Ultraspherical
    !! Heirarchical
    INTEGER(I4B), INTENT(IN) :: basisType3
    !! basis type in z direction
    !! Monomials
    !! Jacobi
    !! Legendre
    !! Chebyshev
    !! Ultraspherical
    !! Heirarchical
    REAL(DFP), INTENT(IN) :: alpha1
    !! This parameter is needed when basisType1 is Jacobi
    REAL(DFP), INTENT(IN) :: beta1
    !! This parameter is needed when basisType1 is Jacobi
    REAL(DFP), INTENT(IN) :: lambda1
    !! This parameter is needed when basisType1 is Ultraspherical
    REAL(DFP), INTENT(IN) :: alpha2
    !! This parameter is needed when basisType2 is Jacobi
    REAL(DFP), INTENT(IN) :: beta2
    !! This parameter is needed when basisType2 is Jacobi
    REAL(DFP), INTENT(IN) :: lambda2
    !! This parameter is needed when basisType2 is Ultraspherical
    REAL(DFP), INTENT(IN) :: alpha3
    !! This parameter is needed when basisType3 is Jacobi
    REAL(DFP), INTENT(IN) :: beta3
    !! This parameter is needed when basisType3 is Jacobi
    REAL(DFP), INTENT(IN) :: lambda3
    !! This parameter is needed when basisType3 is Ultraspherical
    CHARACTER(*), OPTIONAL, INTENT(IN) :: refHexahedron
    !! UNIT
    !! BIUNIT
    REAL(DFP) :: ans(SIZE(xij, 2), SIZE(xij, 2))
    !! coefficients
  END FUNCTION LagrangeCoeff_Hexahedron5
END INTERFACE LagrangeCoeff_Hexahedron
```

:::info `p, q, r`
- p is order in x direction
- q is order in y direction
- r is order in z direction
:::

:::info `xij`
xij is the interpolation points. The number of rows in xij is 3, and the number of columns in xij should be equal to the total number of degrees of freedom.
:::


:::info `basisType1, basisType2, basisType3`
basisType in x, y, and z direction. It can take following values:
- Monomials
- Jacobi
- Legendre
- Chebyshev
- Ultraspherical
- Heirarchical
:::

:::info `alpha1, beta1, lambda1`
- `alpha1` and `beta1` are needed when basisType1 is Jacobi
- `lambda1` is needed when basisType1 is Ultraspherical
:::

:::info `alpha2, beta2, lambda2`
- `alpha2` and `beta2` are needed when basisType2 is Jacobi
- `lambda2` is needed when basisType2 is Ultraspherical
:::

:::info `alpha3, beta, lambda3`
- `alpha3` and `beta3` are needed when basisType3 is Jacobi
- `lambda3` is needed when basisType3 is Ultraspherical
:::

:::info `refHexahedron`
Reference hexahedron can be `UNIT` or `BIUNIT`.
:::

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE178 from "./_LagrangeCoeff_Hexahedron_test_4.md";

<EXAMPLE178 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>



