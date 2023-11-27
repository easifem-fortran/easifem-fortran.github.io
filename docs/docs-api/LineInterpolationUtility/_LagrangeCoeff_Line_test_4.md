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
  orthopol= Legendre
  coeff = LagrangeCoeff_Line(order=order, xij=xij, orthopol=orthopol)
  call display(coeff, "ans: ") 
end program main
```

```txt title="results"
                      ans:                      
------------------------------------------------
 10.9111    4.5778  -31.6444   38.1333  -20.9778
-24.3333  -10.6000   73.6000  -88.8000   50.1333
 21.6508   10.9841  -70.6032   87.2381  -49.2698
-10.6667   -6.4000   38.4000  -51.2000   29.8667
  2.4381    2.4381   -9.7524   14.6286   -9.7524
```
