```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(QuadraturePoint_) :: obj
TYPE(ReferenceTriangle_) :: refelem
INTEGER(I4B) :: order
refelem = ReferenceTriangle(nsd=2_I4B)
order = 4_I4B
CALL initiate(obj=obj, &
  & refelem=refelem, &
  & order=order,  &
  & quadratureType="GaussLegendre")
CALL display(obj, "ans: ")
END PROGRAM main
```
