```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(String), ALLOCATABLE :: rh(:), ch(:)
REAL(DFP), ALLOCATABLE :: amat(:, :)
INTEGER(I4B) :: ii

CALL Reallocate(amat, 3, 4)
CALL RANDOM_NUMBER(amat)

CALL Reallocate(rh, SIZE(amat, 1))
CALL Reallocate(ch, SIZE(amat, 2))
DO ii = 1, SIZE(ch)
  ch(ii) = "col-"//tostring(ii)
END DO

DO ii = 1, SIZE(rh)
  rh(ii) = "row-"//tostring(ii)
END DO

CALL Display(mdencode(amat, ch=ch, rh=rh), "")

END PROGRAM main
```

<details>
<summary>See results</summary>
<div>


|  | col-1 | col-2 | col-3 | col-4 | 
|  ---  |  ---  |  ---  |  ---  |  ---  | 
| row-1 | 0.32706 | 0.66536 | 0.84993 | 0.11635 | 
| row-2 | 0.57136 | 0.53878 | 0.87319 | 7.87399E-02 | 
| row-3 | 0.85594 | 0.28422 | 0.46758 | 0.47219 | 

</div>
</details>
