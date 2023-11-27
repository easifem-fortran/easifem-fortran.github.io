This example shows the usage of `UltrasphericalEvalSum` method.

This routine evaluates sum of finite series of Ultraspherical polynomials of order upto n, at a single point.

$$
s(x) = \sum_{n=0}^{n=N}{c_n P_{n}^{(\lambda)}(x)}
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
  ans = UltrasphericalEvalSum( n=n, x=x, &
      & lambda=lambda, coeff=coeff )
  exact = UltrasphericalEval( n=0_I4B, x=x, &
      & lambda=lambda )
  call ok( SOFTEQ(ans, exact, tol ))

  n = 3; coeff = [0, 1, 0, 0]
  x = -0.5_DFP
  ans = UltrasphericalEvalSum( n=n, x=x, &
      & lambda=lambda, coeff=coeff )
  exact = UltrasphericalEval( n=1_I4B, x=x, &
      & lambda=lambda )
  call ok( SOFTEQ(ans, exact, tol ))

  n = 3; coeff = [0, 0, 0, 1]
  x = 0.25_DFP
  ans = UltrasphericalEvalSum( n=n, x=x, &
      & lambda=lambda, coeff=coeff )
  exact = UltrasphericalEval( n=3_I4B, x=x, &
      & lambda=lambda )
  call ok( SOFTEQ(ans, exact, tol ))

  n = 3; coeff = [0, 0, 1, 2]
  x = -0.5_DFP
  ans = UltrasphericalEvalSum( n=n, x=x, &
      & lambda=lambda, coeff=coeff )
  exact = UltrasphericalEval( n=2_I4B, x=x, &
      & lambda=lambda ) &
      & + 2.0_DFP * UltrasphericalEval( n=3_I4B, x=x, &
      & lambda=lambda )
  call ok( SOFTEQ(ans, exact, tol ))

end program main
```
