```fortran
program main
use easifemBase
implicit none

character(20) :: astr = "HELLO"

CALL Display(LowerCase(astr), "hello=" )

end program main
```
