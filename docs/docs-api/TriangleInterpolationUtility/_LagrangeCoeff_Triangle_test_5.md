```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order, ipType
  real( dfp ), allocatable :: x(:,:), xij(:, :), coeff(:), V(:, :)
  integer(i4b), allocatable:: degree(:, :), ipiv(:)
  CHARACTER( 20 ) :: layout
  order=1
  xij = RefTriangleCoord("UNIT")
  ipType=Equidistance
  layout="VEFC"
  x =InterpolationPoint_Triangle( order=order, &
    & ipType=ipType, layout=layout, xij=xij)
  degree = LagrangeDegree_Triangle(order=order)
  V = LagrangeVandermonde(order=order, xij=x, elemType=Triangle)
  call reallocate(ipiv, size(x, 2) )
  CALL GetLU(A=V, IPIV=ipiv)
  coeff = LagrangeCoeff_Triangle(order=order, i = 1, V=V, ipiv=ipiv)
  CALL Display(mdencode(degree), "degree: ")
  CALL Display(mdencode(coeff), "coeff(1): ")
  coeff = LagrangeCoeff_Triangle(order=order, i = 2, V=V, ipiv=ipiv)
  CALL Display(mdencode(coeff), "coeff(2): ")
  coeff = LagrangeCoeff_Triangle(order=order, i = 3, V=V, ipiv=ipiv)
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
