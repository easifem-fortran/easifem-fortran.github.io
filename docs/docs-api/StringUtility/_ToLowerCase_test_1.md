```fortran
program main
use easifemBase
implicit none

CHARACTER( LEN = 100 ) :: astr = "HELLO World"
CALL ToLowerCase(astr)
CALL Display(astr, "lowercase astr = ")
end program main 
```
