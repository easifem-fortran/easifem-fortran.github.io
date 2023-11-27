This example shows the usage of `LegendreGradientEval` method.

This routine evaluates gradient of Legendre polynomial of order n, at single point.

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ) :: ans, x, exact
  real( dfp ), parameter :: tol=1.0E-10
  n = 3
  x = -1.0_DFP; call callme
  exact = 0.5_DFP*(3*5.0 * x**2 - 3.0)
  call ok( SOFTEQ(ans, exact, tol ))
  x = 0.0_DFP; call callme
  exact = 0.5_DFP*(3*5.0 * x**2 - 3.0)
  call ok( SOFTEQ(ans, exact, tol ))
  x = +1.0_DFP; call callme
  exact = 0.5_DFP*(3*5.0 * x**2 - 3.0)
  call ok( SOFTEQ(ans, exact, tol ))
  contains
  subroutine callme
    ans= LegendreGradientEval( n=n, x=x )
  end subroutine callme
end program main
```
