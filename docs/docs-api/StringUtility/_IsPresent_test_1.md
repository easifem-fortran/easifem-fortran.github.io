```fortran
program main
use easifemBase
implicit none
CHARACTER( LEN = 100 ) :: astr = "hello world, hello people"
CALL OK(IsPresent(astr, "hello"), "test(1): " )
end program main
```
