```fortran
PROGRAM main
USE easifembase
USE easifemClasses
IMPLICIT NONE
INTEGER(i4b) :: i1, i2, order
REAL(dfp), ALLOCATABLE :: x(:, :)
TYPE(String) :: astr
TYPE(VTKPlot_) :: aplot
CHARACTER(*), PARAMETER :: filename = "./equidistance"
order = 1
x = EquidistancePoint_Hexahedron(order=order)
CALL aplot%scatter3D( &
  & x=x(1, :),&
  & y=x(2, :),&
  & z=x(3, :), &
  & label="order1", &
  & filename=filename//"-order-"//tostring(order)//".vtp")
END PROGRAM main
```
