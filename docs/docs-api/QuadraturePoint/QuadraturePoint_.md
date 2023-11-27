---
sidebar_position: 2
---

# Structure

The structure of this data type is given by:

```fortran
TYPE :: QuadraturePoint_
  REAL(DFP), ALLOCATABLE :: Points( :, : )
  INTEGER( I4B ) :: tXi = 0
END TYPE QuadraturePoint_
```

:::note `Points`
:::

The number of rows in `Points` is `tXi`+1, and the number of columns in `Points` is equal to the number of quadrature points.

- `Points(1:tXi, :)` denotes the quadrature points.
- `Points(tXi+1, :)` denotes the weights.

:::note `tXi`
:::

- In 1D `tXi` is 1
- In 2D `tXi` is 2
- In 3D `tXi` is 3

## QuadratureType

Currently, easifem provides following quadrature points:

### Legendre polynomial based

- [x] `GaussLegendre`
- [x] `GaussLegendreLobatto`
- [x] `GaussLegendreRadau`
- [x] `GaussLegendreRadauLeft`
- [x] `GaussLegendreRadauRight`

### Chebyshev polynomial based

- [x] `GaussChebyshev`
- [x] `GaussChebyshevLobatto`
- [x] `GaussChebyshevRadau`
- [x] `GaussChebyshevRadauLeft`
- [x] `GaussChebyshevRadauRight`

### Jacobi polynomial based

- [x] `GaussJacobi`
- [x] `GaussJacobiLobatto`
- [x] `GaussJacobiRadau`
- [x] `GaussJacobiRadauLeft`
- [x] `GaussJacobiRadauRight`

### Ultraspherical polynomial based

- [x] `GaussUltraSpherical`
- [x] `GaussUltraSphericalLobatto`
- [x] `GaussUltraSphericalRadau`
- [x] `GaussUltraSphericalRadauLeft`
- [x] `GaussUltraSphericalRadauRight`
