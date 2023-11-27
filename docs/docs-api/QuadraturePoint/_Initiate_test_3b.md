```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(QuadraturePoint_) :: obj
TYPE(ReferenceQuadrangle_) :: refelem
INTEGER(I4B) :: order

refelem = ReferenceQuadrangle(nsd=2_I4B, xij=RefCoord_Quadrangle("UNIT"))
order = 4_I4B
CALL initiate(obj=obj, &
  & refelem=refelem, &
  & order=order,  &
  & quadratureType=GaussLegendre)
CALL display(mdencode(obj), "")

END PROGRAM main


```

<details>
<summary>See results</summary>
<div>

|  |   |  |  |  |  |  |  |  |  |
| --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |  --- |
| x1 | 0.1127 | 0.1127 | 0.1127 | 0.5 | 0.5 | 0.5 | 0.8873 | 0.8873 | 0.8873 |
| x2 | 0.1127 | 0.5 | 0.8873 | 0.1127 | 0.5 | 0.8873 | 0.1127 | 0.5 | 0.8873 |
| w | 7.71605E-02 | 0.12346 | 7.71605E-02 | 0.12346 | 0.19753 | 0.12346 | 7.71605E-02 | 0.12346 | 7.71605E-02 |

</div>
</details>
