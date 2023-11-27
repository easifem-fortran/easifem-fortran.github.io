```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order
  real( dfp ), allocatable :: x(:,:)
  type(string) :: astr
  order=1
  x = EquidistanceInPoint_Hexahedron( order=order )
  astr = "| $x_1$ | $x_2$ | $x_3$ |" // char_lf
  astr = astr // mdencode(TRANSPOSE(x))
  call display( astr%chars(), "xij (order="//tostring(order)//")=" // char_lf // char_lf )
end program main
```

xij (order=1)=

| $x_1$ | $x_2$ | $x_3$ |
| ----- | ----- | ----- |
|       |       |       |
