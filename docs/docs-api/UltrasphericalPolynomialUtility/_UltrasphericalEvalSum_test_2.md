This example shows the usage of `UltrasphericalEvalSum` method.

This routine evaluates the finite sum of the Ultraspherical polynomials of order upto n, at several points.

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: ans(:), x(:), exact(:), &
    & coeff(:)
  real( dfp ), parameter :: tol=1.0E-10, lambda=0.5_DFP
  type(string) :: astr

  n = 3
  x = [-0.5, 0.5, 0.25]
  coeff = [1, 0, 0, 0]
  ans = UltrasphericalEvalSum( n=n, x=x, &
      & lambda=lambda, coeff=coeff )
  exact = UltrasphericalEval( n=0_I4B, x=x, &
      & lambda=lambda )
  call ok( ALL(SOFTEQ(ans, exact, tol )))

  n = 3
  x = [-0.5, 0.5, 0.25]
  coeff = [0, 0, 0, 1]
  ans = UltrasphericalEvalSum( n=n, x=x, &
      & lambda=lambda, coeff=coeff )
  exact = UltrasphericalEval( n=3_I4B, x=x, &
      & lambda=lambda )
  call ok( ALL(SOFTEQ(ans, exact, tol )))

  n = 100
  x = [-0.5, 0.5, 0.25]
  coeff = zeros(n+1, 0.0_DFP)
  coeff( n+1 ) = 1.0_DFP
  ans = UltrasphericalEvalSum( n=n, x=x, &
      & lambda=lambda, coeff=coeff )
  exact = UltrasphericalEval( n=n, x=x, &
      & lambda=lambda )
  call ok( ALL(SOFTEQ(ans, exact, tol )))

end program main
```
