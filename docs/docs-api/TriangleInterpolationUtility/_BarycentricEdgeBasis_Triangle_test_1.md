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
    ans = BarycentricEdgeBasis_Triangle(&
      & pe1=pe1, pe2=pe2, pe3=pe3 , &
      & lambda=lambda )
    !!
    do ii  = 1, size(ans,2)
      call aplot%scatter3D(x=xij(1,:), y=xij(2, :), z=ans(:,ii), &
        & filename=fname//"PVertexBary( order=" // tostring(order) // &
          & ", pe1="//tostring(pe1) // &
          & ", pe2="//tostring(pe2) // &
          & ", pe3="//tostring(pe3) // &
          & " )" // tostring(ii) // &
          & " )" // tostring(ii) // &
          & ".vtp", &
        & label="P")
    end do
    !!
  END BLOCK
end program main
```

<!-- | | | | -->
<!-- |:---:| :---: | :---: | -->
<!-- | ![](./PEdgeBary-444/PEdgeBary-444-1.png) | ![](./PEdgeBary-444/PEdgeBary-444-2.png) |  | -->
<!-- | ![](./PEdgeBary-444/PEdgeBary-444-3.png) | ![](./PEdgeBary-444/PEdgeBary-444-4.png) |  | -->
<!-- | ![](./PEdgeBary-444/PEdgeBary-444-5.png) | ![](./PEdgeBary-444/PEdgeBary-444-6.png) |  | -->
<!-- | ![](./PEdgeBary-444/PEdgeBary-444-7.png) | ![](./PEdgeBary-444/PEdgeBary-444-8.png) |  | -->
