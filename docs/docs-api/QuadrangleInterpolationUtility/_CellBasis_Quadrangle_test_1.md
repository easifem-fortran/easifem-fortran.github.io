```fortran
program main
  use easifembase
  use easifemClasses
  implicit none
  real(dfp), allocatable :: xij(:,:), avec(:)
  integer(i4b) :: ii, jj, cnt, n
  real(dfp), allocatable :: ans(:,:)
  integer(i4b) :: order
  type( VTKPlot_ ) :: aplot
  character(len=*), parameter :: fname="./results/"

  n = 51
  call reallocate(avec, n)
  call reallocate(xij, 2, int((n+1)*(n+2)/2))
  avec= linspace(0.0_DFP, 1.0_DFP, n)
  cnt=0
  do ii = 1, n
    do jj = 1, n-ii+1
      cnt=cnt+1
      xij(1,cnt) = avec(ii)
      xij(2,cnt) = avec(jj)
    end do
  end do

  order=5
  ans = CellBasis_Triangle(order=order, xij=xij, refTriangle="UNIT")
  do ii  = 1, size(ans,2)
    call aplot%scatter3D(x=xij(1,:), y=xij(2, :), z=ans(:,ii), &
      & filename=fname//"CellBasis( order=" // tostring(order) // &
        & " )" // tostring(ii) // &
        & ".vtp", &
      & label="P")
  end do
end program main
```
