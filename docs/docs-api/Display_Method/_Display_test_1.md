This example shows the usage of [Display](./Display.md) method.

```fortran
module test_Display
use easifemBase
implicit none

contains

subroutine test1
  call display(msg="msg = ", unitno=stdout)
  call display( "test-1 [OK!]")
end subroutine test1

subroutine test2
  call display( msg="hello", val=" world!", unitno=stdout)
  call display( "test-2 [OK!]")
end subroutine test2

subroutine test3
  call display( val=1.0_DFP, msg="REAL-SCALAR", unitno=stdout)
  call display( "test-3 [OK!]")
end subroutine test3

subroutine test4
  call display( val=1_I4B, msg="INT-SCALAR", unitno=stdout)
  call display( "test-4 [OK!]")
end subroutine test4

subroutine test5
  call display( val=.TRUE., msg="LOGICAL-scalar", unitno=stdout)
  call display( "test-5 [OK!]")
end subroutine test5

subroutine test6
  real( dfp ) :: vec(10)
  call RANDOM_NUMBER(vec)
  call display( val=vec, msg="Vector-default", unitno=stdout)
  call display( val=vec, msg="Vector-col", unitno=stdout, orient="col")
  call display( "test-6 [OK!]")
end subroutine test6

subroutine test7
  integer( i4b ) :: vec(10)
  vec(1:5) = 1; vec(6:)=2
  call display( val=vec, msg="Vector-default", unitno=stdout)
  call display( val=vec, msg="Vector-row", unitno=stdout, orient="row")
  call display( "test-7 [OK!]")
end subroutine test7

subroutine test8
  real( dfp ) :: mat(10, 10)
  call RANDOM_NUMBER(mat)
  call display( val=mat, msg="Rank2 Array", unitno=stdout)
  call display( "test-8 [OK!]")
end subroutine test8

subroutine test9
  real( dfp ) :: mat(5, 5, 2)
  call RANDOM_NUMBER(mat)
  call display( val=mat, msg="Rank3 Array", unitno=stdout)
  call display( "test-9 [OK!]")
end subroutine test9

subroutine test10
  real( dfp ) :: mat(3, 3, 2, 2)
  call RANDOM_NUMBER(mat)
  call display( val=mat, msg="Rank4 Array", unitno=stdout)
  call display( "test-10 [OK!]")
end subroutine test10

subroutine test11
  call display( TOSTRING( 1 ) )
  call display( TOSTRING( 1.0 ) )
  call display( TOSTRING( [1,2,3] ) )
  call display( TOSTRING( [1.0, 2.0, 3.0] ) )
  call display( "test-10 [OK!]")
end subroutine

end module test_Display


program main
  use test_Display
  implicit none
  call TIMESTAMP()
  call setDisplayProfile( DisplayProfileTerminal )
  call test1; call test2; call test3; call test4
  call test5; call test6; call test7; call test8
  call test9; call test10; call test11; 
end program main
```
