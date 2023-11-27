```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: ans(:), x(:), exact(:)
  real( dfp ), parameter :: tol=1.0E-10
  type(string) :: astr
  n = 5
  x = [-1.0, -0.5, 0.0, 0.5, 1.0]; call callme
  exact = 16.0_DFP * x**5 - 20.0_DFP * x**3 + 5.0_DFP * x
  call ok( ALL(SOFTEQ(ans, exact, tol )))
  contains
  subroutine callme
    ans= Chebyshev1Eval( n=n, x=x )
  end subroutine callme
end program main
```

