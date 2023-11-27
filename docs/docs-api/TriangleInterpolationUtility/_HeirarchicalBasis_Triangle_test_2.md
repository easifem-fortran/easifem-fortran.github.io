:::note "order=3; pe1=3; pe2=3; pe3=3"
:::

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
    order=3; pe1=3; pe2=3; pe3=3
    !!
    ans = HeirarchicalBasis_Triangle(&
      & order=order, pe1=pe1, pe2=pe2, pe3=pe3, &
      & xij=xij, refTriangle="UNIT")
    !!
    do ii  = 1, size(ans,2)
      call aplot%scatter3D(x=xij(1,:), y=xij(2, :), z=ans(:,ii), &
        & filename=fname//"Ph( order=" // tostring(order) // &
          & ", pe1="//tostring(pe1) // &
          & ", pe2="//tostring(pe2) // &
          & ", pe3="//tostring(pe3) // &
          & " )" // tostring(ii) // &
          & ".vtp", &
        & label="P")
    end do
    !!
  END BLOCK

end program main
```

<!-- | | | | -->
<!-- |:---: | :---: | :---: | -->
<!-- | ![](./Ph333/Ph333-1.png) | ![](./Ph333/Ph333-2.png) | ![](./Ph333/Ph333-3.png) | -->
<!-- | ![](./Ph333/Ph333-4.png) | ![](./Ph333/Ph333-5.png) | ![](./Ph333/Ph333-6.png) | -->
<!-- | ![](./Ph333/Ph333-7.png) | ![](./Ph333/Ph333-8.png) | ![](./Ph333/Ph333-9.png) | -->
<!-- | ![](./Ph333/Ph333-10.png) | | | -->
