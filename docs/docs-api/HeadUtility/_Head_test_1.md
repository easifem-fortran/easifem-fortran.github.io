```fortran
program main
use easifemBase
implicit none

real(dfp) :: avec(10)

call random_number(avec)

call OK(head(avec) .APPROXEQ. avec(1), "Head:" )

end program main
```
