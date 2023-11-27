```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

REAL(dfp), ALLOCATABLE :: xij(:, :), ans(:, :)
INTEGER(I4B) :: order, quadType, ii
TYPE(String) :: refTetrahedron
TYPE(String), ALLOCATABLE :: rh(:), ch(:)

refTetrahedron = "UNIT"
order = 2
quadType = GaussLegendre
ans = QuadraturePoint_Tetrahedron(&
  & order=order, &
  & quadType=quadType, &
  & refTetrahedron=refTetrahedron%chars())

CALL Reallocate(rh, 4)
rh(1) = "`xi1`"
rh(2) = "`xi2`"
rh(3) = "`xi3`"
rh(4) = "`wt`"

CALL reallocate(ch, SIZE(ans, 2))
DO ii = 1, SIZE(ch)
  ch(ii) = "Point-"//tostring(ii)
END DO

CALL Display(mdencode(ans, rh=rh, ch=ch), "ans"//char_lf2)

END PROGRAM main
```

<details>
<summary>See results</summary>
<div>


|   Ans | Point-1 | Point-2 | Point-3 | Point-4 | 
|  ---  |  ---  |  ---  |  ---  |  ---  | 
| `xi1` | 0.58541 | 0.1382 | 0.1382 | 0.1382 | 
| `xi2` | 0.1382 | 0.1382 | 0.1382 | 0.58541 | 
| `xi3` | 0.1382 | 0.1382 | 0.58541 | 0.1382 | 
| `wt` | 4.16667E-02 | 4.16667E-02 | 4.16667E-02 | 4.16667E-02 | 

</div>
</details>
