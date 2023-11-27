- This example shows the usage of `Chebyshev1InvTransform` method.
- This routine performs the inverse Chebyshev1 transform at a single point.

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real(dfp), allocatable :: uhat(:), u( : ), pt( : ), wt(:), error(:,:)
  real( dfp ), parameter :: tol=1.0E-10
  type(string) :: astr
  integer( i4b ), parameter :: quadType = GaussLobatto
  real( dfp ) :: x, ans, exact
  call reallocate(error, 30, 2)
  do n = 1, size(error,1)
    call reallocate( pt, n+1, wt, n+1 )
    call Chebyshev1Quadrature( n=n+1, pt=pt, wt=wt, quadType=quadType )
    u = 1.0 / (1.0 + 16.0 * pt**2)
    uhat = Chebyshev1Transform(n=n, coeff=u, x=pt, w=wt, quadType=quadType)
    x = 0.1
    exact = 1.0 / (1.0 + 16.0 * x**2)
    ans = Chebyshev1InvTransform(n=n, x=x, coeff=uhat)
    error(n,1) = n
    error(n,2) = ABS(exact-ans)
  end do
  call display(MdEncode(error), "error"//CHAR_LF )
end program main
```

| n  | error       |
|----|-------------|
| 1  | 0.80325     |
| 2  | 0.12852     |
| 3  | 0.61689     |
| 4  | 0.11195     |
| 5  | 0.3907      |
| 10 | 4.75496E-02 |
| 15 | 2.77239E-03 |
| 20 | 4.28428E-03 |
| 25 | 2.75076E-03 |
| 30 | 5.40866E-05 |
