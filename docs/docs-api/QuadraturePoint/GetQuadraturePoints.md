# GetQuadraturePoints

This subroutine returns the quadrature points stored inside QuadraturePoint_ object.

## Interface 1

```fortran
MODULE PURE SUBROUTINE GetQuadraturePoints( obj, point, weight, num )
  CLASS( QuadraturePoint_ ), INTENT( IN ) :: obj
  REAL( DFP ), INTENT( INOUT ) :: point( 3 )
    !! [xi, eta, zeta]
  REAL( DFP ), INTENT( INOUT ) :: weight
    !! weights
  INTEGER( I4B ), INTENT( IN ) :: num
    !! quadrature number
END SUBROUTINE GetQuadraturePoints
```

:::info `point`
Point contains the $(\xi, \eta, \zeta)$ coordinate of a quadrature point.
:::

## Interface 2

```fortran
MODULE PURE SUBROUTINE GetQuadraturePoints( obj, point, weight )
  CLASS( QuadraturePoint_ ), INTENT( IN ) :: obj
  REAL( DFP ), ALLOCATABLE, INTENT( INOUT ) :: point( :, : )
    !! Point( :, j ) = [xi, eta, zeta] of jth quadrature point
  REAL( DFP ), ALLOCATABLE, INTENT( INOUT ) :: weight( : )
    !! Weight(j) weight of jth quadrature point
END SUBROUTINE GetQuadraturePoints
```

:::info `point`

- Point denotes the quadrature points.
- Point always has three rows. The first row corresponds to the first local coordinate, $\xi$, the second to second local coordiante, $\eta$, and the third to the third local coordinate, $\zeta$.
- The number of col of Point equals to the total number of quadrature points.
:::
