# LagrangeEvalAll

Evaluate Lagrange polynomials on triangle.

## Interface 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE LagrangeEvalAll_Triangle
  MODULE FUNCTION LagrangeEvalAll_Triangle1(order, x, xij, refTriangle, &
    & coeff, firstCall, basisType) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of Lagrange polynomials
    REAL(DFP), INTENT(IN) :: x(2)
    !! point of evaluation
    !! x(1) is x coord
    !! x(2) is y coord
    REAL(DFP), INTENT(INOUT) :: xij(:, :)
    !!
    CHARACTER(*), INTENT(IN) :: refTriangle
    !! interpolation points
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: coeff(SIZE(xij, 2), SIZE(xij, 2))
    !! coefficient of Lagrange polynomials
    LOGICAL(LGT), OPTIONAL :: firstCall
    !! If firstCall is true, then coeff will be made
    !! If firstCall is False, then coeff will be used
    !! Default value of firstCall is True
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: basisType
    !! Monomials *Default
    !! Orthogonal, Jacobi, Legendre, Lobatto, Ultraspherical all are same
    !! Heirarchical
    REAL(DFP) :: ans(SIZE(xij, 2))
    !! Value of n+1 Lagrange polynomials at point x
  END FUNCTION LagrangeEvalAll_Triangle1
END INTERFACE LagrangeEvalAll_Triangle
```

:::note `xij`
:::

`xij` is the interpolation points for Lagrange polynomials. `xij` is used for constructing the `coeff`. 


:::note `basisType`
:::

Type of basis functions used for constructing the Lagrange polynomial. Following values are allowed: 

- Monomials 
- Orthogonal, Jacobi, Legendre, Ultraspherical, are all the same. 
- Hierarchical

</TabItem>

<TabItem value="equidistance" label="️܀ Equidistance">

import EXAMPLE10 from "./_LagrangeEvalAll_Triangle_test_1.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="jacobi" label="Jacobi">

import EXAMPLE29 from "./_LagrangeEvalAll_Triangle_test_2.md";

<EXAMPLE29 />

</TabItem>

<TabItem value="heirarchical" label="Heirarchical">

import EXAMPLE37 from "./_LagrangeEvalAll_Triangle_test_3.md";

<EXAMPLE37 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE LagrangeEvalAll_Triangle
  MODULE FUNCTION LagrangeEvalAll_Triangle2(order, x, xij, refTriangle, &
    & coeff, firstCall, basisType) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! Order of Lagrange polynomials
    REAL(DFP), INTENT(IN) :: x(:, :)
    !! Point of evaluation
    !! x(1, :) is x coord
    !! x(2, :) is y coord
    REAL(DFP), INTENT(INOUT) :: xij(:, :)
    !! Interpolation points
    CHARACTER(*), INTENT(IN) :: refTriangle
    !! Reference triangle
    !! Biunit
    !! Unit
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: coeff(SIZE(xij, 2), SIZE(xij, 2))
    !! Coefficient of Lagrange polynomials
    LOGICAL(LGT), OPTIONAL :: firstCall
    !! If firstCall is true, then coeff will be made
    !! If firstCall is False, then coeff will be used
    !! Default value of firstCall is True
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: basisType
    !! Monomials *Default
    !! Jacobi=Dubiner
    !! Heirarchical
    REAL(DFP) :: ans(SIZE(x, 2), SIZE(xij, 2))
    !! Value of n+1 Lagrange polynomials at point x
  END FUNCTION LagrangeEvalAll_Triangle2
END INTERFACE LagrangeEvalAll_Triangle
```

</TabItem>

<TabItem value="equidistance" label="️܀ Equidistance">

import EXAMPLE50 from "./_LagrangeEvalAll_Triangle_test_4.md";

<EXAMPLE50 />

</TabItem>

<TabItem value="jacobi" label="Jacobi">

import EXAMPLE70 from "./_LagrangeEvalAll_Triangle_test_5.md";

<EXAMPLE70 />

</TabItem>

<TabItem value="heirarchical" label="Heirarchical">

import EXAMPLE77 from "./_LagrangeEvalAll_Triangle_test_6.md";

<EXAMPLE77 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
