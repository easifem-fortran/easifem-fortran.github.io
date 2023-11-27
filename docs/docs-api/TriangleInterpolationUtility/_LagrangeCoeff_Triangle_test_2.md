```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order, ipType
  real( dfp ), allocatable :: x(:,:), xij(:, :), coeff(:, :)
  integer(i4b), allocatable:: degree(:, :)
  CHARACTER( 20 ) :: layout
  order=2
  xij = RefTriangleCoord("UNIT")
  ipType=Equidistance
  layout="VEFC"
  x =InterpolationPoint_Triangle( order=order, &
    & ipType=ipType, layout=layout, xij=xij)
  degree = LagrangeDegree_Triangle(order=order)
  coeff = LagrangeCoeff_Triangle(order=order, xij=x)
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
| 0 | 2 |

coeff:

|  |  |  |  |  |  |
|  --- |  --- |  --- |  --- |  --- |  --- |
| 1 | -0 | -0 | 0 | -0 | 0 |
| -3 | -1 | -0 | 4 | -0 | 0 |
| 2 | 2 | 0 | -4 | -0 | 0 |
| -3 | 0 | -1 | 0 | -0 | 4 |
| 4 | 0 | 0 | -4 | 4 | -4 |
| 2 | 0 | 2 | 0 | 0 | -4 |
