
program main
  use easifembase
  implicit none
  integer( i4b ) :: i1, i2, order
  real( dfp ), allocatable :: x(:,:)
  order=1
  x = EquidistanceInPoint_Quadrangle( order=order )
  call display( TRANSPOSE(x), "xij (order="//tostring(order)//")=" )
  call blanklines(nol=2)
  order=2
  x = EquidistanceInPoint_Quadrangle( order=order )
  call display( TRANSPOSE(x), "xij (order="//tostring(order)//")=" )
  call blanklines(nol=2)
  order=3
  x = EquidistanceInPoint_Quadrangle( order=order )
  call display( TRANSPOSE(x), "xij (order="//tostring(order)//")=" )
  call blanklines(nol=2)
end program main
