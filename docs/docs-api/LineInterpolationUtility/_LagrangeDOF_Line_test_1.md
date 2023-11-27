```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order
  real( dfp ), allocatable :: x1( : ), x2( : ), x(:,:), ans(:,:)
  integer(i4b), allocatable :: degree(:,:)
  i1 = LagrangeDOF_Line(order=1)
  i2 = 2
  call IS( i1, i2 )
  i1 = LagrangeDOF_Line(order=2)
  i2 = 3
  call IS( i1, i2 )
  i1 = LagrangeDOF_Line(order=3)
  i2 = 4
  call IS( i1, i2 )
end program main
```
