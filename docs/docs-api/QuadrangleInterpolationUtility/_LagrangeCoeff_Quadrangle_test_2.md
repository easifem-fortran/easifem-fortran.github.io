```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order, ipType
  real( dfp ), allocatable :: x(:,:), xij(:, :), coeff(:, :)
  integer(i4b), allocatable:: degree(:, :)
  CHARACTER( 20 ) :: layout

  order=2
  xij = RefQuadrangleCoord("BIUNIT")
  ipType=Equidistance
  layout="VEFC"
  x =InterpolationPoint_Quadrangle(  &
    & order=order, &
    & ipType=ipType,  &
    & layout=layout, &
    & xij=xij)

  degree = LagrangeDegree_Quadrangle(order=order)
  coeff = LagrangeCoeff_Quadrangle(  &
  & order=order, &
  & xij=x, &
  & basisType=Monomial, &
  & refQuadrangle="BIUNIT" )

  CALL Display(mdencode(degree), "degree: ")
  CALL Display(mdencode(coeff), "coeff: ")
end program main
```

degree:

|  |  |
|  --- |  --- |
| 0 | 0 |
| 1 | 0 |
| 2 | 0 |
| 0 | 1 |
| 1 | 1 |
| 2 | 1 |
| 0 | 2 |
| 1 | 2 |
| 2 | 2 |

coeff

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
