```fortran
program main
use easifemBase
implicit none

CHARACTER( LEN = 100 ) :: astr="hello world, hello people!"
INTEGER( I4B ), allocatable :: indices(:)

CALL strFind(astr, "hello", indices)
CALL OK( ALL(indices .EQ. [1, 14] ), "test(1): " )
end program main
```
