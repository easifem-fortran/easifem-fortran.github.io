This example shows the usage of `UnscaledLobattoGradientEvalAll` method.

This routine evaluates UnscaledLobatto polynomial upto order n, at a given point.

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: ans( : ), x
  type(string) :: astr
  x = 1.0_DFP
  n = 5
  ans= UnscaledLobattoGradientEvalAll( n=n, x=x )
  astr = MdEncode( ans )
  call display( astr%chars(), "" )
end program main
```

|      |     |   |   |   |   |
|------|-----|---|---|---|---|
| -0.5 | 0.5 | 1 | 1 | 1 | 1 |
