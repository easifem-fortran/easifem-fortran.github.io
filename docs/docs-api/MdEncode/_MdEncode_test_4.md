```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(String), ALLOCATABLE :: rh(:), ch(:)
INTEGER(i4b), ALLOCATABLE :: ivec(:)
INTEGER(I4B) :: ii

ivec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
rh = [String("Row heading")]

CALL reallocate(ch, SIZE(ivec))

DO ii = 1, SIZE(ivec)
  ch(ii) = "col-"//tostring(ii)
END DO

CALL Display(mdencode(ivec, ch=ch, rh=rh), "")

END PROGRAM main
```

<details>
<summary>See results</summary>
<div>


|  | col-1 |col-2 |col-3 |col-4 |col-5 |col-6 |col-7 |col-8 |col-9 |col-10 |
|  ---  | ---  | ---  | ---  | ---  | ---  | ---  | ---  | ---  | ---  | ---  |
| Row heading |1 |2 |3 |4 |5 |6 |7 |8 |9 |10 |

</div>
</details>
