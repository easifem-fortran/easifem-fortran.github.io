This example shows the usage of `LobattoGradientEval` method.

This routine evaluates gradient of Lobatto polynomial of order n, at single point

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ) :: ans, x, exact
  real( dfp ), parameter :: tol=1.0E-8
  n = 5
  x = -1.0_DFP; call callme
  exact = SQRT(9.0_DFP/2.0_DFP)*(35.0*x**4 - 30.0*x**2 + 3.0)/8.0
  call ok( SOFTEQ(ans, exact, tol ))
  x = 0.0_DFP; call callme
  exact = SQRT(9.0_DFP/2.0_DFP)*(35.0*x**4 - 30.0*x**2 + 3.0)/8.0
  call ok( SOFTEQ(ans, exact, tol ))
  x = +1.0_DFP; call callme
  exact = SQRT(9.0_DFP/2.0_DFP)*(35.0*x**4 - 30.0*x**2 + 3.0)/8.0
  contains
  subroutine callme
    ans= LobattoGradientEval( n=n, x=x )
  end subroutine callme
end program main
```
