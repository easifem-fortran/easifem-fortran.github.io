```fortran
program main
use easifemBase
implicit none

real(dfp), allocatable :: x(:,:), y(:,:)

call meshgrid(x, y, arange(0._dfp,3._dfp), arange(5._dfp, 8._dfp) )
call display(mdencode(x), "x:")
call display(mdencode(y), "y:")
end program main
```

<details>
<summary>See results</summary>
<div>

x:

|  |  |  |  |
 |  --- |  --- |  --- |  --- |
 | 0 | 0 | 0 | 0 |
 | 1 | 1 | 1 | 1 |
 | 2 | 2 | 2 | 2 |
 | 3 | 3 | 3 | 3 |

y:

|  |  |  |  |
 |  --- |  --- |  --- |  --- |
 | 5 | 6 | 7 | 8 |
 | 5 | 6 | 7 | 8 |
 | 5 | 6 | 7 | 8 |
 | 5 | 6 | 7 | 8 |

</div>
</details>
