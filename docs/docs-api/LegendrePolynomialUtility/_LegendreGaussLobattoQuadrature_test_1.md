This example shows the usage of `LegendreGaussLobattoQuadrature` method.

This routine returns the quadrature points for Legendre weights.

> Note that this routine returns n+2 points, the first point is -1 and last point is +1

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: pt( : ), wt( : )
  type(string) :: msg, astr
  n = 2
  call reallocate( pt, n+2, wt, n+2 )
  call LegendreGaussLobattoQuadrature( n=n, pt=pt, wt=wt )
  msg="Legendre Gauss Lobatto points, n+2 = " &
      & // tostring( n+2 )
  call display(msg%chars())
  astr = MdEncode( pt .COLCONCAT. wt )
  call display( astr%chars(), "" )
end program main
```

Legendre Gauss Lobatto points, n+2 = 4

| pt       | wt      |
|----------|---------|
| -1       | 0.16667 |
| -0.44721 | 0.83333 |
| 0.44721  | 0.83333 |
| 1        | 0.16667 |
