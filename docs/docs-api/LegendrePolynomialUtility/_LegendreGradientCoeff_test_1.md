- This example shows the usage of `LegendreGradientCoeff` method.
- This routine yields the coefficient of derivative (modal values) from the coefficient of Legendre expansion (modal values).

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
    & f1hat2(:), f1val(:), error(:, :), x(:), y(:)
  real( dfp ), parameter :: tol=1.0E-10
  type(string) :: astr
  integer( i4b ), parameter :: quadType = GaussLobatto
  type(PLPlot_) :: aplot
  character(len=*), parameter :: fname="./results/test25"
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
  x = linspace(-1.0_DFP, 1.0_DFP, 101_I4B)
```

```fortran title "Prepare quadratures"
  n = 20
  call reallocate( pt, n+1, wt, n+1, fval, n+1 )
  !!
  call LegendreQuadrature( n=n+1, pt=pt, wt=wt, quadType=quadType )
```

```fortran title "LegendreTransformation"
  fval = func1(pt)
  !!
  fhat = LegendreTransform(n=n, coeff=fval, x=pt, w=wt, quadType=quadType)
  !!
  f1hat = LegendreGradientCoeff(n=n, coeff=fhat)
  !!
```

```fortran title "LegendreTransformation"
  !! nodal values of derivative of function
  f1val = dfunc1(pt)
  !!
  f1hat2 = LegendreTransform(n=n, coeff=f1val, x=pt, w=wt, quadType=quadType)
  !!
  call display( MdEncode(f1hat .colconcat. f1hat2), "")
  !!
```

| $\tilde{f}^{(1)}_{n}$ | $\tilde{\partial f}_{n}$ |
|-----------------------|--------------------------|
| 8.30697E-13           | 8.29555E-13              |
| -3.28493E-14          | 7.40033E-15              |
| 1.1937                | 1.1937                   |
| -7.88784E-14          | 2.73705E-14              |
| 6.6858                | 6.6858                   |
| -9.32074E-14          | 5.12541E-14              |
| 13.902                | 13.902                   |
| -1.64389E-13          | 7.28063E-14              |
| 3.2992                | 3.2992                   |
| -1.41327E-13          | 3.42122E-14              |
| -27.543               | -27.543                  |
| -2.33903E-13          | 1.72282E-13              |
| 21.936                | 21.936                   |
| -1.70089E-13          | 1.78264E-13              |
| -8.7995               | -8.7995                  |
| -2.53178E-14          | 5.00121E-14              |
| 2.2501                | 2.2509                   |
| 6.31204E-14           | -1.04309E-13             |
| -0.40301              | -0.41305                 |
| 1.3359E-13            | 2.09728E-14              |
| 0                     | 5.52691E-02              |

```fortran title "Plotting"
    CALL aplot%plot2D( x=x,y=LegendreInvTransform(n=n,  &
      & x=x, coeff=f1hat), lineColor="k")
    !!
    CALL aplot%plot2D( x=x,y=LegendreInvTransform(n=n,  &
      & x=x, coeff=f1hat2), lineColor="b")
    !!
    CALL aplot%plot2D( x=x,y=dfunc1(x), pointType=PS_DOT, lineWidth=0.0_DFP )
    CALL aplot%setLabels("x","du(x)","")
    !CALL aplot%show()
    !CALL aplot%deallocate()
```

```fortran title "Prepare quadratures"
  error = zeros(30, 2, 1.0_DFP)
  !!
  DO n = 1, SIZE(error,1)
    call reallocate( pt, n+1, wt, n+1, fval, n+1 )
    !!
    call LegendreQuadrature( n=n+1,  &
      & pt=pt, wt=wt, quadType=quadType )
    !!
    fval = func1(pt)
    !!
    fhat = LegendreTransform(n=n,  &
      & coeff=fval, x=pt, w=wt, quadType=quadType)
    !!
    f1hat = LegendreGradientCoeff(n=n,  coeff=fhat)
    !!
    !! nodal values of derivative of function
    !!
    f1val = dfunc1(pt)
    !!
    f1hat2 = LegendreTransform(n=n,  &
      & coeff=f1val, x=pt, w=wt, quadType=quadType)
    !!
    error(n,1) = n
    error(n,2) = NORM2( ABS(f1hat-f1hat2) )
    !!
  END DO
  !!
  CALL display( MdEncode(error), "error=")
```

| order(n) | MAX(err)    |
|----------|-------------|
| 2        | 12.566      |
| 4        | 16.409      |
| 6        | 22.967      |
| 8        | 39.855      |
| 10       | 41.617      |
| 15       | 4.1017      |
| 20       | 5.61773E-02 |
| 25       | 6.91711E-05 |
| 30       | 1.13582E-07 |

```fortran
  contains
  elemental function func1(x) result(ans)
    real(dfp), intent(in) :: x
    real(dfp) :: ans
    ans = SIN(4.0_DFP * pi * x)
  end function func1
  !!
  elemental function dfunc1(x) result(ans)
    real(dfp), intent(in) :: x
    real(dfp) :: ans
    ans = 4.0_DFP * pi * COS(4.0_DFP * pi * x)
  end function dfunc1
end program main
```
