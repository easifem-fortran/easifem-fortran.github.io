- This example shows the usage of `LegendreInvTransform` method.
- This routine performs the inverse Legendre transform at a single point.

> In this example $\lambda=0.5$ (that is, proportional to Legendre polynomial)

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
    call LegendreQuadrature( n=n+1, pt=pt, wt=wt, quadType=quadType )
    u = SIN(4.0_DFP * pi * pt)
    uhat = LegendreTransform(n=n, coeff=u, x=pt, w=wt, quadType=quadType)
    x = 0.1
    exact = SIN(4.0_DFP * pi * x)
    ans = LegendreInvTransform(n=n, x=x, coeff=uhat)
    error(n,1) = n
    error(n,2) = ABS(exact-ans)
  end do
  !!
  call display(MdEncode(error), "error"//CHAR_LF )
end program main
```

error

| n  | error       |
|----|-------------|
| 1  | 0.95106     |
| 2  | 0.95106     |
| 3  | 1.1214      |
| 4  | 0.70458     |
| 5  | 1.1275      |
| 6  | 0.9554      |
| 7  | 0.73555     |
| 8  | 1.7623      |
| 9  | 0.30871     |
| 10 | 1.478       |
| 15 | 1.71167E-04 |
| 20 | 5.05284E-04 |
| 25 | 4.1741E-08  |
| 30 | 5.07981E-11 |
