```fortran
program main
use easifemBase
implicit none

character(20) :: astr = ""

CALL OK(IsBlank(astr), "test(1)")
astr = "easifem"
CALL OK(.NOT. IsBlank(astr), "test(2)" )
end program main
```
