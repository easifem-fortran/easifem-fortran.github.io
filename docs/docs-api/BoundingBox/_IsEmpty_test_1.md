This example shows the use of [IsEmpty](./IsEmpty.md) function.

```fortran
program main
use easifemBase
implicit none
  type(BoundingBox_) :: obj
  call initiate( obj, nsd = 2, lim=[0.0_DFP, 1.0_DFP, 0.0_DFP, 1.0_DFP, 0.0_DFP, 0.0_DFP] )
  call display( IsEmpty(obj), msg="IsEmpty = " )


  call initiate( obj, nsd = 2, lim=[0.0_DFP, 0.0_DFP, 0.0_DFP, 0.0_DFP, 0.0_DFP, 0.0_DFP] )
  call display( IsEmpty(obj), msg="IsEmpty = " )
end program main
```
