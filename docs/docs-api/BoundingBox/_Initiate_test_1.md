```fortran
module test_BoundingBox
use easifemBase
implicit none
contains

subroutine test1
  type(BoundingBox_) :: obj
  call initiate( obj, nsd = 2, lim=[0.0_DFP, 1.0_DFP, 0.0_DFP, 1.0_DFP, 0.0_DFP, 0.0_DFP] )
  call display( obj, msg="test1" )
end subroutine test1


subroutine test2
  type(BoundingBox_) :: obj, obj2
  call initiate( obj, 2, [0.0_DFP, 1.0_DFP, 0.0_DFP, 1.0_DFP, 0.0_DFP, 0.0_DFP] )
  call initiate(obj2, obj)
  call display( obj2, msg="test2")
end subroutine test2


subroutine test3
  type(BoundingBox_) :: obj
  obj = BoundingBox( nsd = 2, lim=[0.0_DFP, 1.0_DFP, 0.0_DFP, 1.0_DFP, 0.0_DFP, 0.0_DFP] )
  call display( obj, msg="test3" )
end subroutine test3


subroutine test4
  type(BoundingBox_) :: obj, obj2
  call initiate( obj, 2, [0.0_DFP, 1.0_DFP, 0.0_DFP, 1.0_DFP, 0.0_DFP, 0.0_DFP] )
  obj2 = BoundingBox(obj)
  call display( obj2, msg="test4")
end subroutine test4


subroutine test5
  type(BoundingBox_) :: obj
  obj = boundingBox(RESHAPE([0.0_DFP, 1.0_DFP, 0.0_DFP, 1.0_DFP, 0.0_DFP, 0.0_DFP], [2,3]))
  call display(obj, "test5")
end subroutine test5


subroutine test6
  type(BoundingBox_) :: obj
  type(BoundingBox_), pointer :: obj2

  call initiate( obj, 2, [0.0_DFP, 1.0_DFP, 0.0_DFP, 1.0_DFP, 0.0_DFP, 0.0_DFP] )
  obj2 => BoundingBox_Pointer(obj)
  call display( obj2, msg="test6")
end subroutine test6


subroutine test7
  type(BoundingBox_), pointer :: obj
  obj => BoundingBox_Pointer(nsd=3, lim=[0.0_DFP, 1.0_DFP, 0.0_DFP, 1.0_DFP, 0.0_DFP, 0.0_DFP])
  call display(obj, "test7")
end subroutine test7


end module test_BoundingBox


program main
use test_BoundingBox
implicit none

call test1
call test2
call test3
call test4
call test5
call test6
call test7

end program main
```
