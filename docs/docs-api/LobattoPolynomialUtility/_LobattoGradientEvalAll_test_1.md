This example shows the usage of `LobattoGradientEvalAll` method.

This routine evaluates the first derivative of Lobatto polynomial upto order n, for many points.

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: ans( :, : ), x( : )
  type(string) :: astr
  x = [-1.0, 0.0, 1.0]
  n = 5; call callme
  contains
  subroutine callme
    ans= LobattoGradientEvalAll( n=n, x=x )
    astr = MdEncode( ans )
    call display( astr%chars(), "" )
  end subroutine callme
end program main
```

|      |     |         |          |         |        |
|------|-----|---------|----------|---------|--------|
| -0.5 | 0.5 | -1.2247 | 1.5811   | -1.8708 | 2.1213 |
| -0.5 | 0.5 | 0       | -0.79057 | -0      | 0.7955 |
| -0.5 | 0.5 | 1.2247  | 1.5811   | 1.8708  | 2.1213 |
