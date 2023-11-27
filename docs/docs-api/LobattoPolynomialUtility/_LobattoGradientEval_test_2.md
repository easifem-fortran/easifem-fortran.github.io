This example shows the usage of `LobattoGradientEval` method.

This routine evaluates gradient of Lobatto polynomial of order n, at several points.

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: ans(:), x(:), exact(:)
  real( dfp ), parameter :: tol=1.0E-08
  type(string) :: astr
  n = 5
  x = [-1.0, 0.0, 1.0]; call callme
  exact = SQRT(9.0_DFP/2.0_DFP)*(35.0*x**4 - 30.0*x**2 + 3.0)/8.0
  call ok( ALL(SOFTEQ(ans, exact, tol )))
  contains
  subroutine callme
    ans= LobattoGradientEval( n=n, x=x )
  end subroutine callme
end program main
```
