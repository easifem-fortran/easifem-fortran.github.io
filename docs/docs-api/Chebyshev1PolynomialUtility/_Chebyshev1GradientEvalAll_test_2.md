```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: ans( : ), x
  type(string) :: astr
  x = 0.5_DFP
  n = 4
  ans= Chebyshev1GradientEvalAll( n=n, x=x )
  astr = MdEncode( ans )
  call display( astr%chars(), "" )
end program main
```

| P0 | P1 | P2 | P3 | P4  |
|----|----|----|----| ----|
| 0  | 1  | 2  | 0  | -4  |
