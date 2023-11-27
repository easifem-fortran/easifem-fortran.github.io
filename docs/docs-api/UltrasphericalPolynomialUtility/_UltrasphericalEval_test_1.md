This example shows the usage of `UltrasphericalEval` method.

This routine evaluates Ultraspherical polynomial of order n, at single point

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ) :: ans, x, exact
  real( dfp ), parameter :: tol=1.0E-10, lambda=0.5_DFP

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
    ans= UltrasphericalEval( n=n, x=x, lambda=lambda )
  end subroutine callme
end program main
```
