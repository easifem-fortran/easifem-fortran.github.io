---
author: Vikas Sharma, Ph.D.
date: 6 Sept 2022
update: 6 Sept 2022
tags:
  - LegendreEvalAll
---

# LegendrePolynomialUtility example 7

- This example shows the usage of `LegendreEvalAll` method which is defined in [[LegendrePolynomialUtility]] MODULE.
- This routine evaluates Legendre polynomial upto order n, for many points

## Module and classes

- [[LegendrePolynomialUtility]]

## Usage

```fortran
program main
  use easifembase
  use easifemClasses
  implicit none
  integer( i4b ) :: ii, n, iTime, tTimeNodes, tTimeElements
  integer( i4b ), allocatable :: orders(:)
  real( dfp ), parameter :: minY=-2.0_DFP, &
    & maxY = 2.0_DFP
  !!
  real( dfp ), ALLOCATABLE :: pt( : ), wt( : ), p_in( :, : ), &
    & dp_in( :, : ), Cmat( :, :), rhs(:), fval(:), fhat(:), &
    & timeGP( : ), gamma(:), uhat(:), uval(:), exact_uval(:), &
    & timeNodes( : )
  !!
  real( dfp ) ::  u0, t1, t2
  type(PLPlot_) :: aplot
  character( len=* ), parameter :: fname = "./results/SP_Test_2"
```

!!! note "Create nodes and order"

```fortran
  orders = createOrder()
  tTimeElements = SIZE(orders)
  !!
  timeNodes = createTimeNodes()
  tTimeNodes = SIZE(timeNodes)
  !!
  IF( tTimeNodes .NE. tTimeElements + 1 ) THEN
    CALL display( "Error code 1")
    STOP
  END IF
```

!!! note "Plot Settings"

```fortran
  CALL aplot%Initiate()
  CALL aplot%Set( &
    & device="svg", &
    & filename=fname//"-n="//tostring(n)// "-%n.svg")
  CALL aplot%figure()
  CALL aplot%subplot(1,1,1)
  CALL aplot%setXYLim( &
    & [timeNodes(1), timeNodes(tTimeNodes)], &
    & [ minY, maxY])
  CALL aplot%setTicks()
  CALL aplot%plot2D( &
    & x=linspace(timeNodes(1), timeNodes(tTimeNodes), 200), &
    & y=exactSolution(linspace(timeNodes(1), timeNodes(tTimeNodes), 200)), &
    & lineColor="b", &
    & lineWidth=2.0_DFP )
```

!!! note "InitialCondition"

```fortran
  u0 = initialCondition()
```

!!! note "Start time step loop"

```fortran
  DO iTime = 1, tTimeElements
    CALL BlankLines( nol=5 )
    CALL EqualLine()
    CALL Display( "iTime="//tostring(iTime) )
    CALL EqualLine()
    t1 = timeNodes(iTime)
    t2 = timeNodes(iTime+1)
    n = orders( iTime )
    !!
    call Reallocate( pt, n+1, wt, n+1 )
    call LegendreQuadrature( n=n+1, pt=pt, wt=wt, &
        & quadType=GaussLobatto )
    !!
    p_in = LegendreEvalAll( n=n, x=pt )
    dp_in = LegendreGradientEvalAll( n=n, x=pt )
    !!
    call Reallocate( Cmat, n+1, n+1 )
    CMat = 0.0_DFP
    do ii = 1, n+1
      CMat = CMat + OUTERPROD( p_in( ii, :), dp_in( ii, : ) ) * wt( ii )
    end  do
    !!
    CMat = Cmat + OUTERPROD( p_in(1,:), p_in(1, :) )
    !!
    RHS = p_in(1,:) * u0
    !!
    timeGP = FromBiUnitLine2Segment( xin=pt, x1=t1, x2=t2 )
    fval = forceFunction( timeGP )
    fhat = LegendreTransform(n=n, coeff=fval, x=pt, &
      & w=wt, quadType=GaussLobatto)
    gamma = LegendreNormSQR2( n=n )
    !!
    CALL display( fhat, "fhat = " ) !! warning
    exact_uval = exactSolution( timeGP ) !! warning
    !!
    RHS = RHS + (t2 - t1)*0.5_DFP * gamma * fhat
    !!
    CALL Reallocate( uhat, n+1 )
    uhat = 0.0_DFP
    CALL Solve( X=uhat, A=CMat, B=RHS )
    !!
    uval = LegendreInvTransform(n=n, coeff=uhat, x=pt)
    CALL display( uval .colconcat. ABS(uval-exact_uval), "uval | err" )
    !! warning
    !!
    !! At this point calculation is finished for time element
    !! But we need to update initialCondition
    !!
    u0 = uval( n+1 )
    !!
    !! Plotting
    !!
    CALL aplot%plot2D( &
      & x=timeGP,y=uval, pointColor="k", pointType=PS_DOT, &
      & lineWidth=0.0_DFP )
  END DO
  CALL aplot%setLabels("x","u","tTimeElements="//tostring(tTimeElements))
  CALL aplot%show()
  CALL aplot%deallocate()
```

End of code here!

!!! settings "Force function"

```fortran
  contains
  !!
  elemental function forceFunction(x) result(ans)
    real( dfp ), intent( in ) :: x
    real( dfp ) :: ans
    ans = sin(x)
  end function forceFunction
  !!
```

!!! settings "Initial Condition"

```fortran
  !!
  elemental function initialCondition() result(ans)
    real( dfp ) :: ans
    ans = -1.0_DFP
  end function initialCondition
  !!
```

!!! settings "Exact Solution"

```fortran
  !!
  elemental function exactSolution(x) result(ans)
    real( dfp ), intent( in ) :: x
    real( dfp ) :: ans
    ans = -cos(x)
  end function exactSolution
  !!
```

!!! settings "createTimeNodes"

```fortran
  !!
  pure function createTimeNodes() result(ans)
    real( dfp ) :: ans( 7 )
    ans = linspace(0.0, 6.0, 7)
  end function createTimeNodes
  !!
```

!!! settings "createOrder"

```fortran
  !!
  pure function createOrder() result(ans)
    real( dfp ) :: ans( 6 )
    ans(1) = 10
    ans(2) = 5
    ans(3) = 6
    ans(4:) = 10
  end function createOrder
  !!
```

```fortran
end program main
```
