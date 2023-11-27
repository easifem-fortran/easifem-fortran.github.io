```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order, elemType
  integer( i4b ), allocatable :: degree(:,:)
  type(string) :: astr

  order=1; elemType=Tetrahedron
  i1 = LagrangeDOF(order=order, elemType=elemType)
  i2 = (order+1)*(order+2)*(order+3)/6
  call IS( i1, i2 )
  order=2; elemType=Tetrahedron
  i1 = LagrangeDOF(order=order, elemType=elemType)
  i2 = (order+1)*(order+2)*(order+3)/6
  call IS( i1, i2 )

  order=1; elemType=Triangle
  i1 = LagrangeDOF(order=1, elemType=elemType)
  i2 = 3
  call IS( i1, i2 )
  order=2; elemType=Triangle
  i1 = LagrangeDOF(order=2, elemType=elemType)
  i2 = 6
  call IS( i1, i2 )

  order=1; elemType=Line
  i1 = LagrangeDOF(order=order, elemType=elemType)
  i2 = order+1
  call IS( i1, i2 )
  order=2; elemType=Line
  i1 = LagrangeDOF(order=order, elemType=elemType)
  i2 = order+1
  call IS( i1, i2 )

end program main 
```
