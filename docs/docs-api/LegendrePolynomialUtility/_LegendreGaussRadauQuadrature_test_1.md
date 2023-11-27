This example shows the usage of `LegendreGaussRadauQuadrature` method.

This routine returns the quadrature points for Legendre polynomials.

> Note that this routine returns n+1 quadrature points and one of the points will be end point.

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: pt( : ), wt( : )
  real( dfp ), parameter :: left=-1.0, right=1.0
  type(string) :: msg, astr
  real( dfp ) :: a
  n = 2; a=left; call callme
  n = 2; a=right; call callme
  contains
  subroutine callme
    call reallocate( pt, n+1, wt, n+1 )
    call LegendreGaussRadauQuadrature( a=a, n=n, &
      & pt=pt, wt=wt )
    msg="Legendre Gauss Radau points, n+1 = " &
        & // tostring( n+1 )
    call display(msg%chars())
    astr = MdEncode( pt .COLCONCAT. wt )
    call display( astr%chars(), "" )
  end subroutine callme
end program main
```

Legendre Gauss Radau points, n+1 = 3

| pt      | wt      |
|---------|---------|
| -1      | 0.22222 |
| -0.2899 | 1.025   |
| 0.6899  | 0.75281 |

Legendre Gauss Radau points, n+1 = 3

| pt      | wt      |
|---------|---------|
| -0.6899 | 0.75281 |
| 0.2899  | 1.025   |
| 1       | 0.22222 |
