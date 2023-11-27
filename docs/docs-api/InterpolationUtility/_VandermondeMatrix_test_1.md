```fortran
program main
use easifemBase
implicit none
real(dfp), allocatable :: x(:)
x = [1,2]
call display(mdencode(VandermondeMatrix(order=3, x=x) ), "ans: " )
end program main
```

<details>
<summary>See results</summary>
<div>

ans:

|  |  |  |  |
 |  --- |  --- |  --- |  --- |
 | 1 | 1 | 1 | 1 |
 | 1 | 2 | 4 | 8 |

</div>
</details>
