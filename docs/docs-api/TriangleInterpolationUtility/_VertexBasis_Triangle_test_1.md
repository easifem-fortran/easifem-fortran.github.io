```fortran
program main
  use easifembase
  use easifemClasses
  implicit none
  real(dfp), allocatable :: xij(:,:), avec(:)
  integer(i4b) :: ii, jj, cnt, n

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

  BLOCK
    real(dfp), allocatable :: ans(:,:)
    integer(i4b) :: ii, order, pe1, pe2, pe3
    type( VTKPlot_ ) :: aplot
    character(len=*), parameter :: fname="./results/"
    !!
    order=4
    pe1=order; pe2 = order; pe3 = order
    !!
    ans = VertexBasis_Triangle(xij=xij, refTriangle="UNIT")
    !!
    do ii  = 1, size(ans,2)
      call aplot%scatter3D(x=xij(1,:), y=xij(2, :), z=ans(:,ii), &
        & filename=fname//"PVertex-" // &
        & tostring(ii) //".vtp", &
        & label="P")
    end do
    !!
  END BLOCK
end program main
```

<!-- | | | | -->
<!-- |:---:| :---: | :---: | -->
<!-- | ![](./PVertex/PVertex-1.png) | ![](./PVertex/PVertex-1.png) | ![](./PVertex/PVertex-3.png)  | -->
