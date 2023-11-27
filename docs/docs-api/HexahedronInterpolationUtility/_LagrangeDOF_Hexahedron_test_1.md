```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order
  order=1
  i1 = LagrangeDOF_Hexahedron(order=order)
  i2 = (order+1)*(order+2)*(order+3)/6
  call IS( i1, i2 )
  order=2
  i1 = LagrangeDOF_Hexahedron(order=order)
  i2 = (order+1)*(order+2)*(order+3)/6
  call IS( i1, i2 )
  order=3
  i1 = LagrangeDOF_Hexahedron(order=order)
  i2 = (order+1)*(order+2)*(order+3)/6
  call IS( i1, i2 )
end program main
```
