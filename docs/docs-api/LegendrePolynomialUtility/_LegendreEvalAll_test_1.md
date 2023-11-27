This example shows the usage of `LegendreEvalAll` method.

This routine evaluates Legendre polynomial upto order n, for many points

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: ans( :, : ), x( : )
  type(string) :: astr
  x = [-1.0, 0.0, 1.0]
  n = 3
  ans= LegendreEvalAll( n=n, x=x )
  astr = MdEncode( ans )
  call display( astr%chars(), "" )
end program main
```

| P0 | P1 | P2   | P3 |
|----|----|------|----|
| 1  | -1 | 1    | -1 |
| 1  | 0  | -0.5 | -0 |
| 1  | 1  | 1    | 1  |
