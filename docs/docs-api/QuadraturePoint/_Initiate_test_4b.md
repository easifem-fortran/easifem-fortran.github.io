```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(QuadraturePoint_) :: obj
TYPE(ReferenceHexahedron_) :: refelem
INTEGER(I4B) :: order
refelem = ReferenceHexahedron(nsd=3_I4B, xij=RefCoord_Hexahedron("UNIT"))
order = 2_I4B
CALL initiate(obj=obj, &
  & refelem=refelem, &
  & order=order,  &
  & quadratureType=GaussLegendre)
CALL display(mdencode(obj) , "")
END PROGRAM main
```

|  |   |  |  |  |  |  |  |  |
| --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |
| x1 | 0.21132 | 0.21132 | 0.21132 | 0.21132 | 0.78868 | 0.78868 | 0.78868 | 0.78868 |
| x2 | 0.21132 | 0.21132 | 0.78868 | 0.78868 | 0.21132 | 0.21132 | 0.78868 | 0.78868 |
| x3 | 0.21132 | 0.78868 | 0.21132 | 0.78868 | 0.21132 | 0.78868 | 0.21132 | 0.78868 |
| w | 0.125 | 0.125 | 0.125 | 0.125 | 0.125 | 0.125 | 0.125 | 0.125 |
