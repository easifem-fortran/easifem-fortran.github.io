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
  & p=4,  &
  & q=3,  &
  & r=1,  &
  & quadratureType1=GaussLegendre, &
  & quadratureType2=GaussLegendre, &
  & quadratureType3=GaussLegendre )
CALL display(mdencode(obj) , "")
END PROGRAM main
```

<details>
<summary>See results</summary>
<div>

|  |   |  |  |  |  |  |
| --- |  --- |  --- |  --- |  --- |  --- |  --- |
| x1 | -0.7746 | -0.7746 | 3.60822E-16 | 3.33067E-16 | 0.7746 | 0.7746 |
| x2 | -0.57735 | 0.57735 | -0.57735 | 0.57735 | -0.57735 | 0.57735 |
| w | 0.55556 | 0.55556 | 0.88889 | 0.88889 | 0.55556 | 0.55556 |

</div>
</details>
