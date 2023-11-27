```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: ans( : ), x
  type(string) :: astr
  x = -1.0_DFP
  n = 3
  ans= LegendreGradientEvalAll( n=n, x=x )
  astr = MdEncode( ans )
  call display( astr%chars(), "" )
end program main
```

| P0 | P1 | P2 | P3 |
|----|----|----|----|
| 0 | 1 | -3 | 6 |
