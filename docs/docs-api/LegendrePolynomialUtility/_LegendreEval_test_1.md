This example shows the usage of `LegendreEval` method.
This routine evaluates Legendre polynomial of order n, at single point

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ) :: ans, x, exact
  real( dfp ), parameter :: tol=1.0E-10
  n = 3
  x = -1.0_DFP; call callme
  exact = 0.5_DFP*(5.0 * x**3 - 3.0*x)
  call ok( SOFTEQ(ans, exact, tol ))
  x = 0.0_DFP; call callme
  exact = 0.5_DFP*(5.0 * x**3 - 3.0*x)
  call ok( SOFTEQ(ans, exact, tol ))
  x = +1.0_DFP; call callme
  exact = 0.5_DFP*(5.0 * x**3 - 3.0*x)
  call ok( SOFTEQ(ans, exact, tol ))
  contains
  subroutine callme
    ans= LegendreEval( n=n, x=x )
  end subroutine callme
end program main
```
