```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: ans( :, : ), x( : )
  type(string) :: astr
  x = [-1.0, -0.5, 0.0, 0.5, 1.0]
  n = 5
  ans= Chebyshev1EvalAll( n=n, x=x )
  astr = MdEncode( ans )
  call display( astr%chars(), "" )
end program main
```

| P0 | P1   | P2   | P3 | P4   | P5   |
|----|------|------|----|------|------|
| 1  | -1   | 1    | -1 | 1    | -1   |
| 1  | -0.5 | -0.5 | 1  | -0.5 | -0.5 |
| 1  | 0    | -1   | -0 | 1    | 0    |
| 1  | 0.5  | -0.5 | -1 | -0.5 | 0.5  |
| 1  | 1    | 1    | 1  | 1    | 1    |
