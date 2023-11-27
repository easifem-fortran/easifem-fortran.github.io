```fortran
program main
use easifemBase
implicit none
real(dfp) :: a(10)
call random_number(a)
call ok( all( a(2:) .approxeq. tail(a) ), "Tail:"  )
end program main
```
