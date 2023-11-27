```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ) :: ans, x, exact
  real( dfp ), parameter :: tol=1.0E-10
  n = 5
  x = -1.0_DFP; call callme
  exact = 16.0_DFP * x**5 - 20.0_DFP * x**3 + 5.0_DFP * x
  call ok( SOFTEQ(ans, exact, tol ))
  x = 0.0_DFP; call callme
  exact = 16.0_DFP * x**5 - 20.0_DFP * x**3 + 5.0_DFP * x
  call ok( SOFTEQ(ans, exact, tol ))
  x = +1.0_DFP; call callme
  exact = 16.0_DFP * x**5 - 20.0_DFP * x**3 + 5.0_DFP * x
  call ok( SOFTEQ(ans, exact, tol ))
  contains
  subroutine callme
    ans= Chebyshev1Eval( n=n, x=x )
  end subroutine callme
end program main
```

