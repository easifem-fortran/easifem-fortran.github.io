```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(String), ALLOCATABLE :: rh(:), ch(:)
INTEGER(i4b), ALLOCATABLE :: ivec(:)
INTEGER(I4B) :: ii

ivec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
rh = [String("Row heading")]
ch = [String("")]
CALL Display(mdencode(ivec, ch=ch, rh=rh), "")

END PROGRAM main
```

<details>
<summary>See results</summary>
<div>


|  |   |  |  |  |  |  |  |  |  |  |
|  ---  | ---  | ---  | ---  | ---  | ---  | ---  | ---  | ---  | ---  | ---  |
| Row heading |1 |2 |3 |4 |5 |6 |7 |8 |9 |10 |

</div>
</details>
