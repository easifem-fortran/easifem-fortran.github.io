```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(QuadraturePoint_) :: obj
TYPE(ReferenceTriangle_) :: refelem
INTEGER(I4B) :: order

refelem = ReferenceTriangle(nsd=2_I4B, xij=RefCoord_Triangle("BIUNIT"))
order = 4_I4B
CALL Initiate(obj=obj, &
  & refelem=refelem, &
  & order=order,  &
  & quadratureType=GaussLegendre)
CALL Display(mdencode(obj) , "")
END PROGRAM main
```

<details>
<summary>See results</summary>
<div>

|  |   |  |  |  |  |  |
| --- |  --- |  --- |  --- |  --- |  --- |  --- |
| x1 | -0.81685 | 0.6337 | -0.81685 | -0.1081 | -0.1081 | -0.78379 |
| x2 | -0.81685 | -0.81685 | 0.6337 | -0.78379 | -0.1081 | -0.1081 |
| w | 0.2199 | 0.2199 | 0.2199 | 0.44676 | 0.44676 | 0.44676 |

</div>
</details>
