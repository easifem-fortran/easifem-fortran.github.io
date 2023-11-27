```fortran
program main
use easifemBase
implicit none

real(dfp) :: mat(4,4)

CALL Assert( &
  & mat=mat, &
  & s=[4,4], &
  & msg="shape of mat is not same as [4,4]", &
  & line=__LINE__, &
  & file=__FILE__, &
  & routine="main()")

CALL Assert( &
  & mat=mat, &
  & s=[5,5], &
  & msg="shape of mat is not same as [5,5]", &
  & line=__LINE__, &
  & file=__FILE__, &
  & routine="main()")

end program main
```
