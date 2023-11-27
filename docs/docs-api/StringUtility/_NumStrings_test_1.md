```fortran
program main
use easifemBase
implicit none
character( LEN = 100 ) :: astr="Hello world how are you!"
call OK(NumStrings(astr) .EQ. 5_I4B, "test(1): " )
end program main
```
