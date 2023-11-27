```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(QuadraturePoint_) :: obj
TYPE(ReferenceHexahedron_) :: refelem
INTEGER(I4B) :: order
refelem = ReferenceHexahedron(nsd=3_I4B)
CALL initiate(obj=obj, &
  & refelem=refelem, &
  & p=4,  &
  & q=3,  &
  & r=2,  &
  & quadratureType1=GaussLegendre, &
  & quadratureType2=GaussLegendre, &
  & quadratureType3=GaussLegendre &
  & )
CALL display(mdencode(obj) , "")
END PROGRAM main
```

|  |   |  |  |  |  |  |  |  |  |  |  |  |
| --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |
| x1 | -0.7746 | -0.7746 | -0.7746 | -0.7746 | 3.64292E-16 | 3.46945E-16 | 3.46945E-16 | 3.88578E-16 | 0.7746 | 0.7746 | 0.7746 | 0.7746 |
| x2 | -0.57735 | -0.57735 | 0.57735 | 0.57735 | -0.57735 | -0.57735 | 0.57735 | 0.57735 | -0.57735 | -0.57735 | 0.57735 | 0.57735 |
| x3 | -0.57735 | 0.57735 | -0.57735 | 0.57735 | -0.57735 | 0.57735 | -0.57735 | 0.57735 | -0.57735 | 0.57735 | -0.57735 | 0.57735 |
| w | 0.55556 | 0.55556 | 0.55556 | 0.55556 | 0.88889 | 0.88889 | 0.88889 | 0.88889 | 0.55556 | 0.55556 | 0.55556 | 0.55556 |
