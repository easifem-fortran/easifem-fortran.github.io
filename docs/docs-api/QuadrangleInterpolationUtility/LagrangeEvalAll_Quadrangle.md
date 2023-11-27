# LagrangeEvalAll

Evaluate Lagrange polynomials on Quadrangle.

## Interface 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE LagrangeEvalAll_Quadrangle
  MODULE FUNCTION LagrangeEvalAll_Quadrangle1( &
    & order, &
    & x, &
    & xij, &
    & refQuadrangle, &
    & coeff, &
    & firstCall, &
    & basisType, &
    & alpha, &
    & beta, &
    & lambda) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of Lagrange polynomials
    REAL(DFP), INTENT(IN) :: x(2)
    !! point of evaluation
    !! x(1) is x coord
    !! x(2) is y coord
    REAL(DFP), INTENT(INOUT) :: xij(:, :)
    !! Interpolation points
    !! The number of rows in xij can be 2 or 3
    !! The number of columns in xij should be equal to total
    !! degree of freedom
    CHARACTER(*), INTENT(IN) :: refQuadrangle
    !! It should be BIUNIT
    REAL(DFP), OPTIONAL, INTENT(INOUT) :: coeff(SIZE(xij, 2), SIZE(xij, 2))
    !! coefficient of Lagrange polynomials
    LOGICAL(LGT), OPTIONAL :: firstCall
    !! If firstCall is true, then coeff will be computed and returned
    !! by this routine.
    !! If firstCall is False, then coeff should be given, which will be
    !! used.
    !! Default value of firstCall is True
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: basisType
    !! Monomials *Default
    !! Legendre
    !! Lobatto
    !! Chebyshev
    !! Jacobi
    !! Ultraspherical
    !! Heirarchical
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda
    !! Ultraspherical parameter
    REAL(DFP) :: ans(SIZE(xij, 2))
    !! Value of n+1 Lagrange polynomials at point x
  END FUNCTION LagrangeEvalAll_Quadrangle1
END INTERFACE LagrangeEvalAll_Quadrangle
```

</TabItem>

<TabItem value="equidistance" label="️܀ Monomial">

import EXAMPLE10 from "./_LagrangeEvalAll_Quadrangle_test_1.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="jacobi" label="Legendre">

import EXAMPLE29 from "./_LagrangeEvalAll_Quadrangle_test_2.md";

<EXAMPLE29 />

</TabItem>

<TabItem value="heirarchical" label="Chebyshev">

import EXAMPLE37 from "./_LagrangeEvalAll_Quadrangle_test_3.md";

<EXAMPLE37 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE LagrangeEvalAll_Quadrangle
  MODULE FUNCTION LagrangeEvalAll_Quadrangle2( &
    & order, &
    & x, &
    & xij, &
    & refQuadrangle, &
    & coeff, &
    & firstCall, &
    & basisType, &
    & alpha, &
    & beta, &
    & lambda &
    & ) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! Order of Lagrange polynomials
    REAL(DFP), INTENT(IN) :: x(:, :)
    !! Point of evaluation
    !! x(1, :) is x coord
    !! x(2, :) is y coord
    REAL(DFP), INTENT(INOUT) :: xij(:, :)
    !! Interpolation points
    CHARACTER(*), INTENT(IN) :: refQuadrangle
    !! Reference quadrangle, it should be BIUNIT
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
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda
    !! Ultraspherical parameter
    REAL(DFP) :: ans(SIZE(x, 2), SIZE(xij, 2))
    !! Value of n+1 Lagrange polynomials at point x
  END FUNCTION LagrangeEvalAll_Quadrangle2
END INTERFACE LagrangeEvalAll_Quadrangle
```

</TabItem>

<TabItem value="equidistance" label="️܀ Monomials">

import EXAMPLE50 from "./_LagrangeEvalAll_Quadrangle_test_4.md";

<EXAMPLE50 />

</TabItem>

<TabItem value="jacobi" label="Legendre">

import EXAMPLE70 from "./_LagrangeEvalAll_Quadrangle_test_5.md";

<EXAMPLE70 />

</TabItem>

<TabItem value="heirarchical" label="Heirarchical">

import EXAMPLE77 from "./_LagrangeEvalAll_Quadrangle_test_6.md";

<EXAMPLE77 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
