- This example shows the usage of `Chebyshev1GradientCoeff` method.
- This routine yields the coefficient of derivative (modal values) from the coefficient of Chebyshev1 expansion (modal values).

In this example we consider

$$
f(x) = sin(4\pi x)
$$

```fortran
program main
  use easifembase
  use easifemclasses
  implicit none
  integer( i4b ) :: n, ii
  real(dfp), allocatable :: fhat(:), fval( : ), pt( : ), wt(:), f1hat(:), &
    & f1val(:), x(:), y(:), D(:,:)
  real( dfp ), parameter :: tol=1.0E-10
  type(string) :: astr
  integer( i4b ), parameter :: quadType = Gauss
  type(PLPlot_) :: aplot
  character(len=*), parameter :: fname="./results/test29"
```

```fortran title "Plot settings"
  CALL aplot%Initiate()
  CALL aplot%Set( &
    & device="svg", &
    & filename=fname//"-%n.svg")
  CALL aplot%figure()
  CALL aplot%subplot(1,1,1)
  CALL aplot%setXYLim([-1.0_DFP, 1.0_DFP], [ -15.0_DFP, 15.0_DFP])
  CALL aplot%setTicks()
```

```fortran title "Prepare quadratures"
  n = 20
  call reallocate( pt, n+1, wt, n+1, fval, n+1 )
  !!
  call Chebyshev1Quadrature( n=n+1, pt=pt, wt=wt, quadType=quadType )
  x = pt
  !!
  fval = func1(pt)
  !!
  D = Chebyshev1DMatrix(n=n,  x=pt, quadType=quadType)
  !!
```

```fortran title "Plotting"
    CALL aplot%plot2D( x=x,y=MATMUL(D, fval), &
      & pointColor="r", lineWidth=0.0_DFP, pointType=PS_H_CIRCLE, &
      & pointSize=4.0_DFP)
    !!
    x = linspace(-1.0_DFP, 1.0_DFP, 101)
    CALL aplot%plot2D( x=x,y=dfunc1(x), lineWidth=2.0_DFP, &
      & lineColor="k" )
    CALL aplot%setLabels("x","du(x)","n="//tostring(n))
```

```fortran title "Define function"
  contains
  elemental function func1(x) result(ans)
    real(dfp), intent(in) :: x
    real(dfp) :: ans
    ans = 1.0/(1.0 + 16.0*x**2)
  end function func1
  !!
  elemental function dfunc1(x) result(ans)
    real(dfp), intent(in) :: x
    real(dfp) :: ans
    ans = -32.0 * x * func1(x)**2
  end function dfunc1
```

```fortran
end program main
```
