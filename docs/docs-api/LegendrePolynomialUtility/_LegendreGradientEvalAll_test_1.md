```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: ans( :, : ), x( : )
  type(string) :: astr
  x = [-1.0, 0.0, 1.0]
  n = 3
  ans= LegendreGradientEvalAll( n=n, x=x )
  astr = MdEncode( ans )
  call display( astr%chars(), "" )
end program main
```

| dP0 | dP1 | dP2 | dP3  |
|-----|-----|-----|------|
| 0   | 1   | -3  | 6    |
| 0   | 1   | 0   | -1.5 |
| 0   | 1   | 3   | 6    |
