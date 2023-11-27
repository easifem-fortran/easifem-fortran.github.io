```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2

  i1 = LagrangeDOF_Quadrangle(1, 1)
  i2 = 4
  call IS( i1, i2 )
  i1 = LagrangeDOF_Quadrangle(2, 2)
  i2 = 9
  call IS( i1, i2 )
  i1 = LagrangeDOF_Quadrangle(3, 2)
  i2 = 12
  call IS( i1, i2 )

end program main
```
