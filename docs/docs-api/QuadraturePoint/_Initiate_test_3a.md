```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(QuadraturePoint_) :: obj
TYPE(ReferenceQuadrangle_) :: refelem
INTEGER(I4B) :: order
refelem = ReferenceQuadrangle(nsd=2_I4B)
order = 4_I4B
CALL initiate(obj=obj, &
  & refelem=refelem, &
  & order=order,  &
  & quadratureType=GaussLegendre)
CALL display(mdencode(obj) , "")
END PROGRAM main
```

<details>
<summary>See results</summary>
<div>

|  |   |  |  |  |  |  |  |  |  |
| --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |
| x1 | -0.7746 | -0.7746 | -0.7746 | 4.3715E-16 | 3.88578E-16 | 4.44089E-16 | 0.7746 | 0.7746 | 0.7746 |
| x2 | -0.7746 | 4.44089E-16 | 0.7746 | -0.7746 | 3.88578E-16 | 0.7746 | -0.7746 | 4.16334E-16 | 0.7746 |
| w | 0.30864 | 0.49383 | 0.30864 | 0.49383 | 0.79012 | 0.49383 | 0.30864 | 0.49383 | 0.30864 |

</div>
</details>
