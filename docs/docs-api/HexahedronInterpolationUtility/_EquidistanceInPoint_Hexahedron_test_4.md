```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order
  real( dfp ), allocatable :: x(:,:)
  type(String) :: astr
  order=4
  x = EquidistanceInPoint_Hexahedron( order=order )
  astr = "| no | $x_1$ | $x_2$ | $x_3$ |" // char_lf
  astr = astr //  mdencode( arange(1.0_DFP, (order-1.0_DFP)**3) .colconcat. TRANSPOSE(x))
  call display( astr%chars(), "xij (order="//tostring(order)//")=" // char_lf // char_lf )
end program main
```

xij (order=4)=

| no | $x_1$ | $x_2$ | $x_3$ |
|  --- |  --- |  --- |  --- |
| 1 | -0.5 | -0.5 | -0.5 |
| 2 | 0.5 | -0.5 | -0.5 |
| 3 | 0.5 | 0.5 | -0.5 |
| 4 | -0.5 | 0.5 | -0.5 |
| 5 | -0.5 | -0.5 | 0.5 |
| 6 | 0.5 | -0.5 | 0.5 |
| 7 | 0.5 | 0.5 | 0.5 |
| 8 | -0.5 | 0.5 | 0.5 |
| 9 | 0 | -0.5 | -0.5 |
| 10 | -0.5 | 0 | -0.5 |
| 11 | -0.5 | -0.5 | 0 |
| 12 | 0.5 | 0 | -0.5 |
| 13 | 0.5 | -0.5 | 0 |
| 14 | 0 | 0.5 | -0.5 |
| 15 | 0.5 | 0.5 | 0 |
| 16 | -0.5 | 0.5 | 0 |
| 17 | 0 | -0.5 | 0.5 |
| 18 | -0.5 | 0 | 0.5 |
| 19 | 0.5 | 0 | 0.5 |
| 20 | 0 | 0.5 | 0.5 |
| 21 | 0 | 0 | -0.5 |
| 22 | 0 | 0 | 0.5 |
| 23 | -0.5 | 0 | 0 |
| 24 | 0.5 | 0 | 0 |
| 25 | 0 | -0.5 | 0 |
| 26 | 0 | 0.5 | 0 |
| 27 | 0 | 0 | 0 |
```
