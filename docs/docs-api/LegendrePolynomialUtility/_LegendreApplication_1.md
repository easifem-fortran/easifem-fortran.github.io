```fortran
program main
  use easifembase
  use easifemClasses
  implicit none
  integer( i4b ) :: ii
  integer(i4b), parameter :: n = 2
  real( dfp ), parameter :: t0 = 0.0_DFP, tf = 6.0_DFP
  !!
  real( dfp ) :: pt( n+1 ), wt( n+1 ), p_in( n+1, n+1 ), dp_in( n+1, n+1), &
    & Cmat(n+1, n+1), u0, rhs(n+1), fval(n+1), fhat(n+1), timeGP( n+1 ), &
    & t1, t2,  gamma(n+1), uhat(n+1), uval(n+1), exact_uval(n+1)
  !!
  type(PLPlot_) :: aplot
  character( len=* ), parameter :: fname = "./results/SP_Test_1"
```

:::note "Step-1"
    Create Gauss LobattoPoints

```fortran
  call LegendreQuadrature( n=n+1, pt=pt, wt=wt, &
      & quadType=GaussLobatto )
```

:::note "Step-2"
    Calculate p_in matrix

```fortran
  p_in = LegendreEvalAll( n=n, x=pt )
```

:::note "Step-2"
    Calculate p_in matrix

```fortran
  p_in = LegendreEvalAll( n=n, x=pt )
```

:::note "Step-3"
    Calculate First derivative of P in dp_in

```fortran
  dp_in = LegendreGradientEvalAll( n=n, x=pt )
```

:::note "Step-4"
    Calculate `CMat` C matrix

```fortran
  CMat = 0.0_DFP
  DO ii = 1, n+1
    CMat = CMat + OUTERPROD( p_in( ii, :), dp_in( ii, : ) ) * wt( ii )
  END  DO
  !!
```

:::note "Step-5"
    Add contribution of `PlPl` into `CMat`

```fortran
  CMat = Cmat + OUTERPROD( p_in(1,:), p_in(1, :) )
```

:::note "Step-6"
    Initial condition

```fortran
  u0 = initialCondition()
```

:::note "Step-7"
    Add Initial condition to RHS

```fortran
  rhs = p_in(1,:) * u0
```

!!! warning "Step-8"
    Make nodal value of force vector from tn to tn+1

```fortran
  t1 = t0
  t2 = tf
  timeGP = FromBiUnitLine2Segment( xin=pt, x1=t1, x2=t2 )
  fval = forceFunction( timeGP )
  exact_uval = exactSolution( timeGP )
```

:::note "Step-8"
    Legendre transformation of force.

```fortran
  fhat = LegendreTransform(n=n, coeff=fval, x=pt, w=wt, quadType=GaussLobatto)
  gamma = LegendreNormSQR2( n=n )
  CALL display( fhat, "fhat = " )
```

:::note "Step-9"
    Add contribution to RHS
:::

```fortran
  RHS = RHS + (t2 - t1)*0.5_DFP * gamma * fhat
```

:::note "Step-10"
    Solve "Ax=b"
:::

```fortran
  uhat = 0.0_DFP
  CALL Solve( X=uhat, A=CMat, B=RHS )
```

:::note "Step-11"
    Calculate uval from uhat using inverse transformation
:::

```fortran
  uval = LegendreInvTransform(n=n, coeff=uhat, x=pt)
  CALL display( uval .colconcat. ABS(uval-exact_uval), "uval | err" )
```

:::note "Plot settings"
:::

```fortran
  CALL aplot%Initiate()
  CALL aplot%Set( &
    & device="svg", &
    & filename=fname//"-n="//tostring(n)// "-%n.svg")
  CALL aplot%figure()
  CALL aplot%subplot(1,1,1)
  CALL aplot%setXYLim([t0, tf], [ MINVAL(uval), 1.2*MAXVAL(uval)])
  CALL aplot%setTicks()
  CALL aplot%plot2D( x=timeGP,y=uval, pointColor="k", pointType=PS_DOT, &
    & lineWidth=0.0_DFP )
  CALL aplot%plot2D( &
    & x=linspace(t0, tf, 200), &
    & y=exactSolution(linspace(t0, tf, 200)), &
    & lineColor="b", &
    & lineWidth=2.0_DFP )
  CALL aplot%setLabels("x","u","n="//tostring(n))
  CALL aplot%show()
  CALL aplot%deallocate()
```

End of code here!

```fortran
  contains
  !!
  elemental function forceFunction(x) result(ans)
    real( dfp ), intent( in ) :: x
    real( dfp ) :: ans
    ans = sin(x)
  end function forceFunction
  !!
  elemental function initialCondition() result(ans)
    real( dfp ) :: ans
    ans = -1.0_DFP
  end function initialCondition
  !!
  elemental function exactSolution(x) result(ans)
    real( dfp ), intent( in ) :: x
    real( dfp ) :: ans
    ans = -cos(x)
  end function exactSolution
  !!
```

```fortran
end program main
```
