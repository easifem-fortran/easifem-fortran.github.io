```fortran
program main
use easifemBase
implicit none

character(len=10) :: astr = " ", astr2="    ", astr3="  "

CALL OK(IsWhiteChar(astr), "test(1): " )
CALL OK(IsWhiteChar(astr2), "test(2): " )
CALL OK(IsWhiteChar(astr3), "test(3): " )

end program main
```
