# QuadraturePoint

This routine returns the quadrature points on Quadrangle.

Calling example:

```fortran
program main
ans = QuadraturePoint_Quadrangle(order, quadType, &
    & xij, alpha, beta, lambda)
end program main
```

## Interface

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE QuadraturePoint_Quadrangle
  MODULE FUNCTION QuadraturePoint_Quadrangle1(order, quadType, &
    & xij, alpha, beta, lambda) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of integrand in x and y direction
    INTEGER(I4B), INTENT(IN) :: quadType
    !! Quadrature point type
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
  END FUNCTION QuadraturePoint_Quadrangle1
END INTERFACE QuadraturePoint_Quadrangle
```

:::info `xij`
:::

- `xij` contains nodal coordinates of quadrangle in xij format.
- The number of rows in xij can be 2 or 3 (for 2D or 3D)
- The number of columns in xij is 4
- If xij is absent then biunit quadrangle is assumed.

:::info `quadType`
:::

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

:::info `alpha, beta, lambda`
:::

- `alpha` and `beta` are parameters for Jacobi quadrature points
- `lambda` is the parameter for Ultraspherical quadrature points

</TabItem>

<TabItem value="Equidistance" label="️܀ GaussLegendre">

import EXAMPLE63 from "./_QuadraturePoint_Quadrangle_test_1.md";

<EXAMPLE63 />

</TabItem>

<TabItem value="GaussLegendreLobatto" label="GaussLegendreLobatto">

import EXAMPLE71 from "./_QuadraturePoint_Quadrangle_test_2.md";

<EXAMPLE71 />

</TabItem>

<TabItem value="GaussLegendreRadauLeft" label="GaussLegendreRadauLeft">

import EXAMPLE79 from "./_QuadraturePoint_Quadrangle_test_3.md";

<EXAMPLE79 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

```fortran title="Interface"
INTERFACE QuadraturePoint_Quadrangle
  MODULE FUNCTION QuadraturePoint_Quadrangle2(  &
    & p, q, quadType1, quadType2, xij, alpha1, beta1, &
    & lambda1, alpha2, beta2, lambda2) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: p
    !! order of integrand in x direction
    INTEGER(I4B), INTENT(IN) :: q
    !! order of  integrand in y direction
    INTEGER(I4B), INTENT(IN) :: quadType1
    !! quadrature point type in x direction
    INTEGER(I4B), INTENT(IN) :: quadType2
    !! quadrature point type in y direction
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! four vertices of quadrangle in xij format
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha1
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta1
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda1
    !! Ultraspherical parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha2
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta2
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda2
    !! Ultraspherical parameter
    REAL(DFP), ALLOCATABLE :: ans(:, :)
    !! interpolation points in xij format
  END FUNCTION QuadraturePoint_Quadrangle2
END INTERFACE QuadraturePoint_Quadrangle
```

## Interface 3

```fortran
INTERFACE QuadraturePoint_Quadrangle
  MODULE FUNCTION QuadraturePoint_Quadrangle3(nips, quadType, &
    & xij, alpha, beta, lambda) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: nips(1)
    !! number of integration points in x and y direction
    INTEGER(I4B), INTENT(IN) :: quadType
    !! quadrature point type
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
  END FUNCTION QuadraturePoint_Quadrangle3
END INTERFACE QuadraturePoint_Quadrangle
```

## Interface 4

```fortran
INTERFACE QuadraturePoint_Quadrangle
  MODULE FUNCTION QuadraturePoint_Quadrangle4(  &
    & nipsx, nipsy, quadType1, quadType2, xij, alpha1, beta1, &
    & lambda1, alpha2, beta2, lambda2) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: nipsx(1)
    !! order of integrand in x direction
    INTEGER(I4B), INTENT(IN) :: nipsy(1)
    !! order of  integrand in y direction
    INTEGER(I4B), INTENT(IN) :: quadType1
    !! quadrature point type in x direction
    INTEGER(I4B), INTENT(IN) :: quadType2
    !! quadrature point type in y direction
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
    !! four vertices of quadrangle in xij format
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha1
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta1
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda1
    !! Ultraspherical parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha2
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta2
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda2
    !! Ultraspherical parameter
    REAL(DFP), ALLOCATABLE :: ans(:, :)
    !! interpolation points in xij format
  END FUNCTION QuadraturePoint_Quadrangle4
END INTERFACE QuadraturePoint_Quadrangle
```
