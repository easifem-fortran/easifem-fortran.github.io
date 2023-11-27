This example shows the usage of [Display](./Display.md) method for matrices.

```fortran
program main
  use easifemBase
  implicit none
  REAL( DFP ), allocatable :: amat(:, :)
  call TIMESTAMP()

  call reallocate(amat, 5, 5)
  call random_number(amat)
  call display( val=amat, msg="5x5 matrix (always full): ", full=.TRUE. )
  call display( val=amat, msg="5x5 matrix (always full): ", full=.FALSE. )

  call reallocate(amat, 10, 10)
  call random_number(amat)
  call display( val=amat, msg="10x10 (full): ", full=.TRUE. )
  call display( val=amat, msg="10x10 (short): ", full=.FALSE. )


end program main
```
