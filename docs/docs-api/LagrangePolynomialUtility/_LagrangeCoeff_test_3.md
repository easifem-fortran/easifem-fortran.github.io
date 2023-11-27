Following methods are tested.

- LagrangeCoeff

```fortran
PROGRAM main
use easifemBase
implicit none
real(dfp), allocatable :: coeff(:), xij(:,:), ans(:)
integer(i4b) :: order, elemType, i
real(dfp), parameter :: tol=1.0E-10
```

Quadrangle LagrangeCoeff

```fortran
  i = 1; elemType=Quadrangle; order=1
  xij = EquidistancePoint(order, elemType)
  coeff = LagrangeCoeff(order=order, elemType=elemType, i=i, xij=xij)
  ans = [1.0, -1.0, -1.0, 1.0]*0.25
  !call display(coeff, "coeff=")
  call ok( all(softeq(coeff, ans, tol)), "")
  i = 2
  coeff = LagrangeCoeff(order=order, elemType=elemType, i=i, xij=xij)
  ans = [1.0, 1.0, -1.0, -1.0]*0.25
  !call display(coeff, "coeff=")
  call ok( all(softeq(coeff, ans, tol)), "")
  i = 3
  coeff = LagrangeCoeff(order=order, elemType=elemType, i=i, xij=xij)
  ans = [1.0, 1.0, 1.0, 1.0]*0.25
  !call display(coeff, "coeff=")
  call ok( all(softeq(coeff, ans, tol)), "")
```

```fortran
END PROGRAM main
```
