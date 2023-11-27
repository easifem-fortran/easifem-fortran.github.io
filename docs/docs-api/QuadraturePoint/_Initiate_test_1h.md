```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(QuadraturePoint_) :: obj
TYPE(ReferenceLine_) :: refelem
INTEGER(I4B) :: order
refelem = ReferenceLine(nsd=1_I4B)
order = 4_I4B
CALL initiate(obj=obj, &
  & refelem=refelem, &
  & order=order,  &
  & quadratureType=GaussLegendreRadauRight)
CALL display(mdencode(obj), "")
END PROGRAM main
```
