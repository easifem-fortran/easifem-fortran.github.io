```fortran
program main
use easifemBase
implicit none

real(dfp) :: a, b

a = 3; b=4
CALL Swap(a,b)
CALL OK(a.EQ.4 .AND. b.EQ.3, "test(1):")
end program main
```
