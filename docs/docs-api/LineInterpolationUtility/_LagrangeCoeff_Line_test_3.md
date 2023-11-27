```fortran
program main
  use easifemBase
  implicit none
  integer(i4b) :: order
  real(dfp), parameter :: tol = 1.0E-10
  real(dfp), allocatable :: x(:), coeff(:,:), ans(:), xij(:,:)
  character( len = * ), parameter :: layout="VEFC" 
  integer(i4b) :: ipType, orthopol
  !! "INCREASING"
  x = [0,1]
  order = 4_I4B
  iptype = Equidistance
  xij = reshape(InterpolationPoint_Line(order=order, iptype=iptype, layout=layout, xij=x), [1, order+1])
  call display(xij, "xij: ")
  orthopol= Monomial
  coeff = LagrangeCoeff_Line(order=order, xij=xij, orthopol=orthopol)
  call display(coeff, "ans: ") 
end program main
```

```txt title="results"
                      ans:                      
------------------------------------------------
   1.000    -0.000     0.000     0.000     0.000
  -8.333    -1.000    16.000   -12.000     5.333
  23.333     7.333   -69.333    76.000   -37.333
 -26.667   -16.000    96.000  -128.000    74.667
  10.667    10.667   -42.667    64.000   -42.667
```
