```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: coeff(:, :)
  type(string) :: astr
  n = 5
  astr = MdEncode( LobattoMonomialExpansion( n=n ) )
  call display( astr%chars(), "" )
end program main
```

| x0 | x1     | x2 | x3      | x4 | x5     |
|----|--------|----|---------|----|--------|
| 0  | 0.7955 | -0 | -2.6517 | 0  | 1.8562 |
