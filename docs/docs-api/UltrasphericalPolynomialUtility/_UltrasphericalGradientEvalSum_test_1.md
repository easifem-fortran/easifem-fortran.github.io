This example shows the usage of `UltrasphericalGradientEvalSum` method.

This routine evaluates the gradient of sum of finite series of Ultraspherical polynomials of order upto n, at a single point.

$$
\frac{d}{dx} s(x) = \sum_{n=0}^{n=N}{c_n \frac{d}{dx} P_{n}^{(\lambda)}(x)}
$$

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ) :: ans, x, exact
  real( dfp ), allocatable :: coeff(:)
  real( dfp ), parameter :: tol=1.0E-10, lambda=0.5_DFP
  n = 3; coeff = [1, 0, 0, 0]
  x = -0.5_DFP
  ans = UltrasphericalGradientEvalSum( n=n, x=x, &
      & lambda=lambda, coeff=coeff )
  exact = UltrasphericalGradientEval( n=0_I4B, x=x, &
      & lambda=lambda )
  call ok( SOFTEQ(ans, exact, tol ))
  n = 3; coeff = [0, 1, 0, 0]
  x = -0.5_DFP
  ans = UltrasphericalGradientEvalSum( n=n, x=x, &
      & lambda=lambda, coeff=coeff )
  exact = UltrasphericalGradientEval( n=1_I4B, x=x, &
      & lambda=lambda )
  call ok( SOFTEQ(ans, exact, tol ))
  n = 3; coeff = [0, 0, 0, 1]
  x = 0.25_DFP
  ans = UltrasphericalGradientEvalSum( n=n, x=x, &
      & lambda=lambda, coeff=coeff )
  exact = UltrasphericalGradientEval( n=3_I4B, x=x, &
      & lambda=lambda )
  call ok( SOFTEQ(ans, exact, tol ))
  n = 3; coeff = [0, 0, 1, 2]
  x = -0.5_DFP
  ans = UltrasphericalGradientEvalSum( n=n, x=x, &
      & lambda=lambda, coeff=coeff )
  exact = UltrasphericalGradientEval( n=2_I4B, x=x, &
      & lambda=lambda ) &
      & + 2.0_DFP * UltrasphericalGradientEval( &
      & n=3_I4B, x=x, &
      & lambda=lambda )
  call ok( SOFTEQ(ans, exact, tol ))
end program main
```
