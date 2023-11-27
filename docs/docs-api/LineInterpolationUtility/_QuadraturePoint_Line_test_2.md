```fortran
program main
  use easifemBase
  implicit none
  integer(i4b) :: order
  real(dfp) :: x
  real(dfp), allocatable :: xij(:,:), coeff(:,:), ans(:, :)
  character( len = * ), parameter :: layout="INCREASING" 
  integer(i4b) :: quadType

  order = 4_I4B
  quadType = GaussLegendre

  ans = QuadraturePoint_Line( &
    & order=order, &
    & quadType=quadType, &
    & xij=[-1.0_DFP, 1.0_DFP], &
    & layout="INCREASING")

  call display(ans, "ans: ")

end program main
```
