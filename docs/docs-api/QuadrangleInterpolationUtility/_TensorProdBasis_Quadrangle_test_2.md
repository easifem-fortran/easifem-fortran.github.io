```fortran
program main
  use easifembase
  use easifemClasses
  implicit none
  real(dfp), allocatable :: xij(:,:), avec(:)
  integer(i4b) :: ii, jj, n, cnt
  real(dfp), allocatable :: ans(:,:)
  integer(i4b) :: p, q, tdof
  type( VTKPlot_ ) :: aplot
  character(len=*), parameter :: fname="./results/test6"

  n = 101
  call reallocate(xij, 2, int(n*n))
  avec= linspace(-1.0_DFP, 1.0_DFP, n)
  cnt=0
  do ii = 1, n
    do jj = 1, n
      cnt=cnt+1
      xij(1,cnt) = avec(ii)
      xij(2,cnt) = avec(jj)
    end do
  end do

  p = 4; q=3
  ans = TensorProdOrthopol_Quadrangle( &
    & p=p, &
    & q=q, &
    & xij=xij, &
    & orthopol1=Legendre, &
    & orthopol2=Legendre )
  
  call aplot%scatter3D( &
    & x=xij(1,:), &
    & y=xij(2, :), &
    & z=ans, &
    & filename=fname//"_p_"//tostring(p)//"_q_"//tostring(q)//".vtp", &
    & label="P")

end program main
```
