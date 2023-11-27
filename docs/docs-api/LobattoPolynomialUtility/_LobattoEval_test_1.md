This example shows the usage of `LobattoEval` method.

This routine evaluates Lobatto polynomial of order n, at single point

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ) :: ans, x, exact
  real( dfp ), parameter :: tol=1.0E-8

  n = 5
  x = -1.0_DFP; call callme
  exact = (SQRT(9.0/2.0))*(x**2 - 1.0)*(7.0*(x**2)-3.0)*x/8.0_DFP
  call ok( SOFTEQ(ans, exact, tol ))
  x = 0.5_DFP; call callme
  exact = (SQRT(9.0/2.0))*(x**2 - 1.0)*(7.0*(x**2)-3.0)*x/8.0_DFP
  call ok( SOFTEQ(ans, exact, tol ))
  x = +1.0_DFP; call callme
  exact = (SQRT(9.0/2.0))*(x**2 - 1.0)*(7.0*(x**2)-3.0)*x/8.0_DFP
  call ok( SOFTEQ(ans, exact, tol ))

  contains
  subroutine callme
    ans= LobattoEval( n=n, x=x )
  end subroutine callme
end program main
```
