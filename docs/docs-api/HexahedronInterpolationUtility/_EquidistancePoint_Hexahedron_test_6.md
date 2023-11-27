```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order
  real( dfp ), allocatable :: x(:,:)
  type(String) :: astr
  order=2
  x = EquidistancePoint_Hexahedron( order, order, order )
  astr = "| no | $x_1$ | $x_2$ | $x_3$ |" // char_lf
  astr = astr //  mdencode( arange(1.0_DFP, (order+1.0_DFP)**3) .colconcat. TRANSPOSE(x))
  call display( astr%chars(), "xij (order="//tostring(order)//")=" // char_lf // char_lf )
end program main
```

xij (order=2)=

| no  | $x_1$ | $x_2$ | $x_3$ |
| --- | ----- | ----- | ----- |
| 1   | -1    | -1    | -1    |
| 2   | 1     | -1    | -1    |
| 3   | 1     | 1     | -1    |
| 4   | -1    | 1     | -1    |
| 5   | -1    | -1    | 1     |
| 6   | 1     | -1    | 1     |
| 7   | 1     | 1     | 1     |
| 8   | -1    | 1     | 1     |
| 9   | 0     | -1    | -1    |
| 10  | -1    | 0     | -1    |
| 11  | -1    | -1    | 0     |
| 12  | 1     | 0     | -1    |
| 13  | 1     | -1    | 0     |
| 14  | 0     | 1     | -1    |
| 15  | 1     | 1     | 0     |
| 16  | -1    | 1     | 0     |
| 17  | 0     | -1    | 1     |
| 18  | -1    | 0     | 1     |
| 19  | 1     | 0     | 1     |
| 20  | 0     | 1     | 1     |
| 21  | 0     | 0     | -1    |
| 22  | 0     | 0     | 1     |
| 23  | -1    | 0     | 0     |
| 24  | 1     | 0     | 0     |
| 25  | 0     | -1    | 0     |
| 26  | 0     | 1     | 0     |
| 27  | 0     | 0     | 0     |
