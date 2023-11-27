```fortran
program main
  use easifembase
  use easifemClasses
  implicit none
  real(dfp), allocatable :: xij(:,:), ans(:,:)
  integer(i4b) :: order, tdof
  type( PLPlot_ ) :: aplot
  character(len=*), parameter :: fname="./results/test5"
  type(String), allocatable :: strs(:)

  order = 2
  call reallocate(xij, 2, 101)
  xij(1,:)= linspace(-1.0_DFP, 1.0_DFP, size(xij,2))
  ans = Dubiner_Quadrangle(order=order, xij=xij)
  strs = [String("P00"), String("P01"), String("P02"), &
    & String("P10"), String("P11"), String("P20") ]
  call aplot%LinePlot(x=xij(1,:), y=ans, &
    & filename=fname//"_order="//tostring(order)//".svg", &
    & legendTexts=strs)
end program main
```
