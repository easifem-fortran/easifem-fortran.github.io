```fortran
program main
use easifemBase
implicit none
call ok( last([1,2,3]) .eq. 3, "last" )
call ok( last([1.,2.,3.]) .approxeq. 3., "last" )
call ok( last("hello world!") .eq. "!", "last" )
end program main
```
