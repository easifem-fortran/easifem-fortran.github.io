```fortran
program main
use easifembase
implicit none

real(dfp), allocatable :: alphacoeff(:)
real(dfp), allocatable :: betacoeff(:)
integer(i4b) :: n

n = 5; call reallocate(alphacoeff, n, betacoeff, n)

call GetLegendreRecurrenceCoeff(n=n, &
& alphacoeff=alphacoeff, betacoeff=betacoeff)

call display( alphacoeff .colconcat. betacoeff, "ans = ")

end program main
```

<details>
<summary>See results</summary>
<div>

```txt title="results"
     ans =      
----------------
0.00000  2.00000
0.00000  0.33333
0.00000  0.26667
0.00000  0.25714
0.00000  0.25397
```

</div>
</details>
