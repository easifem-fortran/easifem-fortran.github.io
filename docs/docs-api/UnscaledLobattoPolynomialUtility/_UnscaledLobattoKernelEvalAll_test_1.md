```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: ans( :, : ), x(:)
  type(string) :: astr
  x = [-1.0_DFP, 0.5_DFP, 1.0_DFP]
  n = 5
  ans= LobattoEvalAll( n=n, x=x )
  astr = MdEncode( ans )
  call display( astr%chars(), "" )
end program main
```

 |  |  |  |  |  |  |
 |  --- |  --- |  --- |  --- |  --- |  --- |
 | 1 | 0 | 0 | 0 | 0 | 0 |
 | 0.25 | 0.75 | -0.45928 | -0.29646 | -4.38475E-02 | 0.1243 |
 | 0 | 1 | 0 | 0 | 0 | 0 |
