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
  ans = LagrangeCoeff_Line(order, 1, xij)
  call display(ans, "ans: ") 
end program main
```

```txt title="results"
  ans:  
--------
  1.0000
 -8.3333
 23.3333
-26.6667
 10.6667
```
