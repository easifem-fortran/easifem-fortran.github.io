```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order, ipType
  real( dfp ), allocatable :: x(:,:), xij(:, :), coeff(:)
  integer(i4b), allocatable:: degree(:, :)
  CHARACTER( 20 ) :: layout
  order=1
  xij = RefTriangleCoord("UNIT")
  ipType=Equidistance
  layout="VEFC"
  x =InterpolationPoint_Triangle( order=order, &
    & ipType=ipType, layout=layout, xij=xij)
  degree = LagrangeDegree_Triangle(order=order)
  coeff = LagrangeCoeff_Triangle(order=order, xij=x, i = 1)
  CALL Display(mdencode(degree), "degree: ")
  CALL Display(mdencode(coeff), "coeff(1): ")
  coeff = LagrangeCoeff_Triangle(order=order, xij=x, i = 2)
  CALL Display(mdencode(coeff), "coeff(2): ")
  coeff = LagrangeCoeff_Triangle(order=order, xij=x, i = 3)
  CALL Display(mdencode(coeff), "coeff(3): ")
end program main
```

degree:

| x  | y  |
|  --- |  --- |
| 0 | 0 |
| 1 | 0 |
| 0 | 1 |

coeff(1):

|  |  |  |
|  --- |  --- |  --- |
| 1 | -1 | -1 |

coeff(2):

|  |  |  |
|  --- |  --- |  --- |
| 0 | 1 | 0 |

coeff(3):

|  |  |  |
|  --- |  --- |  --- |
| 0 | 0 | 1 |

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
