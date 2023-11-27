```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: pt( : )
  type(string) :: msg, astr
  n = 3
  pt = LegendreZeros( n=n )
  msg = "Zeros of J(x), n = " &
      & // tostring( n )
  call display(msg%chars())
  astr = MdEncode( pt )
  call display( astr%chars(), "" )
end program main
```

Zeros of J(x), n = 3

| | | |
| --- | --- | --- |
| -0.7746 | 3.71231E-16 | 0.7746 |
