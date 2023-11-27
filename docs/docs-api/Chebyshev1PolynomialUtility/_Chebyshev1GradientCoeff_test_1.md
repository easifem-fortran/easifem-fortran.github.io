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
    & f1hat2(:), f1val(:), error(:, :), x(:), y(:)
  real( dfp ), parameter :: tol=1.0E-10
  type(string) :: astr
  integer( i4b ), parameter :: quadType = GaussLobatto
  type(PLPlot_) :: aplot
  character(len=*), parameter :: fname="./results/test25"

  CALL aplot%Initiate()
  CALL aplot%Set( &
    & device="svg", &
    & filename=fname//"-%n.svg")
  CALL aplot%figure()
  CALL aplot%subplot(1,1,1)
  CALL aplot%setXYLim([-1.0_DFP, 1.0_DFP], [ -15.0_DFP, 15.0_DFP])
  CALL aplot%setTicks()
  x = linspace(-1.0_DFP, 1.0_DFP, 101_I4B)

  n = 20
  call reallocate( pt, n+1, wt, n+1, fval, n+1 )
  !!
  call Chebyshev1Quadrature( n=n+1, pt=pt, wt=wt, quadType=quadType )

  fval = func1(pt)
  !!
  fhat = Chebyshev1Transform(n=n, coeff=fval, x=pt, w=wt, quadType=quadType)
  !!
  f1hat = Chebyshev1GradientCoeff(n=n, coeff=fhat)
  !!

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
| 2.85417E-13           | -1.11369E-14             |
| -0.45011              | -0.45611                 |
| 5.55259E-13           | -6.21202E-15             |
| 0.73293               | 0.72492                  |
| 5.10307E-13           | -2.5027E-14              |
| -0.70979              | -0.71328                 |
| 4.33355E-13           | 1.69409E-15              |
| 0.61027               | 0.59862                  |
| 3.41772E-13           | -3.57879E-14             |
| -0.46447              | -0.46227                 |
| 2.11041E-13           | 2.35979E-14              |
| 0.35813               | 0.33734                  |
| 1.13566E-13           | -6.40661E-14             |
| -0.25079              | -0.2337                  |
| -7.36453E-14          | 7.40175E-14              |
| 0.19599               | 0.15082                  |
| -6.71185E-14          | -1.3036E-13              |
| -0.14098              | -8.39499E-02             |
| -3.78656E-13          | 1.83603E-13              |
| 0.13754               | 2.68887E-02              |
| 0                     | -1.39742E-13             |

```fortran
  CALL aplot%plot2D( x=x,y=Chebyshev1InvTransform(n=n,  &
    & x=x, coeff=f1hat), lineColor="r", lineWidth=2.0_DFP)
  !!
  CALL aplot%plot2D( x=x,y=Chebyshev1InvTransform(n=n,  &
    & x=x, coeff=f1hat2), lineColor="b", lineWidth=2.0_DFP)
  !!
  CALL aplot%plot2D( x=x,y=dfunc1(x), pointType=PS_DOT, lineWidth=0.0_DFP )
  CALL aplot%setLabels("x","du(x)","n="//tostring(n))

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

| order(n) | MAX(err)    |
|----------|-------------|
| 1        | 0.11073     |
| 2        | 1.7716      |
| 3        | 0.40901     |
| 4        | 1.5317      |
| 5        | 0.77838     |
| 10       | 0.81903     |
| 15       | 0.31392     |
| 20       | 0.13606     |
| 25       | 4.43511E-02 |
| 30       | 1.69939E-02 |

```fortran
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
end program main
```
