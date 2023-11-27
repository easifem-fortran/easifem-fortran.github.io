```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order
  real( dfp ), allocatable :: x1( : ), x2( : ), x(:,:), ans(:,:)
  integer(i4b), allocatable :: degree(:,:)
```

Returns the monomial degrees on Line for constructing Lagrange  polynomails.

```fortran
  order=1
  degree=LagrangeDegree_Line(order=order)
  call display( degree, "degree (order="//tostring(order)//")=" )
  call blanklines(nol=2)
  order=2
  degree=LagrangeDegree_Line(order=order)
  call display( degree, "degree (order="//tostring(order)//")=" )
  call blanklines(nol=2)
  order=3
  degree=LagrangeDegree_Line(order=order)
  call display( degree, "degree (order="//tostring(order)//")=" )
  call blanklines(nol=2)
  order=4
  degree=LagrangeDegree_Line(order=order)
  call display( degree, "degree (order="//tostring(order)//")=" )
  call blanklines(nol=2)
```

```txt title="results"
degree (order=1)=
-----------------
      0
      1
degree (order=2)=
-----------------
      0
      1
      2
degree (order=3)=
-----------------
      0
      1
      2
      3
degree (order=4)=
-----------------
      0
      1
      2
      3
      4
```

```fortran
end program main
```
