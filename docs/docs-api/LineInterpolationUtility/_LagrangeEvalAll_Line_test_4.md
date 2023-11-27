```fortran
program main
  use easifemBase
  implicit none
  integer(i4b) :: order
  real(dfp), parameter :: tol = 1.0E-10
  real(dfp), allocatable :: x(:), coeff(:,:), ans(:,:), xij(:,:)
  character( len = * ), parameter :: layout="VEFC" 
  integer(i4b) :: ipType, orthopol
  !! "INCREASING"
  x = [0,1]
  order = 4_I4B
  iptype = GaussLegendreLobatto
  xij = reshape(InterpolationPoint_Line(order=order, iptype=iptype, layout=layout, xij=x), [1, order+1])
  call display(xij, "xij: ")
  coeff = zeros(order+1, order+1, 1.0_DFP)
  orthopol=Legendre
  ans = LagrangeEvalAll_Line(order, xij(1,:), xij, coeff, firstCall=.true., orthopol=orthopol)
  call ok(all(softeq(ans, eye(order+1, 1.0_DFP), tol ) ), "tests(1):")
end program main
```

```txt title="results"
 1.00000   0.00000  -0.00000   0.00000  -0.00000
 0.00000   1.00000   0.00000  -0.00000   0.00000
 0.00000   0.00000   1.00000   0.00000  -0.00000
 0.00000   0.00000  -0.00000   1.00000  -0.00000
 0.00000  -0.00000   0.00000  -0.00000   1.00000
```
