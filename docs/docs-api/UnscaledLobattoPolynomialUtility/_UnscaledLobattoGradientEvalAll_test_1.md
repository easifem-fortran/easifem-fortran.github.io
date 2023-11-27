This example shows the usage of `UnscaledLobattoGradientEvalAll` method. 

This routine evaluates the first derivative of UnscaledLobatto polynomial upto order n, for many points

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
    ans= UnscaledLobattoGradientEvalAll( n=n, x=x )
    astr = MdEncode( ans )
    call display( astr%chars(), "" )
  end subroutine callme
end program main
```

|      |     |    |      |    |       |
|------|-----|----|------|----|-------|
| -0.5 | 0.5 | -1 | 1    | -1 | 1     |
| -0.5 | 0.5 | 0  | -0.5 | -0 | 0.375 |
| -0.5 | 0.5 | 1  | 1    | 1  | 1     |
