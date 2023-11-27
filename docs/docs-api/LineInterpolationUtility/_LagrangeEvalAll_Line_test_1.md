```fortran
program main
  use easifemBase
  implicit none
  integer(i4b) :: order
  real(dfp), parameter :: tol = 1.0E-10
  real(dfp), allocatable :: x(:), coeff(:,:), ans(:), xij(:,:)
  character( len = * ), parameter :: layout="VEFC" 
  integer(i4b) :: ipType
  !! "INCREASING"
  x = [0,1]
  order = 4_I4B
  iptype = Equidistance
  xij = reshape(InterpolationPoint_Line(order=order, iptype=iptype, layout=layout, xij=x), [1, order+1])
  call display(xij, "xij: ")
  coeff = zeros(order+1, order+1, 1.0_DFP)

  ans = LagrangeEvalAll_Line(order, xij(1,1), xij, coeff, firstCall=.true.)
  call ok(ans(1) .approxeq. 1.0_DFP, "tests(1):")
  call ok(all(ans(2:) .approxeq. 0.0_DFP), "tests(2):")

  ans = LagrangeEvalAll_Line(order, xij(1,2),  xij, coeff, firstCall=.false.)
  call ok(softeq( ans(1), 0.0_DFP, tol), "tests(3):")
  call ok(softeq( ans(2), 1.0_DFP, tol), "tests(4):")

  ans = LagrangeEvalAll_Line(order, xij(1,3),  xij, coeff, firstCall=.false.)
  call ok(all(softeq( ans(1:2), 0.0_DFP, tol)), "tests(5):")
  call ok(softeq( ans(3), 1.0_DFP, tol), "tests(6):")

  ans = LagrangeEvalAll_Line(order, xij(1,4),  xij, coeff, firstCall=.false.)
  call ok(all(softeq( ans(1:3), 0.0_DFP, tol)), "tests(7):")
  call ok(softeq( ans(4), 1.0_DFP, tol), "tests(8):")
end program main
```
