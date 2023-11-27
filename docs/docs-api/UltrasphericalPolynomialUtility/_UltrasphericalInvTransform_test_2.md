- This example shows the usage of `UltrasphericalInvTransform` method.
- This routine performs the inverse Ultraspherical transform at several points.

> In this example $\lambda=0.5$ (that is, proportional to Legendre polynomial)

```fortran
program main
  use easifembase
  use easifemclasses
  implicit none
  integer( i4b ) :: ii, n
  real(dfp), allocatable :: uhat(:), u( : ), pt( : ), wt(:), &
    & x(:), ans(:), exact(:)
  real( dfp ), parameter :: lambda=0.5_DFP, tol=1.0E-10
  type(string) :: astr
  integer( i4b ), parameter :: quadType = GaussLobatto
  type(csvfile_) :: afile
  type(PlPlot_) :: aplot
  character( len=* ), parameter :: fname = "./results/test24"
  CALL afile%initiate(filename=fname // ".csv", &
    & status="NEW", action="WRITE")
  CALL afile%open()
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
    call UltrasphericalQuadrature( n=n+1, lambda=lambda, &
      & pt=pt, wt=wt, quadType=quadType )
    u = SIN(4.0_DFP * pi * pt)
    uhat = UltrasphericalTransform(n=n, lambda=lambda, coeff=u, &
      & x=pt, w=wt, quadType=quadType)
    exact = SIN(4.0_DFP * pi * x)
    ans = UltrasphericalInvTransform(n=n, lambda=lambda, &
      & x=x, coeff=uhat)
    CALL afile%write( val=n, advance="NO")
    CALL afile%write( val=MAXVAL(ABS(exact-ans)), advance="YES")
    CALL aplot%plot2D( x=x,y=ans)
    CALL aplot%plot2D( x=x,y=exact, pointType=PS_DOT, lineWidth=0.0_DFP )
    CALL aplot%setLabels("x","u(x)","n="//tostring(n))
  end do
  CALL aplot%Show()
  CALL afile%deallocate()
  CALL aplot%deallocate()
end program main
```
