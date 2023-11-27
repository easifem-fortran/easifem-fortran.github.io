```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: pt( : )
  type(string) :: msg, astr
  n = 3
  pt = Chebyshev1Zeros( n=n )
  msg = "Zeros of T(x), n = "// tostring( n )
  call display(msg%chars())
  astr = MdEncode( pt )
  call display( astr%chars(), "" )
end program main
```

Zeros of T(x), n = 3

|          |             |         |
|----------|-------------|---------|
| -0.86603 | 1.03412E-13 | 0.86603 |
