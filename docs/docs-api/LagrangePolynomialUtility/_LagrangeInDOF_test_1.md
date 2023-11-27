```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order, elemType
  integer( i4b ), allocatable :: degree(:,:)
  type(string) :: astr

  order=3; elemType=Tetrahedron
  i1 = LagrangeInDOF(order=order, elemType=elemType)
  i2 = (order-1)*(order-2)*(order-3)/6
  call IS( i1, i2 )
  order=4; elemType=Tetrahedron
  i1 = LagrangeInDOF(order=order, elemType=elemType)
  i2 = (order-1)*(order-2)*(order-3)/6
  call IS( i1, i2 )

  order=2; elemType=Triangle
  i1 = LagrangeInDOF(order=order, elemType=elemType)
  i2 = 0
  call IS( i1, i2 )
  order=3; elemType=Triangle
  i1 = LagrangeInDOF(order=order, elemType=elemType)
  i2 = 1
  call IS( i1, i2 )

  order=1; elemType=Line
  i1 = LagrangeInDOF(order=order, elemType=elemType)
  i2 = 0
  call IS( i1, i2 )
  order=2; elemType=Line
  i1 = LagrangeInDOF(order=order, elemType=elemType)
  i2 = 1
  call IS( i1, i2 )

end program main 
```
