```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: ans(:), x(:), exact(:), &
    & coeff(:)
  real( dfp ), parameter :: tol=1.0E-10
  type(string) :: astr
  n = 3
  x = [-0.5, 0.5, 0.25]
  coeff = [1, 0, 0, 0]
  ans = Chebyshev1EvalSum( n=n, x=x, coeff=coeff )
  exact = Chebyshev1Eval( n=0_I4B, x=x )
  call ok( ALL(SOFTEQ(ans, exact, tol )))
  n = 3
  x = [-0.5, 0.5, 0.25]
  coeff = [0, 0, 0, 1]
  ans = Chebyshev1EvalSum( n=n, x=x, coeff=coeff )
  exact = Chebyshev1Eval( n=3_I4B, x=x)
  call ok( ALL(SOFTEQ(ans, exact, tol )))
  n = 100
  x = [-0.5, 0.5, 0.25]
  coeff = zeros(n+1, 0.0_DFP)
  coeff( n+1 ) = 1.0_DFP
  ans = Chebyshev1EvalSum( n=n, x=x, coeff=coeff )
  exact = Chebyshev1Eval( n=n, x=x )
  call ok( ALL(SOFTEQ(ans, exact, tol )))
end program main
```

