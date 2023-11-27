- This example shows the usage of `LegendreTransform` method.
- This routine performs the forward Legendre transform of column data.

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real(dfp), allocatable :: uhat(:, :), u( :, : ), pt( : ), wt(:), &
    & exact( :, : )
  real( dfp ), parameter :: tol=1.0E-10
  type(string) :: astr
  integer( i4b ), parameter :: quadType = GaussLobatto
  n = 10
  call reallocate( pt, n+1, wt, n+1 )
  call LegendreQuadrature( n=n+1, pt=pt, wt=wt, quadType=quadType )
  u = SIN(4.0_DFP * pi * pt) .COLCONCAT. SIN(4.0_DFP * pi * pt)
  uhat = LegendreTransform(n=n, coeff=u, x=pt, w=wt, quadType=quadType)
  exact = UltrasphericalTransform(n=n, lambda=0.5_DFP, coeff=u, x=pt, &
    & w=wt, quadType=quadType)
  call OK(ALL(SOFTEQ(uhat, exact, tol)), "n=10")
end program main
```
