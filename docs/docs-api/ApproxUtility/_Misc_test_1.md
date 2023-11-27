```fortran
program main
use easifemBase
implicit none
INTEGER( I4B ) :: aint
REAL( DFP ) :: areal
aint = "12"
CALL Display(aint, "aint = ")
areal = "12.23"
call display(areal, "areal = ")
end program main
```
