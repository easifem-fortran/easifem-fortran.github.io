```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2

  i1 = LagrangeDOF_Quadrangle(order=1)
  i2 = 4
  call IS( i1, i2 )
  i1 = LagrangeDOF_Quadrangle(order=2)
  i2 = 9
  call IS( i1, i2 )
  i1 = LagrangeDOF_Quadrangle(order=3)
  i2 = 16
  call IS( i1, i2 )

end program main
```
