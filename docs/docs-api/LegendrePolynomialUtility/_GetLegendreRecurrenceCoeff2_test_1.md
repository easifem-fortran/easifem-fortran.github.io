```fortran
program main
use easifembase
implicit none

real(dfp), allocatable :: A(:)
real(dfp), allocatable :: B(:)
real(dfp), allocatable :: C(:)
integer(i4b) :: n

n = 5; call reallocate(A, n, B, n, C, n)

call GetLegendreRecurrenceCoeff2(n=n, &
& A=A, B=B, C=C)

call display( A .colconcat. B .colconcat. C, "ans = ")

end program main
```

<details>
<summary>See results</summary>
<div>

```txt title="results"
          ans =          
-------------------------
1.00000  0.00000  0.00000
1.50000  0.00000  0.50000
1.66667  0.00000  0.66667
1.75000  0.00000  0.75000
1.80000  0.00000  0.80000
```

</div>
</details>
