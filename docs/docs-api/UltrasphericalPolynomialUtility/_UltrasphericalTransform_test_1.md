This example shows the usage of `UltrasphericalTransform` method.

This routine performs the forward Ultraspherical transform.

> In this example $\lambda=-0.5$ (that is, proportional to Legendre polynomial)

```fortran
program main
  use easifembase
  use easifemclasses
  implicit none
  integer( i4b ) :: n
  real(dfp), allocatable :: uhat(:), u( : ), pt( : ), wt(:)
  real( dfp ), parameter :: lambda=0.5_DFP, tol=1.0E-10
  type(string) :: astr
  integer( i4b ), parameter :: quadType = GaussLobatto
  type(CSVFile_) :: afile
  character( len=* ), parameter :: fname = "./results/test21"
  type(PLPlot_) :: aplot

  n = 10
  call reallocate( pt, n+1, wt, n+1 )
  call UltrasphericalQuadrature( n=n+1, lambda=lambda, &
    & pt=pt, wt=wt, quadType=quadType )
  u = UltrasphericalEval(n=5_I4B, lambda=lambda, &
    & x=pt)
  uhat = UltrasphericalTransform(n=n, lambda=lambda, coeff=u, &
    & x=pt, w=wt, quadType=quadType)
  uhat( 6 ) = uhat( 6 ) - 1.0_dFP
  CALL ok( SOFTEQ( NORM2(uhat), 0.0_DFP, tol), "test"  )

  n = 10
  call reallocate( pt, n+1, wt, n+1 )
  call UltrasphericalQuadrature( n=n+1, lambda=lambda, &
    & pt=pt, wt=wt, quadType=quadType )
  u = SIN(4.0_DFP * pi * pt)
  uhat = UltrasphericalTransform(n=n, lambda=lambda, coeff=u, x=pt, &
      & w=wt, quadType=quadType)

  CALL afile%initiate(filename=fname // ".csv", &
    & status="NEW", action="WRITE")
  CALL afile%open()
  CALL afile%write(val="n="//tostring(n))
  CALL afile%write(val=uhat)
  CALL afile%write()

  CALL aplot%Initiate()
  CALL aplot%Set( &
    & device="svg", &
    & filename=fname//"-%n.svg")
  CALL aplot%figure()
  CALL aplot%subplot(1,1,1)
  pt = arange(0,n,1)
  CALL aplot%setXYLim([-10.0_DFP, 50.0_DFP], [ -3.0_DFP, 3.0_DFP])
  CALL aplot%setTicks()

  CALL aplot%plot2D(x=pt,y=uhat, &
    & pointType=PS_DOT, &
    & pointSize=4.0_DFP, &
    & pointColor="b", &
    & lineWidth=0.0_DFP)
  !CALL aplot%setLabels("","","")
  !CALL aplot%Show()

  n = 20
  call reallocate( pt, n+1, wt, n+1 )
  call UltrasphericalQuadrature( n=n+1, lambda=lambda, &
    & pt=pt, wt=wt, quadType=quadType )
  u = SIN(4.0_DFP * pi * pt)
  uhat = UltrasphericalTransform(n=n, lambda=lambda,&
    & coeff=u, x=pt, w=wt, quadType=quadType)
  CALL afile%write(val="n="//tostring(n))
  CALL afile%write(val=uhat)
  CALL afile%write()

  pt = arange(0,n,1)
  CALL aplot%plot2D(x=pt,y=uhat, &
    & pointType=PS_DOT, &
    & pointSize=4.0_DFP, &
    & pointColor="r", &
    & lineWidth=0.0_DFP)
  !CALL aplot%setLabels("N","uhat","")
  !CALL aplot%Show()

  n = 30
  call reallocate( pt, n+1, wt, n+1 )
  call UltrasphericalQuadrature( n=n+1, lambda=lambda, &
    & pt=pt, wt=wt, quadType=quadType )
  u = SIN(4.0_DFP * pi * pt)
  uhat = UltrasphericalTransform(n=n, lambda=lambda, &
    & coeff=u, x=pt, w=wt, quadType=quadType)
  CALL afile%write(val="n="//tostring(n))
  CALL afile%write(val=uhat)
  CALL afile%write()

  pt = arange(0,n,1)
  CALL aplot%plot2D(x=pt,y=uhat, &
    & pointType=PS_DOT, &
    & pointSize=10.0_DFP, &
    & pointColor="k", &
    & lineWidth=0.0_DFP)
  CALL aplot%setLabels("N","uhat","")
  CALL aplot%Show()

  n = 40
  call reallocate( pt, n+1, wt, n+1 )
  call UltrasphericalQuadrature( n=n+1, lambda=lambda, &
    & pt=pt, wt=wt, quadType=quadType )
  u = SIN(4.0_DFP * pi * pt)
  uhat = UltrasphericalTransform(n=n, lambda=lambda, &
    & coeff=u, x=pt, w=wt, quadType=quadType)
  CALL afile%write(val="n="//tostring(n))
  CALL afile%write(val=uhat)
  CALL afile%write()

  CALL afile%deallocate()

end program main
```
