```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(String), ALLOCATABLE :: rh(:), ch(:)
INTEGER(i4b), ALLOCATABLE :: ivec(:)
INTEGER(I4B) :: ii

ivec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
ch = [String("Col heading")]

CALL reallocate(rh, SIZE(ivec))

DO ii = 1, SIZE(ivec)
  rh(ii) = "row-"//tostring(ii)
END DO

CALL Display(mdencode(ivec, ch=ch, rh=rh), "")

END PROGRAM main
```

<details>
<summary>See results</summary>
<div>

|  | Col heading |
|  ---  |  ---  |
| row-1 | 1 |
| row-2 | 2 |
| row-3 | 3 |
| row-4 | 4 |
| row-5 | 5 |
| row-6 | 6 |
| row-7 | 7 |
| row-8 | 8 |
| row-9 | 9 |
| row-10 | 10 |

</div>
</details>
