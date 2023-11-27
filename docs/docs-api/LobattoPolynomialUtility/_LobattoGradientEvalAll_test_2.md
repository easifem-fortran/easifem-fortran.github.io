This example shows the usage of `LobattoGradientEvalAll` method.

This routine evaluates Lobatto polynomial upto order n, for many points.

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: ans( : ), x
  type(string) :: astr
  x = 1.0_DFP
  n = 5; call callme
  contains
  subroutine callme
    ans= LobattoGradientEvalAll( n=n, x=x )
    astr = MdEncode( ans )
    call display( astr%chars(), "" )
  end subroutine callme
end program main
```

|  |  |  |  |  |  |
|  --- |  --- |  --- |  --- |  --- |  --- |
| -0.5 | 0.5 | 1.2247 | 1.5811 | 1.8708 | 2.1213 |
