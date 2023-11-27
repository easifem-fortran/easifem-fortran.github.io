```fortran
program main
use easifemBase
implicit none

CHARACTER( LEN = 100 ) :: astr = "hello world"
CALL ToUpperCase(astr)
CALL Display(astr, "uppercase astr = ")
end program main 
```
