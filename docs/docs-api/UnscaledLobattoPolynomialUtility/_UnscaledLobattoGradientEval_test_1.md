This example shows the usage of `UnscaledLobattoGradientEval` method. 

This routine evaluates gradient of UnscaledLobatto polynomial of order n, at single point

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ) :: ans, x, exact
  real( dfp ), parameter :: tol=1.0E-8
  n = 5
  x = -1.0_DFP; call callme
  exact =(1.0/9.0/8.0)*(315.0*x**4 - 270.0*x**2 + 27.0)
  call ok( SOFTEQ(ans, exact, tol ))
  x = 0.0_DFP; call callme
  exact =(1.0/9.0/8.0)*(315.0*x**4 - 270.0*x**2 + 27.0)
  call ok( SOFTEQ(ans, exact, tol ))
  x = +1.0_DFP; call callme
  exact =(1.0/9.0/8.0)*(315.0*x**4 - 270.0*x**2 + 27.0)
  call ok( SOFTEQ(ans, exact, tol ))
  contains
  subroutine callme
    ans= UnscaledLobattoGradientEval( n=n, x=x )
  end subroutine callme
end program main
```

