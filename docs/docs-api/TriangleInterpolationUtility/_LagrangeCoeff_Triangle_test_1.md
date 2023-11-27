```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order, ipType
  real( dfp ), allocatable :: x(:,:), xij(:, :), coeff(:, :)
  integer(i4b), allocatable:: degree(:, :)
  CHARACTER( 20 ) :: layout
  order=1
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

| x  | y  |
|  --- |  --- |
| 0 | 0 |
| 1 | 0 |
| 0 | 1 |

coeff:

| L1 | L2  | L3  |
|  --- |  --- |  --- |
| 1 | -0 | -0 |
| -1 | 1 | -0 |
| -1 | 0 | 1 |

This means:

$$
L_{1}(x,y) = 1\cdot x^0 y^0 - 1.0 \cdot x^1 y^0 - 1.0 \cdot x^0 y^1 = 1-x-y
$$

$$
L_{2}(x,y) = 0\cdot x^0 y^0 + 1.0 \cdot x^1 y^0 + 0.0 \cdot x^0 y^1 = x
$$

$$
L_{3}(x,y) = 0\cdot x^0 y^0 + 0.0 \cdot x^1 y^0 + 1.0 \cdot x^0 y^1 = y
$$
