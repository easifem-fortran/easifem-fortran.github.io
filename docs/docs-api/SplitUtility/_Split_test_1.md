```fortran
program main
use easifemBase
implicit none

real(dfp) :: areal(10), breal(9)

call random_number(areal)
call random_number(breal)

call ok(all( areal(:5) .approxeq. split(areal,1) ), "split:" )
call ok(all( areal(6:) .approxeq. split(areal,2) ), "split:" )

call ok(all( breal(:4) .approxeq. split(breal,1) ), "split:" )
call ok(all( breal(5:) .approxeq. split(breal,2) ), "split:" )
end program main
```
