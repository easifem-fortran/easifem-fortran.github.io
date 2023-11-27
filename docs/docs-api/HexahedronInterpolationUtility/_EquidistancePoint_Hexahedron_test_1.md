```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order
  real( dfp ), allocatable :: x(:,:)
  type(String) :: astr
  order=1
  x = EquidistancePoint_Hexahedron( order=order )
  astr = "| no | $x_1$ | $x_2$ | $x_3$ |" // char_lf
  astr = astr //  mdencode( arange(1.0_DFP, (order+1.0_DFP)**3) .colconcat. TRANSPOSE(x))
  call display( astr%chars(), "xij (order="//tostring(order)//")=" // char_lf // char_lf )
end program main
```

xij (order=1)=

| no | $x_1$ | $x_2$ | $x_3$ |
|  --- |  --- |  --- |  --- |
| 1 | -1 | -1 | -1 |
| 2 | 1 | -1 | -1 |
| 3 | 1 | 1 | -1 |
| 4 | -1 | 1 | -1 |
| 5 | -1 | -1 | 1 |
| 6 | 1 | -1 | 1 |
| 7 | 1 | 1 | 1 |
| 8 | -1 | 1 | 1 |
