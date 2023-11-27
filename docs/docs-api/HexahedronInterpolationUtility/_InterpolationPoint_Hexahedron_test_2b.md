```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order
  real( dfp ), allocatable :: x(:,:), x2(:,:)
  real( dfp), parameter :: tol = 1.0E-10
  type(string) :: astr
  order=2
  x = InterpolationPoint_Hexahedron( order=order, ipType=Equidistance, layout="VEFC" )
  x2 = EquidistancePoint_Hexahedron( order=order )
  call ok( all(softeq(x, x2, tol)), "tests(1): " )
end program main
```
