```fortran
program main
  use easifemBase
  implicit none
  integer(i4b) :: order
  real(dfp), parameter :: tol = 1.0E-10
  real(dfp), allocatable :: x(:), coeff(:,:), ans(:), xij(:,:)
  character( len = * ), parameter :: layout="VEFC" 
  integer(i4b) :: ipType, orthopol
  x = [0,1]
  order = 4_I4B
  iptype = Equidistance
  xij = reshape(InterpolationPoint_Line(order=order, iptype=iptype, layout=layout, xij=x), [1, order+1])
  call display(xij, "xij: ")
  orthopol= Chebyshev
  coeff = LagrangeCoeff_Line(order=order, xij=xij, orthopol=orthopol)
  call display(coeff, "ans: ") 
end program main
```

```txt title="results"
                      ans:                      
------------------------------------------------
  16.667     7.667   -50.667    62.000   -34.667
 -28.333   -13.000    88.000  -108.000    61.333
  17.000     9.000   -56.000    70.000   -40.000
  -6.667    -4.000    24.000   -32.000    18.667
   1.333     1.333    -5.333     8.000    -5.333
```
