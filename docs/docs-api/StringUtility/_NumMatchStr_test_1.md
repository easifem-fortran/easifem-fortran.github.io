```fortran
program main
use easifemBase
implicit none

CHARACTER( LEN = 100 ) :: astr = "hello, hello, hello world"

CALL OK( NumMatchStr(astr, "hello") .EQ. 3, "test(1): ")
end program main
```
