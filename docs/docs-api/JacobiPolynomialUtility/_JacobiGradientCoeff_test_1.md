- This example shows the usage of `JacobiGradientCoeff` method.
- This routine yields the coefficient of derivative (modal values) from the coefficient of jacobi expansion (modal values).

> In this example $\alpha=\beta=0.0$ (that is, proportional to Legendre polynomial)

```fortran
program main
  use easifembase
  use easifemclasses
  implicit none
  integer( i4b ) :: n, ii
  real(dfp), allocatable :: fhat(:), fval( : ), pt( : ), wt(:), f1hat(:), &
    & f1hat2(:), f1val(:), error(:, :), x(:), y(:)
  real( dfp ), parameter :: alpha=0.0_DFP, beta=0.0_DFP, tol=1.0E-10
  type(string) :: astr
  integer( i4b ), parameter :: quadType = GaussLobatto
  type(PLPlot_) :: aplot
  character(len=*), parameter :: fname="./results/test20"
```

:::note
In this example we consider

$$
f(x) = sin(4\pi x)
$$
:::

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
  call JacobiQuadrature( n=n+1, alpha=alpha, beta=beta, &
    & pt=pt, wt=wt, quadType=quadType )
```

```fortran title "JacobiTransformation"
  fval = func1(pt)
  !!
  fhat = JacobiTransform(n=n, alpha=alpha, &
    & beta=beta, coeff=fval, x=pt, w=wt, quadType=quadType)
  !!
  f1hat = JacobiGradientCoeff(n=n, alpha=alpha, beta=beta, coeff=fhat)
  !!
```

```fortran title "JacobiTransformation"
  !! nodal values of derivative of function
  f1val = dfunc1(pt)
  !!
  f1hat2 = JacobiTransform(n=n, alpha=alpha, &
    & beta=beta, coeff=f1val, x=pt, w=wt, quadType=quadType)
  !!
  call display( MdEncode(f1hat .colconcat. f1hat2), "")
  !!
```

<details>
<summary>See results</summary>
<div>

for n = 10

| $\tilde{f}^{(1)}_{n}$ | $\tilde{\partial f}_{n}$ |
|-----------------------|--------------------------|
| 8.33028E-13           | 8.29555E-13              |
| -3.68615E-14          | 7.40033E-15              |
| 1.1937                | 1.1937                   |
| -8.82402E-14          | 2.69819E-14              |
| 6.6858                | 6.6858                   |
| -1.08992E-13          | 4.45373E-14              |
| 13.902                | 13.902                   |
| -1.85913E-13          | 7.01002E-14              |
| 3.2992                | 3.2992                   |
| -1.70412E-13          | 3.57943E-14              |
| -27.543               | -27.543                  |
| -2.65813E-13          | 1.6534E-13               |
| 21.936                | 21.936                   |
| -2.33693E-13          | 1.76765E-13              |
| -8.7995               | -8.7995                  |
| -8.89386E-14          | 5.28085E-14              |
| 2.2501                | 2.2509                   |
| 3.95021E-14           | -9.3623E-14              |
| -0.40301              | -0.41305                 |
| 1.31053E-13           | 2.69264E-14              |
| 0                     | 5.52691E-02              |

</div>
</details>

```fortran title "Plotting"
    CALL aplot%plot2D( x=x,y=JacobiInvTransform(n=n, alpha=alpha, beta=beta, &
      & x=x, coeff=f1hat), lineColor="k")
    !!
    CALL aplot%plot2D( x=x,y=JacobiInvTransform(n=n, alpha=alpha, beta=beta, &
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
    call JacobiQuadrature( n=n+1, alpha=alpha, beta=beta, &
      & pt=pt, wt=wt, quadType=quadType )
    !!
    fval = func1(pt)
    !!
    fhat = JacobiTransform(n=n, alpha=alpha, &
      & beta=beta, coeff=fval, x=pt, w=wt, quadType=quadType)
    !!
    f1hat = JacobiGradientCoeff(n=n, alpha=alpha, beta=beta, coeff=fhat)
    !!
    !! nodal values of derivative of function
    !!
    f1val = dfunc1(pt)
    !!
    f1hat2 = JacobiTransform(n=n, alpha=alpha, &
      & beta=beta, coeff=f1val, x=pt, w=wt, quadType=quadType)
    !!
    error(n,1) = n
    error(n,2) = NORM2( ABS(f1hat-f1hat2) )
    !!
  END DO
  !!
  CALL display( MdEncode(error), "error=")
```

<details>
<summary>See results</summary>
<div>

| order(n) | MAX(err)    |
|----------|-------------|
| 1        | 0           |
| 2        | 12.566      |
| 3        | 10.418      |
| 4        | 16.409      |
| 5        | 21.188      |
| 10       | 41.617      |
| 15       | 4.1017      |
| 20       | 5.61773E-02 |
| 25       | 6.91711E-05 |
| 30       | 1.13582E-07 |

</div>
</details>

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
```

```fortran
end program main
```
