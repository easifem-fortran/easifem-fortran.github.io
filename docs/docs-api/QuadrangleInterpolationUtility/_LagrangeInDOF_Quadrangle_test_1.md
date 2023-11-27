```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2
  i1 = LagrangeInDOF_Quadrangle(order=1)
  i2 = 0
  call IS( i1, i2 )
  i1 = LagrangeInDOF_Quadrangle(order=2)
  i2 = 1
  call IS( i1, i2 )
  i1 = LagrangeInDOF_Quadrangle(order=3)
  i2 = 4
  call IS( i1, i2 )
end program main
```
