```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2
  i1 = LagrangeInDOF_Triangle(order=1)
  i2 = 0
  call IS( i1, i2 )
  i1 = LagrangeInDOF_Triangle(order=2)
  i2 = 0
  call IS( i1, i2 )
  i1 = LagrangeInDOF_Triangle(order=3)
  i2 = 1
  call IS( i1, i2 )
  i1 = LagrangeInDOF_Triangle(order=4)
  i2 = 3
  call IS( i1, i2 )
end program main
```
