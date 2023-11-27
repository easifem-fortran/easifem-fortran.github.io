# QuadraturePoint

Returns quadrature points on hexahedron.

## Interface 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE QuadraturePoint_Hexahedron
  MODULE FUNCTION QuadraturePoint_Hexahedron1( &
    & order, &
    & quadType, &
    & xij, &
    & alpha, &
    & beta, &
    & lambda) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of integrand in x, y, and z direction
    INTEGER(I4B), INTENT(IN) :: quadType
    !! quadrature point type
    !! GaussLegendre
    !! GaussLegendreLobatto
    !! GaussLegendreRadauLeft
    !! GaussLegendreRadauRight
    !! GaussChebyshev1
    !! GaussChebyshev1Lobatto
    !! GaussChebyshev1RadauLeft
    !! GaussChebyshev1RadauRight
    !! GaussUltraspherical
    !! GaussUltrasphericalLobatto
    !! GaussUltrasphericalRadauLeft
    !! GaussUltrasphericalRadauRight
    !! GaussJacobi
    !! GaussJacobiLobatto
    !! GaussJacobiRadauLeft
    !! GaussJacobiRadauRight
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! nodal coordiantes of hexahedron in xij format
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda
    !! Ultraspherical parameter
    REAL(DFP), ALLOCATABLE :: ans(:, :)
    !! quadrature points in xij format
  END FUNCTION QuadraturePoint_Hexahedron1
END INTERFACE QuadraturePoint_Hexahedron
```

:::info `order`
:::

`order` of accuracy in x, y, and z directions.

:::info `xij`
:::

- `xij` contains nodal coordinates of hexahedron in `xij` format.
  - The number of rows in `xij` is 3
  - The number of columns in `xij` is 8
  - If xij is absent then biunit hexahedron is assumed.

:::info `quadType`
:::

- `quadType` is quadrature point type, it can take following values
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

:::info `alpha, beta, lambda`
:::

- `alpha` and `beta` are parameters for Jacobi quadrature points
- `lambda` is the parameter for Ultraspherical quadrature points

</TabItem>

<TabItem value="example" label="️܀ Example 1">

import EXAMPLE14 from "./_QuadraturePoint_Hexahedron_test_1.md";

<EXAMPLE14 />

</TabItem>

<TabItem value="example2" label="Example 2">

import EXAMPLE34 from "./_QuadraturePoint_Hexahedron_test_2.md";

<EXAMPLE34 />

</TabItem>

<TabItem value="example3" label="Example 3">

import EXAMPLE41 from "./_QuadraturePoint_Hexahedron_test_3.md";

<EXAMPLE41 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

```fortran
INTERFACE QuadraturePoint_Hexahedron
  MODULE FUNCTION QuadraturePoint_Hexahedron2(  &
    & p, q, r, &
    & quadType1, quadType2, quadType3, &
    & xij, &
    & alpha1, beta1, lambda1, &
    & alpha2, beta2, lambda2, &
    & alpha3, beta3, lambda3 &
    & ) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: p
    !! order of integrand in x direction
    INTEGER(I4B), INTENT(IN) :: q
    !! order of  integrand in y direction
    INTEGER(I4B), INTENT(IN) :: r
    !! order of  integrand in z direction
    INTEGER(I4B), INTENT(IN) :: quadType1, quadType2, quadType3
    !! quadrature point type in x direction
    !! Equidistance
    !! GaussLegendre
    !! GaussLegendreLobatto
    !! GaussLegendreRadauLeft
    !! GaussLegendreRadauRight
    !! GaussChebyshev1
    !! GaussChebyshev1Lobatto
    !! GaussChebyshev1RadauLeft
    !! GaussChebyshev1RadauRight
    !! GaussUltraspherical
    !! GaussUltrasphericalLobatto
    !! GaussUltrasphericalRadauLeft
    !! GaussUltrasphericalRadauRight
    !! GaussJacobi
    !! GaussJacobiLobatto
    !! GaussJacobiRadauLeft
    !! GaussJacobiRadauRight
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! four vertices of quadrangle in xij format
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha1, beta1, lambda1
    !! Jacobi parameter and Ultraspherical parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha2, beta2, lambda2
    !! Jacobi parameter and Ultraspherical parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha3, beta3, lambda3
    !! Jacobi parameter and Ultraspherical parameter
    REAL(DFP), ALLOCATABLE :: ans(:, :)
    !! interpolation points in xij format
  END FUNCTION QuadraturePoint_Hexahedron2
END INTERFACE QuadraturePoint_Hexahedron
```

:::info `p,q,r`
:::

Order of accuracy in x, y, and z directions.

:::info `quadType1`, `quadType2`, `quadType3`
:::

Quadrature type in x, y, and z direction. It can take following values

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

:::info `alpha`, `beta`, and `lambda`
:::

These are parameters of Jacobi and Ultraspherical quadrature points.

## Interface 3

```fortran
INTERFACE QuadraturePoint_Hexahedron
  MODULE FUNCTION QuadraturePoint_Hexahedron3(nips, quadType, &
    & xij, alpha, beta, lambda) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: nips(1)
    !! number of integration points in x, y, and z direction
    INTEGER(I4B), INTENT(IN) :: quadType
    !! interpolation point type
    !! GaussLegendre
    !! GaussLegendreLobatto
    !! GaussLegendreRadauLeft
    !! GaussLegendreRadauRight
    !! GaussChebyshev1
    !! GaussChebyshev1Lobatto
    !! GaussChebyshev1RadauLeft
    !! GaussChebyshev1RadauRight
    !! GaussUltraspherical
    !! GaussUltrasphericalLobatto
    !! GaussUltrasphericalRadauLeft
    !! GaussUltrasphericalRadauRight
    !! GaussJacobi
    !! GaussJacobiLobatto
    !! GaussJacobiRadauLeft
    !! GaussJacobiRadauRight
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! four vertices of quadrangle in xij format
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda
    !! Ultraspherical parameter
    REAL(DFP), ALLOCATABLE :: ans(:, :)
    !! interpolation points in xij format
  END FUNCTION QuadraturePoint_Hexahedron3
END INTERFACE QuadraturePoint_Hexahedron
```

:::info `nips`
:::

Number of integration points in x, y, and z direction.

## Interface 4

```fortran
INTERFACE QuadraturePoint_Hexahedron
  MODULE FUNCTION QuadraturePoint_Hexahedron4(  &
    & nipsx, nipsy, nipsz, &
    & quadType1, quadType2, quadType3, &
    & xij, &
    & alpha1, beta1, lambda1, &
    & alpha2, beta2, lambda2, &
    & alpha3, beta3, lambda3 &
    & ) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: nipsx(1)
    !! order of integrand in x direction
    INTEGER(I4B), INTENT(IN) :: nipsy(1)
    !! order of  integrand in y direction
    INTEGER(I4B), INTENT(IN) :: nipsz(1)
    !! order of  integrand in z direction
    INTEGER(I4B), INTENT(IN) :: quadType1, quadType2, quadType3
    !! quadrature point type in x, y, and z direction
    !! Equidistance
    !! GaussLegendre
    !! GaussLegendreLobatto
    !! GaussLegendreRadauLeft
    !! GaussLegendreRadauRight
    !! GaussChebyshev1
    !! GaussChebyshev1Lobatto
    !! GaussChebyshev1RadauLeft
    !! GaussChebyshev1RadauRight
    !! GaussUltraspherical
    !! GaussUltrasphericalLobatto
    !! GaussUltrasphericalRadauLeft
    !! GaussUltrasphericalRadauRight
    !! GaussJacobi
    !! GaussJacobiLobatto
    !! GaussJacobiRadauLeft
    !! GaussJacobiRadauRight
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! four vertices of quadrangle in xij format
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha1, beta1, lambda1
    !! Jacobi and Ultraspherical parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha2, beta2, lambda2
    !! Jacobi and Ultraspherical parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha3, beta3, lambda3
    !! Jacobi and Ultraspherical parameter
    REAL(DFP), ALLOCATABLE :: ans(:, :)
    !! interpolation points in xij format
  END FUNCTION QuadraturePoint_Hexahedron4
END INTERFACE QuadraturePoint_Hexahedron
```

:::info `nipsx`, `nipsy`, `nipsz`
:::

Number of integration points in x, y, and z direction.
