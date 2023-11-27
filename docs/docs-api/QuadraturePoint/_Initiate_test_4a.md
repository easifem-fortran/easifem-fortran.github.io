```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(QuadraturePoint_) :: obj
TYPE(ReferenceHexahedron_) :: refelem
INTEGER(I4B) :: order
refelem = ReferenceHexahedron(nsd=3_I4B)
order = 2_I4B
CALL initiate(obj=obj, &
  & refelem=refelem, &
  & order=order,  &
  & quadratureType=GaussLegendre)
CALL display(mdencode(obj), "ans: ")
END PROGRAM main
```

|  |   |  |  |  |  |  |  |  |
| --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |
| x1 | -0.57735 | -0.57735 | -0.57735 | -0.57735 | 0.57735 | 0.57735 | 0.57735 | 0.57735 |
| x2 | -0.57735 | -0.57735 | 0.57735 | 0.57735 | -0.57735 | -0.57735 | 0.57735 | 0.57735 |
| x3 | -0.57735 | 0.57735 | -0.57735 | 0.57735 | -0.57735 | 0.57735 | -0.57735 | 0.57735 |
| w | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
