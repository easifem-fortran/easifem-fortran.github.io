```fortran
program main
  use easifembase
  use easifemClasses
  implicit none
  real(dfp), allocatable :: xij(:,:), avec(:), lambda(:, :)
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

  lambda = BarycentricCoordTriangle(xij, "UNIT")

  BLOCK
    real(dfp), allocatable :: ans(:,:)
    integer(i4b) :: ii, order, pe1, pe2, pe3
    type( VTKPlot_ ) :: aplot
    character(len=*), parameter :: fname="./results/"
    !!
    order=4
    pe1=order; pe2 = order; pe3 = order
    !!
    ans = BarycentricVertexBasis_Triangle(&
      & lambda=lambda )
    !!
    do ii  = 1, size(ans,2)
      call aplot%scatter3D(x=xij(1,:), y=xij(2, :), z=ans(:,ii), &
        & filename=fname//"PVertexBary-" // tostring(ii) // &
        & tostring(ii) //".vtp", &
        & label="P")
    end do
    !!
  END BLOCK
end program main
```

<!-- | | | | -->
<!-- |:---:| :---: | :---: | -->
<!-- | ![](./PVertexBary/PVertexBary-1.png) | ![](./PVertexBary/PVertexBary-1.png) | ![](./PVertexBary/PVertexBary-3.png)  | -->
