```fortran
program main
use easifemBase
implicit none

real(dfp) :: a, b

a = 3; b=4
CALL Swap(a,b, a .LE.b )
CALL OK(a.EQ.4 .AND. b.EQ.3, "test(1):")


CALL Swap(a,b, a .LE.b )
CALL OK(a.EQ.4 .AND. b.EQ.3, "test(2):")
end program main
```
