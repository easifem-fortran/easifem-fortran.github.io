```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order
  real( dfp ), allocatable :: x(:,:)
  type(string) :: astr
  order=1
  x = QuadraturePoint_Hexahedron(  &
  & order=order, &
  & quadType=GaussLegendreLobatto )
  call display(x, "ans:")


  order=2
  x = QuadraturePoint_Hexahedron(  &
  & order=order, &
  & quadType=GaussLegendreLobatto )
  call display(x, "ans:")
end program main
```
