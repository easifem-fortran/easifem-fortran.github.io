---
sidebar_label: QuadraturePoint
---


# QuadraturePoint_Line

This routine returns the quadrature points on the line.

Calling example:

```fortran
ans = QuadraturePoint_Line1( &
  & order, &
  & quadType, &
  & layout, &
  & xij, &
  & alpha, &
  & beta, &
  & lambda) 
```

:::note `ans`
The last row of `ans` contains the weights. The first few rows contain the quadrature points. If `xij` is absent then `ans` has two rows. If `xij` is present then `ans` has `SIZE(xij, 1)+1` rows.
:::

- `order` is order of integrand
- `xij` contains nodal coordinates of line in xij format.
- SIZE(xij,1) = nsd, and SIZE(xij,2)=2
- If xij is absent then [-1,1] is used
- `quadType` is interpolation point type, it can take following values
  - `GaussLegendre`
  - `GaussLegendreLobatto`
  - `GaussLegendreRadauLeft`
  - `GaussLegendreRadauRight`
  - `GaussChebyshev`
  - `GaussChebyshevLobatto`
  - `GaussChebyshevRadauLeft`
  - `GaussChebyshevRadauRight`
  - `GaussJacobi`
  - `GaussJacobiLobatto`
  - `GaussJacobiRadauLeft`
  - `GaussJacobiRadauRight`
  - `GaussUltraspherical`
  - `GaussUltrasphericalLobatto`
  - `GaussUltrasphericalRadauLeft`
  - `GaussUltrasphericalRadauRight`
- `layout` specifies the arrangement of points. Following options are possible:
  - `layout=VEFC` vertex, edge, face, cell, in this case first two points are boundary points, remaining (from 3 to n) are internal points in increasing order.
  - `layout=INCREASING` points are arranged in increasing order

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE QuadraturePoint_Line
  MODULE FUNCTION QuadraturePoint_Line1( &
    & order, &
    & quadType, &
    & layout, &
    & xij, &
    & alpha, &
    & beta, &
    & lambda) RESULT(ans)
    !!
    INTEGER(I4B), INTENT(IN) :: order
    !! Order of interpolation
    INTEGER(I4B), INTENT(IN) :: quadType
    !! Quadrature point type
    !! Equidistance,
    !! GaussLegendre,
    !! GaussLegendreLobatto,
    !! GaussChebyshev,
    !! GaussChebyshevLobatto,
    !! GaussJacobi,
    !! GaussJacobiLobatto
    CHARACTER(*), INTENT(IN) :: layout
    !! "VEFC"
    !! "INCREASING"
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! domain of interpolation
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda
    !! Ultraspherical parameter
    REAL(DFP), ALLOCATABLE :: ans(:, :)
    !! quadrature points
    !! If xij is present then the number of rows in ans
    !! is same as size(xij,1) + 1.
    !! If xij is not present then the number of rows in
    !! ans is 2
    !! The last row of ans contains the weights
    !! The first few rows contains the quadrature points
  END FUNCTION QuadraturePoint_Line1
END INTERFACE QuadraturePoint_Line
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE54 from "./_QuadraturePoint_Line_test_1.md";

<EXAMPLE54 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE QuadraturePoint_Line
  MODULE FUNCTION QuadraturePoint_Line2( &
    & order, &
    & quadType, &
    & xij, &
    & layout, &
    & alpha, &
    & beta, &
    & lambda) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of interpolation
    INTEGER(I4B), INTENT(IN) :: quadType
    !! Quadrature point type
    !! Equidistance
    !! GaussLegendre
    !! GaussLegendreLobatto
    !! GaussChebyshev,
    !! GaussChebyshevLobatto
    !! GaussJacobi
    !! GaussJacobiLobatto
    REAL(DFP), INTENT(IN) :: xij(2)
    !! end points
    CHARACTER(*), INTENT(IN) :: layout
    !! "VEFC"
    !! "INCREASING"
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda
    !! Ultraspherical parameter
    REAL(DFP), ALLOCATABLE :: ans(:,:)
  END FUNCTION QuadraturePoint_Line2
END INTERFACE QuadraturePoint_Line
```

</TabItem>

<TabItem value="example" label="️܀ See example">

See above example.

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
