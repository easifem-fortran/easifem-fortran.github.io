This example shows the usage of [Display](./Display.md) method for vectors.

```fortran
program main
  use easifemBase
  implicit none
  REAL( DFP ), allocatable :: avec(:)
  call TIMESTAMP()

  call reallocate(avec, 5)
  call random_number(avec)
  call display( val=avec, msg="A vector of length 5 (always full): ", full=.TRUE. )
  call display( val=avec, msg="A vector of length 5 (always full): ", full=.TRUE., orient="ROW" )

  call display( val=avec, msg="A vector of length 5 (always full): ", full=.FALSE. )
  call display( val=avec, msg="A vector of length 5 (always full): ", full=.FALSE., orient="ROW" )


  call reallocate(avec, 10)
  call random_number(avec)
  call display( val=avec, msg="A vector of length 10 (full): ", full=.TRUE. )
  call display( val=avec, msg="A vector of length 10 (short): ", full=.FALSE. )
  call display( val=avec, msg="A vector of length 10 (short): ", full=.FALSE., orient="ROW" )


end program main
```
