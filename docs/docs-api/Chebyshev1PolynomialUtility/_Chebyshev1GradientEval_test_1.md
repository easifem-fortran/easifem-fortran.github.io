```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ) :: ans, x, exact
  real( dfp ), parameter :: tol=1.0E-10
  n = 4
  x = -1.0_DFP; call callme
  exact = 32.0 * x**3 - 16.0*x
  call ok( SOFTEQ(ans, exact, tol ))
  x = -0.5_DFP; call callme
  exact = 32.0 * x**3 - 16.0*x
  call ok( SOFTEQ(ans, exact, tol ))
  x = 0.0_DFP; call callme
  exact = 32.0 * x**3 - 16.0*x
  call ok( SOFTEQ(ans, exact, tol ))
  x = 0.5_DFP; call callme
  exact = 32.0 * x**3 - 16.0*x
  call ok( SOFTEQ(ans, exact, tol ))
  x = +1.0_DFP; call callme
  exact = 32.0 * x**3 - 16.0*x
  call ok( SOFTEQ(ans, exact, tol ))
  contains
  subroutine callme
    ans= Chebyshev1GradientEval( n=n, x=x )
  end subroutine callme
end program main
```

