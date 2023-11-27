- This example shows the usage of `Chebyshev1GradientCoeff` method.
- This routine yields the coefficient of derivative (modal values) from the coefficient of Chebyshev1 expansion (modal values).

In this example we consider:

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
    & f1hat2(:), f1val(:), error(:, :), x(:), y(:)
  real( dfp ), parameter :: tol=1.0E-10
  type(string) :: astr
  integer( i4b ), parameter :: quadType = Gauss
  type(PLPlot_) :: aplot
  character(len=*), parameter :: fname="./results/test27"
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
```

```fortran title "Chebyshev1Transformation"
  fval = func1(pt)
  !!
  fhat = Chebyshev1Transform(n=n, coeff=fval, x=pt, w=wt, quadType=quadType)
  !!
  f1hat = Chebyshev1GradientCoeff(n=n, coeff=fhat)
  !!
```

```fortran title "Chebyshev1Transformation"
  !! nodal values of derivative of function
  f1val = dfunc1(pt)
  !!
  f1hat2 = Chebyshev1Transform(n=n, coeff=f1val, x=pt, w=wt, quadType=quadType)
  !!
  call display( MdEncode(f1hat .colconcat. f1hat2), "")
  !!
```

| $\tilde{f}^{(1)}_{n}$ | $\tilde{\partial f}_{n}$ |
|-----------------------|--------------------------|
| 8.57115E-13           | -9.82217E-15             |
| -0.34718              | -0.45626                 |
| 1.69866E-12           | -9.05354E-15             |
| 0.83578               | 0.7254                   |
| 1.65236E-12           | -2.19414E-14             |
| -0.60671              | -0.71419                 |
| 1.57159E-12           | -4.76752E-15             |
| 0.71282               | 0.60012                  |
| 1.46157E-12           | -3.11076E-14             |
| -0.3608               | -0.46464                 |
| 1.3022E-12            | 7.96795E-15              |
| 0.45953               | 0.34097                  |
| 1.13083E-12           | -5.33207E-14             |
| -0.14493              | -0.23924                 |
| 8.57736E-13           | 3.88746E-14              |
| 0.29333               | 0.15917                  |
| 6.44639E-13           | -1.04524E-13             |
| -2.76722E-02          | -9.64156E-02             |
| 1.5639E-13            | 1.1037E-13               |
| 0.22138               | 4.53111E-02              |
| 0                     | -2.17817E-13             |

```fortran title "Plotting"
    CALL aplot%plot2D( x=x,y=Chebyshev1InvTransform(n=n,  &
      & x=x, coeff=f1hat), lineColor="r", lineWidth=2.0_DFP)
    !!
    CALL aplot%plot2D( x=x,y=Chebyshev1InvTransform(n=n,  &
      & x=x, coeff=f1hat2), lineColor="b", lineWidth=2.0_DFP)
    !!
    CALL aplot%plot2D( x=x,y=dfunc1(x), pointType=PS_DOT, lineWidth=0.0_DFP )
    CALL aplot%setLabels("x","du(x)","n="//tostring(n))
```

```fortran title "Prepare quadratures"
  error = zeros(30, 2, 1.0_DFP)
  !!
  DO n = 1, SIZE(error,1)
    call reallocate( pt, n+1, wt, n+1, fval, n+1 )
    !!
    call Chebyshev1Quadrature( n=n+1,  &
      & pt=pt, wt=wt, quadType=quadType )
    !!
    fval = func1(pt)
    !!
    fhat = Chebyshev1Transform(n=n,  &
      & coeff=fval, x=pt, w=wt, quadType=quadType)
    !!
    f1hat = Chebyshev1GradientCoeff(n=n,  coeff=fhat)
    !!
    !! nodal values of derivative of function
    !!
    f1val = dfunc1(pt)
    !!
    f1hat2 = Chebyshev1Transform(n=n,  &
      & coeff=f1val, x=pt, w=wt, quadType=quadType)
    !!
    error(n,1) = n
    error(n,2) = NORM2( ABS(f1hat-f1hat2) )
    !!
  END DO
  !!
  CALL display( MdEncode(error), "error=")
```

|    |             |
|----|-------------|
| 1  | 0.39506     |
| 2  | 2.2722      |
| 3  | 0.96551     |
| 4  | 2.5837      |
| 5  | 1.2188      |
| 10 | 1.7167      |
| 15 | 0.37501     |
| 20 | 0.36849     |
| 25 | 5.59192E-02 |
| 30 | 5.49672E-02 |

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
