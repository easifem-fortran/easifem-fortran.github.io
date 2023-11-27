```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, p, q, r
  real( dfp ), allocatable :: x(:,:), x2(:,:)
  real(dfp) :: tol

  p=3; q=p; r=p
  tol = 1.0E-10
  x = EquidistanceInPoint_Hexahedron( p, q, r )
  x2 = EquidistanceInPoint_Hexahedron( p )
  call ok(all(softeq(x, x2, tol)), "tests(1)" )
end program main
```
