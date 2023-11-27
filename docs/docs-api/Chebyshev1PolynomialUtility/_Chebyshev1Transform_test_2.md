- This example shows the usage of `Chebyshev1Transform` method.
- This routine performs the forward Chebyshev1 transform.

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real(dfp), allocatable :: uhat(:), u( : ), pt( : ), &
    & wt(:), exact(:), error(:,:)
  real( dfp ), parameter :: tol=1.0E-10
  type(string) :: astr
  integer( i4b ), parameter :: quadType = Gauss
  n = 10
  call reallocate( pt, n+1, wt, n+1 )
  call Chebyshev1Quadrature( n=n+1, pt=pt, wt=wt, &
    & quadType=quadType )
  u = Chebyshev1Eval(n=5_I4B, x=pt)
  uhat = Chebyshev1Transform(n=n, coeff=u, x=pt, w=wt, &
    & quadType=quadType)
  uhat( 6 ) = uhat( 6 ) - 1.0_dFP
  CALL ok( SOFTEQ( NORM2(uhat), 0.0_DFP, tol), "test"  )
  n = 10
  call reallocate( pt, n+1, wt, n+1, exact, n+1 )
  call Chebyshev1Quadrature( n=n+1, &
    & pt=pt, wt=wt, quadType=quadType )
  !u = 1.0 / (1.0 + 16.0*pt**2)
  u = 1.0*pt + 2.0*pt**2
  uhat = Chebyshev1Transform(n=n, &
    & coeff=u, x=pt, w=wt, quadType=quadType)
  exact(1:3) = 1.0_DFP
  call ok( ALL(SOFTEQ(exact, uhat, tol)), "n=10 "//CHAR_LF)
end program main
```

