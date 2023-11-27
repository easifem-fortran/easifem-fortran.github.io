# Initiate

This subroutine constructs the quadrature points.

## Interface 1

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE Initiate
  MODULE SUBROUTINE quad_initiate3(obj, refElem, order, quadratureType,  &
    & alpha, beta, lambda)
    TYPE(QuadraturePoint_), INTENT(INOUT) :: obj
    !! Total number of xidimension
    CLASS(ReferenceElement_), INTENT(IN) :: refElem
    !! Reference element
    INTEGER(I4B), INTENT(IN) :: order
    !! order of integrand
    CHARACTER(*), INTENT(IN) :: quadratureType
    !! Type of quadrature points
    !! "GaussLegendre"
    !! "GaussLegendreLobatto"
    !! "GaussLegendreRadau", "GaussLegendreRadauLeft"
    !! "GaussLegendreRadauRight"
    !! "GaussChebyshev"
    !! "GaussChebyshevLobatto"
    !! "GaussChebyshevRadau", "GaussChebyshevRadauLeft"
    !! "GaussChebyshevRadauRight"
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda
    !! Ultraspherical parameter
  END SUBROUTINE quad_initiate3
END INTERFACE Initiate
```

:::note `quadratureType`
:::

Type of quadrature points:

- "GaussLegendre"
- "GaussLegendreLobatto"
- "GaussLegendreRadau", "GaussLegendreRadauLeft"
- "GaussLegendreRadauRight"
- "GaussChebyshev"
- "GaussChebyshevLobatto"
- "GaussChebyshevRadau", "GaussChebyshevRadauLeft"
- "GaussChebyshevRadauRight"
- "GaussJacobi"
- "GaussJacobiLobatto"
- "GaussJacobiRadau", "GaussJacobiRadauLeft"
- "GaussJacobiRadauRight"
- "GaussUltraspherical"
- "GaussUltrasphericalLobatto"
- "GaussUltrasphericalRadau", "GaussUltraspericalRadauLeft"
- "GaussUltrasphericalRadauRight"

In the case of `Jacobi` `alpha` and `beta` should be given, and in the case of `Ultraspherical` `lambda` should be given.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE10 from "./_Initiate_test_1d.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

```fortran
INTERFACE Initiate
  MODULE SUBROUTINE quad_initiate4(obj, refElem, nips, quadratureType, &
    & alpha, beta, lambda)
    TYPE(QuadraturePoint_), INTENT(INOUT) :: obj
    !! Total number of xidimension
    CLASS(ReferenceElement_), INTENT(IN) :: refElem
    !! Reference element
    INTEGER(I4B), INTENT(IN) :: nips(1)
    !! order of integrand
    CHARACTER(*), INTENT(IN) :: quadratureType
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda
    !! Ultraspherical parameter
  END SUBROUTINE quad_initiate4
END INTERFACE Initiate
```

:::info
This method allows us to initiate the quadrature points by specifying the number of integration points, and quadrature type.
:::

## Interface 3

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE Initiate
  MODULE SUBROUTINE quad_initiate5( &
    & obj, &
    & refElem, &
    & order, &
    & quadratureType,  &
    & alpha, beta, lambda)
    TYPE(QuadraturePoint_), INTENT(INOUT) :: obj
    !! Total number of xidimension
    CLASS(ReferenceElement_), INTENT(IN) :: refElem
    !! Reference-element
    INTEGER(I4B), INTENT(IN) :: order
    !! order of integrand
    INTEGER(I4B), INTENT(IN) :: quadratureType
    !! Type of quadrature points
    !! GaussLegendre
    !! GaussLegendreLobatto
    !! GaussLegendreRadau
    !! GaussLegendreRadauLeft
    !! GaussLegendreRadauRight
    !! GaussChebyshev
    !! GaussChebyshevLobatto
    !! GaussChebyshevRadau
    !! GaussChebyshevRadauLeft
    !! GaussChebyshevRadauRight
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda
    !! Ultraspherical parameter
  END SUBROUTINE quad_initiate5
END INTERFACE Initiate
```

:::note `quadratureType`
:::

Type of quadrature points:

- GaussLegendre
- GaussLegendreLobatto
- GaussLegendreRadau, GaussLegendreRadauLeft
- GaussLegendreRadauRight
- GaussChebyshev
- GaussChebyshevLobatto
- GaussChebyshevRadau, GaussChebyshevRadauLeft
- GaussChebyshevRadauRight
- GaussJacobi
- GaussJacobiLobatto
- GaussJacobiRadau, GaussJacobiRadauLeft
- GaussJacobiRadauRight
- GaussUltraspherical
- GaussUltrasphericalLobatto
- GaussUltrasphericalRadau, GaussUltraspericalRadauLeft
- GaussUltrasphericalRadauRight

In the case of `Jacobi` `alpha` and `beta` should be given, and in the case of `Ultraspherical` `lambda` should be given.

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE111 from "./_Initiate_test_1a.md";

<EXAMPLE111 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 4

```fortran
INTERFACE Initiate
  MODULE SUBROUTINE quad_initiate6( &
    & obj, &
    & refElem, &
    & nips, &
    & quadratureType, &
    & alpha, &
    & beta, &
    & lambda)
    TYPE(QuadraturePoint_), INTENT(INOUT) :: obj
    !! Total number of xidimension
    CLASS(ReferenceElement_), INTENT(IN) :: refElem
    !! Reference element
    INTEGER(I4B), INTENT(IN) :: nips(1)
    !! order of integrand
    INTEGER(I4B), INTENT(IN) :: quadratureType
    !! Type of quadrature points
    !! GaussLegendre
    !! GaussLegendreLobatto
    !! GaussLegendreRadau
    !! GaussLegendreRadauLeft
    !! GaussLegendreRadauRight
    !! GaussChebyshev
    !! GaussChebyshevLobatto
    !! GaussChebyshevRadau
    !! GaussChebyshevRadauLeft
    !! GaussChebyshevRadauRight
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta
    !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda
    !! Ultraspherical parameter
  END SUBROUTINE quad_initiate6
END INTERFACE Initiate
```

## Interface 5

```fortran
INTERFACE Initiate
  MODULE SUBROUTINE quad_initiate7( &
    & obj, &
    & refElem, &
    & p, q, r, &
    & quadratureType1, &
    & quadratureType2, &
    & quadratureType3, &
    & alpha1, beta1, lambda1,  &
    & alpha2, beta2, lambda2,  &
    & alpha3, beta3, lambda3)
    TYPE(QuadraturePoint_), INTENT(INOUT) :: obj
    !! Total number of xidimension
    CLASS(ReferenceElement_), INTENT(IN) :: refElem
    !! Reference-element
    INTEGER(I4B), INTENT(IN) :: p
    !! order of integrand in x
    INTEGER(I4B), INTENT(IN) :: q
    !! order of integrand in y
    INTEGER(I4B), INTENT(IN) :: r
    !! order of integrand in z direction
    INTEGER(I4B), INTENT(IN) :: quadratureType1
    !! Type of quadrature points
    !! GaussLegendre
    !! GaussLegendreLobatto
    !! GaussLegendreRadau
    !! GaussLegendreRadauLeft
    !! GaussLegendreRadauRight
    !! GaussChebyshev
    !! GaussChebyshevLobatto
    !! GaussChebyshevRadau
    !! GaussChebyshevRadauLeft
    !! GaussChebyshevRadauRight
    INTEGER(I4B), INTENT(IN) :: quadratureType2
    !! Type of quadrature points
    INTEGER(I4B), INTENT(IN) :: quadratureType3
    !! Type of quadrature points
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha1, beta1, lambda1
    !! Jacobi parameter and Ultraspherical parameters
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha2, beta2, lambda2
    !! Jacobi parameter and Ultraspherical parameters
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha3, beta3, lambda3
    !! Jacobi parameter and Ultraspherical parameters
  END SUBROUTINE quad_initiate7
END INTERFACE Initiate
```

## Interface 6

```fortran
INTERFACE Initiate
  MODULE SUBROUTINE quad_initiate8( &
    & obj, &
    & refElem, &
    & nipsx, &
    & nipsy, &
    & nipsz, &
    & quadratureType1, &
    & quadratureType2, &
    & quadratureType3, &
    & alpha1, beta1, lambda1, &
    & alpha2, beta2, lambda2, &
    & alpha3, beta3, lambda3)
    TYPE(QuadraturePoint_), INTENT(INOUT) :: obj
    !! Total number of xidimension
    CLASS(ReferenceElement_), INTENT(IN) :: refElem
    !! Reference element
    INTEGER(I4B), INTENT(IN) :: nipsx(1)
    !! number of integration points in x direction
    INTEGER(I4B), INTENT(IN) :: nipsy(1)
    !! number of integration points in y direction
    INTEGER(I4B), INTENT(IN) :: nipsz(1)
    !! number of integration points in z direction
    INTEGER(I4B), INTENT(IN) :: quadratureType1
    !! Type of quadrature points
    !! GaussLegendre
    !! GaussLegendreLobatto
    !! GaussLegendreRadau
    !! GaussLegendreRadauLeft
    !! GaussLegendreRadauRight
    !! GaussChebyshev
    !! GaussChebyshevLobatto
    !! GaussChebyshevRadau
    !! GaussChebyshevRadauLeft
    !! GaussChebyshevRadauRight
    INTEGER(I4B), INTENT(IN) :: quadratureType2
    !! Type of quadrature points
    INTEGER(I4B), INTENT(IN) :: quadratureType3
    !! Type of quadrature points
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha1, beta1, lambda1
    !! Jacobi parameter and Ultraspherical parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha2, beta2, lambda2
    !! Jacobi parameter and Ultraspherical parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha3, beta3, lambda3
    !! Jacobi parameter and Ultraspherical parameter
  END SUBROUTINE quad_initiate8
END INTERFACE Initiate
```

## Interface 7

```fortran
MODULE PURE SUBROUTINE Initiate( obj, Points )
  CLASS( QuadraturePoint_ ), INTENT( INOUT ) :: obj
  REAL( DFP ), INTENT( IN ) :: Points( :, : )
    !! Points contains the quadrature points and weights
    !! Points( :, ipoint ) contains quadrature points and weights of ipoint
    !! quadrature point. The last row contains the weight. The rest of the
    !! rows contains the coordinates of quadrature.
END SUBROUTINE Initiate
```

This subroutine converts the quadrature points into `QuadraturePoint_` data type.

:::caution
This routine is for developers only, normal user should not worry about this interface.
:::

:::info `Points`

- `Points` contains the quadrature points and weights
- for example, `Points( :, ipoint )` contains quadrature points and weights of `ipoint` quadrature point.
- The last row always contains the weight.
- The rest of the rows contains the coordinates of quadrature.
:::

## Interface 8

<span class="badge badge--warning"> developers only </span>

```fortran
MODULE PURE SUBROUTINE Initiate( obj, tXi, tPoints )
  CLASS( QuadraturePoint_ ), INTENT( INOUT ) :: obj
  INTEGER( I4B ), INTENT( IN ) :: tXi
  !! Total number of xidimension
  !! For line tXi=1
  !! For 2D element tXi=2
  !! For 3D element tXi=3
  INTEGER( I4B ), INTENT( IN ) :: tPoints
  !! Total number quadrature points
END SUBROUTINE Initiate
```

The following interface allocates the memory for storing the quadrature points.

:::caution
This routine is for developers only, normal user should not worry about this interface.
:::

## QuadraturePoint (Constructor function)

```fortran
MODULE PURE FUNCTION QuadraturePoint( Points ) RESULT( obj )
  TYPE( QuadraturePoint_ ) :: obj
  REAL( DFP ), INTENT( IN ) :: Points( :, : )
END FUNCTION QuadraturePoint
```

This function converts `Points` to an instance of QuadraturePoint.

## QuadraturePoint_Pointer

```fortran
MODULE PURE FUNCTION QuadraturePoint_Pointer( Points ) RESULT( obj )
  CLASS( QuadraturePoint_ ), POINTER :: obj
  REAL( DFP ), INTENT( IN ) :: Points( :, : )
END FUNCTION QuadraturePoint_Pointer
```
