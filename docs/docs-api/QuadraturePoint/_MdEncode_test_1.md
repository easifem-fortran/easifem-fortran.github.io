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
  & quadratureType=GaussLegendre)
CALL display(MdEncode(obj) , "ans: " // char_lf // char_lf)
END PROGRAM main
```

|           |         |             |         |
| ---       |  ---    |  ---        |  ---    |
| x1 | -0.7746 | 1.59632E-16 | 0.7746  |
| w       | 0.55556 | 0.88889     | 0.55556 |
