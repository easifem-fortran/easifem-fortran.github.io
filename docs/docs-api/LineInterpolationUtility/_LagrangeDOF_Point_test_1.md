```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order
  real( dfp ), allocatable :: x1( : ), x2( : ), x(:,:), ans(:,:)
  integer(i4b), allocatable :: degree(:,:)
  i1 = LagrangeDOF_Point( order=1 )
  i2 = 1_I4B
  call IS( i1, i2 )
end program main
```
