```fortran
program main
  use easifembase
  use easifemClasses
  implicit none
  real(dfp), allocatable :: xij(:,:), avec(:), lambda(:,:)
  integer(i4b) :: ii, jj, cnt, n
```

```fortran title="generate points"
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
```

```fortran title="order=1; pe1=1; pe2=1; pe3=1"
  BLOCK
    real(dfp), allocatable :: ans(:,:)
    integer(i4b) :: ii, order, pe1, pe2, pe3
    type( VTKPlot_ ) :: aplot
    character(len=*), parameter :: fname="./results/"
    !!
    order=1; pe1=1; pe2=1; pe3=1
    !!
    ans = BarycentricHeirarchicalBasis_Triangle(&
      & order=order, pe1=pe1, pe2=pe2, pe3=pe3, &
      & lambda=lambda, refTriangle="UNIT")
    !!
    do ii  = 1, size(ans,2)
      call aplot%scatter3D(x=xij(1,:), y=xij(2, :), z=ans(:,ii), &
        & filename=fname//"Pbary( order=" // tostring(order) // &
          & ", pe1="//tostring(pe1) // &
          & ", pe2="//tostring(pe2) // &
          & ", pe3="//tostring(pe3) // &
          & " )" // tostring(ii) // &
          & ".vtp", &
        & label="P")
    end do
    !!
  END BLOCK
```

<!-- | | | | -->
<!-- |:---:| :---: | :---: | -->
<!-- | ![](./Pbary-111/Pbary-111-1.png) | ![](./Pbary-111/Pbary-111-2.png) | ![](./Pbary-111/Pbary-111-3.png) | -->
<!---->

```fortran title="order=3; pe1=3; pe2=3; pe3=3"
  BLOCK
    real(dfp), allocatable :: ans(:,:)
    integer(i4b) :: ii, order, pe1, pe2, pe3
    type( VTKPlot_ ) :: aplot
    character(len=*), parameter :: fname="./results/"
    !!
    order=3; pe1=3; pe2=3; pe3=3
    !!
    ans = BarycentricHeirarchicalBasis_Triangle(&
      & order=order, pe1=pe1, pe2=pe2, pe3=pe3, &
      & lambda=lambda, refTriangle="UNIT")
    !!
    do ii  = 1, size(ans,2)
      call aplot%scatter3D(x=xij(1,:), y=xij(2, :), z=ans(:,ii), &
        & filename=fname//"Pbary( order=" // tostring(order) // &
          & ", pe1="//tostring(pe1) // &
          & ", pe2="//tostring(pe2) // &
          & ", pe3="//tostring(pe3) // &
          & " )" // tostring(ii) // &
          & ".vtp", &
        & label="P")
    end do
    !!
  END BLOCK
```

<!-- | | | | -->
<!-- |:---:| :---: | :---: | -->
<!-- | ![](./Pbary-333/Pbary-333-1.png) | ![](./Pbary-333/Pbary-333-2.png) | ![](./Pbary-333/Pbary-333-3.png) | -->
<!-- | ![](./Pbary-333/Pbary-333-4.png) | ![](./Pbary-333/Pbary-333-5.png) |  | -->
<!-- | ![](./Pbary-333/Pbary-333-6.png) | ![](./Pbary-333/Pbary-333-7.png) |  | -->
<!-- | ![](./Pbary-333/Pbary-333-8.png) | ![](./Pbary-333/Pbary-333-9.png) |  | -->
<!-- | ![](./Pbary-333/Pbary-333-10.png) |  |  | -->

```fortran title="order=4; pe1=4; pe2=4; pe3=4"
  BLOCK
    real(dfp), allocatable :: ans(:,:)
    integer(i4b) :: ii, order, pe1, pe2, pe3
    type( VTKPlot_ ) :: aplot
    character(len=*), parameter :: fname="./results/"
    !!
    order=4; pe1=4; pe2=4; pe3=4
    !!
    ans = BarycentricHeirarchicalBasis_Triangle(&
      & order=order, pe1=pe1, pe2=pe2, pe3=pe3, &
      & lambda=lambda, refTriangle="UNIT")
    !!
    do ii  = 1, size(ans,2)
      call aplot%scatter3D(x=xij(1,:), y=xij(2, :), z=ans(:,ii), &
        & filename=fname//"Pbary( order=" // tostring(order) // &
          & ", pe1="//tostring(pe1) // &
          & ", pe2="//tostring(pe2) // &
          & ", pe3="//tostring(pe3) // &
          & " )" // tostring(ii) // &
          & ".vtp", &
        & label="P")
    end do
    !!
  END BLOCK
```

<!-- | | | | -->
<!-- |:---:| :---: | :---: | -->
<!-- | ![](./Pbary-444/Pbary-444-1.png) | ![](./Pbary-444/Pbary-444-2.png) | ![](./Pbary-444/Pbary-444-3.png) | -->
<!-- | ![](./Pbary-444/Pbary-444-4.png) | ![](./Pbary-444/Pbary-444-5.png) | ![](./Pbary-444/Pbary-444-6.png) | -->
<!-- | ![](./Pbary-444/Pbary-444-7.png) | ![](./Pbary-444/Pbary-444-8.png) | ![](./Pbary-444/Pbary-444-9.png) | -->
<!-- | ![](./Pbary-444/Pbary-444-10.png) | ![](./Pbary-444/Pbary-444-11.png) | ![](./Pbary-444/Pbary-444-12.png) | -->
<!-- | ![](./Pbary-444/Pbary-444-13.png) | ![](./Pbary-444/Pbary-444-14.png) | ![](./Pbary-444/Pbary-444-15.png) | -->

```fortran title="order=5; pe1=5; pe2=5; pe3=5"
  BLOCK
    real(dfp), allocatable :: ans(:,:)
    integer(i4b) :: ii, order, pe1, pe2, pe3
    type( VTKPlot_ ) :: aplot
    character(len=*), parameter :: fname="./results/"
    !!
    order=5; pe1=5; pe2=5; pe3=5
    !!
    ans = BarycentricHeirarchicalBasis_Triangle(&
      & order=order, pe1=pe1, pe2=pe2, pe3=pe3, &
      & lambda=lambda, refTriangle="UNIT")
    !!
    do ii  = 1, size(ans,2)
      call aplot%scatter3D(x=xij(1,:), y=xij(2, :), z=ans(:,ii), &
        & filename=fname//"Pbary( order=" // tostring(order) // &
          & ", pe1="//tostring(pe1) // &
          & ", pe2="//tostring(pe2) // &
          & ", pe3="//tostring(pe3) // &
          & " )" // tostring(ii) // &
          & ".vtp", &
        & label="P")
    end do
    !!
  END BLOCK
```

```fortran title="order=5; pe1=1; pe2=5; pe3=3"
  BLOCK
    real(dfp), allocatable :: ans(:,:)
    integer(i4b) :: ii, order, pe1, pe2, pe3
    type( VTKPlot_ ) :: aplot
    character(len=*), parameter :: fname="./results/"
    !!
    order=5; pe1=1; pe2=5; pe3=3
    !!
    ans = BarycentricHeirarchicalBasis_Triangle(&
      & order=order, pe1=pe1, pe2=pe2, pe3=pe3, &
      & lambda=lambda, refTriangle="UNIT")
    !!
    do ii  = 1, size(ans,2)
      call aplot%scatter3D(x=xij(1,:), y=xij(2, :), z=ans(:,ii), &
        & filename=fname//"Pbary( order=" // tostring(order) // &
          & ", pe1="//tostring(pe1) // &
          & ", pe2="//tostring(pe2) // &
          & ", pe3="//tostring(pe3) // &
          & " )" // tostring(ii) // &
          & ".vtp", &
        & label="P")
    end do
    !!
  END BLOCK
```

```fortran
end program main
```
