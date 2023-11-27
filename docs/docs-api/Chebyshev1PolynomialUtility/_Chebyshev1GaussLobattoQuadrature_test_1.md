> Note that this routine returns n+2 points, the first point is -1 and last point is +1

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: pt( : ), wt( : )
  type(string) :: msg, astr
  n = 3
  call reallocate( pt, n+2, wt, n+2 )
  call Chebyshev1GaussLobattoQuadrature( n=n, &
    & pt=pt, wt=wt )
  msg="Chebyshev1 Gauss Lobatto points, n+2 = " &
      & // tostring( n+2 )
  call display(msg%chars())
  astr = MdEncode( pt .COLCONCAT. wt )
  call display( astr%chars(), "" )
end program main
```

Chebyshev1 Gauss Lobatto points, n+2 = 4

| pt          | wt     |
|-------------|--------|
| -1          | 0.3927 |
| -0.70711    | 0.7854 |
| 1.03412E-13 | 0.7854 |
| 0.70711     | 0.7854 |
| 1           | 0.3927 |
