```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(String) :: rh(1), ch(1)
INTEGER(i4b), ALLOCATABLE :: ivec(:)

ivec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
ch(1) = "Col heading"
rh(1) = "Row heading"

CALL Display(mdencode(ivec, ch=ch, rh=rh), "")

END PROGRAM main
```

<details>
<summary>See results</summary>
<div>

| Col heading |
|  ---  |
| 1 |
| 2 |
| 3 |
| 4 |
| 5 |
| 6 |
| 7 |
| 8 |
| 9 |
| 10 |

</div>
</details>
