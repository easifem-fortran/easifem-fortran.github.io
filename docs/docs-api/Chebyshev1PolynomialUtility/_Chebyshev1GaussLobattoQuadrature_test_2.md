```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n, ii
  real( dfp ), allocatable :: pt( : ), wt( : )
  type(string) :: msg, astr
  do ii = 1, 8
    n = ii; call callme
  end do 
  contains
  subroutine callme
  call reallocate( pt, n+2, wt, n+2 )
  call Chebyshev1GaussLobattoQuadrature( n=n, &
    & pt=pt, wt=wt )
  msg=char_lf // char_lf // "### n+2 = " &
      & // tostring( n+2 ) // char_lf // char_lf
  call display(msg%chars())
  astr = MdEncode( pt .COLCONCAT. wt )
  call display( astr%chars(), "" )
  end subroutine
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
