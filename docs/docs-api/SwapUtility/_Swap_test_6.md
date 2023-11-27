```fortran
program main
use easifemBase
implicit none

real(dfp) :: a(3, 2), b(3, 2)

a = 3; b=4
CALL Swap(a,b)
CALL OK(ALL(a.EQ.4) .AND. ALL(b.EQ.3), "test(1):")
end program main
```
