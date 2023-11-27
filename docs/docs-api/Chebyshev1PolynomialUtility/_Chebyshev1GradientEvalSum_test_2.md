This example shows the usage of `Chebyshev1GradientEvalSum` method. 

This routine evaluates the gradient offinite sum of the Chebyshev1 polynomials of order upto n, at several point.

$$
\frac{d}{dx} s(x) = \sum_{n=0}^{n=N}{c_n \frac{d}{dx} P_{n}^{(\lambda)}(x)}
$$

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
  ans = Chebyshev1GradientEvalSum( n=n, x=x, coeff=coeff )
  exact = Chebyshev1GradientEval( n=0_I4B, x=x )
  call ok( ALL(SOFTEQ(ans, exact, tol )))
  n = 3
  x = [-0.5, 0.5, 0.25]
  coeff = [0, 0, 0, 1]
  ans = Chebyshev1GradientEvalSum( n=n, x=x, coeff=coeff )
  exact = Chebyshev1GradientEval( n=3_I4B, x=x )
  call ok( ALL(SOFTEQ(ans, exact, tol )))
  n = 100
  x = [-0.5, 0.5, 0.25]
  coeff = zeros(n+1, 0.0_DFP)
  coeff( n+1 ) = 1.0_DFP
  ans = Chebyshev1GradientEvalSum( n=n, x=x, coeff=coeff )
  exact = Chebyshev1GradientEval( n=n, x=x )
  call ok( ALL(SOFTEQ(ans, exact, tol )))
end program main
```

