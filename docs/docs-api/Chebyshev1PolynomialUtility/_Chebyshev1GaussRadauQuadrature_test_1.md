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
  n = 3; a=left; call callme
  n = 3; a=right; call callme
  contains
  subroutine callme
    call reallocate( pt, n+1, wt, n+1 )
    call Chebyshev1GaussRadauQuadrature( a=a, n=n, &
      & pt=pt, wt=wt )
    msg="Chebyshev1 Gauss Radau points, n+1 = " &
        & // tostring( n+1 )
    call display(msg%chars())
    astr = MdEncode( pt .COLCONCAT. wt )
    call display( astr%chars(), "" )
  end subroutine callme
end program main
```

Chebyshev1 Gauss Radau points, n+1 = 4

 |  |  |
 |  --- |  --- |
 | -1 | 0.2244 |
 | -0.62349 | 0.4488 |
 | 0.22252 | 0.4488 |
 | 0.90097 | 0.4488 |

Chebyshev1 Gauss Radau points, n+1 = 4

 |  |  |
 |  --- |  --- |
 | -0.90097 | 0.2244 |
 | -0.22252 | 0.4488 |
 | 0.62349 | 0.4488 |
 | 1 | 0.4488 |
