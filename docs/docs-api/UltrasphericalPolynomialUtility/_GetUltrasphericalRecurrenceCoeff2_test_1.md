```fortran
program main
use easifembase
implicit none

real(dfp), allocatable :: A(:)
real(dfp), allocatable :: B(:)
real(dfp), allocatable :: C(:)
integer(i4b) :: n

n = 5; call reallocate(A, n, B, n, C, n)

call GetUltrasphericalRecurrenceCoeff2(n=n, &
& lambda=0.5_DFP, &
& A=A, B=B, C=C)

call display( mdencode(A .colconcat. B .colconcat. C), "ans = ")

end program main
```

<details>
<summary>See results</summary>
<div>

ans =

|  |  |  |
|  --- |  --- |  --- |
| 1 | 0 | 0 |
| 1.5 | 0 | 0.5 |
| 1.6667 | 0 | 0.66667 |
| 1.75 | 0 | 0.75 |
| 1.8 | 0 | 0.8 |

</div>
</details>
