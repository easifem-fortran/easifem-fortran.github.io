- This example shows the usage of `LegendreInvTransform` method.
- This routine performs the inverse Legendre transform at several points.

```fortran
program main
  use easifembase
  use easifemclasses
  implicit none
  integer( i4b ) :: ii, n
  real(dfp), allocatable :: uhat(:), u( : ), pt( : ), wt(:), &
    & x(:), ans(:), exact(:)
  real( dfp ), parameter :: tol=1.0E-10
  type(string) :: astr
  integer( i4b ), parameter :: quadType = GaussLobatto
  type(PlPlot_) :: aplot
  character( len=* ), parameter :: fname = "./results/test24"
  CALL aplot%Initiate()
  CALL aplot%Set( &
    & device="svg", &
    & filename=fname//"-%n.svg")
  CALL aplot%figure()
  x = linspace(-1.0_DFP, 1.0_DFP, 101_I4B)
  ii = 0
  do n = 5,25,5
    ii = ii + 1
    CALL aplot%subplot(5,1,ii)
    CALL aplot%setXYLim([-1.0_DFP, 1.0_DFP], [ -2.0_DFP, 2.0_DFP])
    CALL aplot%setTicks()
    call reallocate( pt, n+1, wt, n+1 )
    call LegendreQuadrature( n=n+1, pt=pt, wt=wt, quadType=quadType )
    u = SIN(4.0_DFP * pi * pt)
    uhat = LegendreTransform(n=n, coeff=u, x=pt, w=wt, quadType=quadType)
    exact = SIN(4.0_DFP * pi * x)
    ans = LegendreInvTransform(n=n, x=x, coeff=uhat)
    CALL aplot%plot2D( x=x,y=ans)
    CALL aplot%plot2D( x=x,y=exact, pointType=PS_DOT, lineWidth=0.0_DFP )
    CALL aplot%setLabels("x","u(x)","n="//tostring(n))
  end do
  CALL aplot%Show()
  CALL aplot%deallocate()
end program main
```
