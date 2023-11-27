- This example shows the usage of `UltrasphericalInvTransform` method.
- This routine performs the inverse Ultraspherical transform at a single point.

> In this example $\lambda=0.5$ (that is, proportional to Legendre polynomial)

```fortran
program main
  use easifembase
  use easifemclasses
  implicit none
  integer( i4b ) :: n
  real(dfp), allocatable :: uhat(:), u( : ), pt( : ), wt(:)
  real( dfp ), parameter :: lambda=0.5_DFP, tol=1.0E-10
  type(string) :: astr
  integer( i4b ), parameter :: quadType = GaussLobatto, maxN=50
  real( dfp ) :: x, ans, exact
  type(csvfile_) :: afile
  character( len=* ), parameter :: fname = "./results/test23"
  CALL afile%initiate(filename=fname // ".csv", &
    & status="NEW", action="WRITE")
  CALL afile%open()
  do n = 1, maxN
    !!n = 10
    call reallocate( pt, n+1, wt, n+1 )
    call UltrasphericalQuadrature( n=n+1, lambda=lambda, &
      & pt=pt, wt=wt, quadType=quadType )
    u = SIN(4.0_DFP * pi * pt)
    uhat = UltrasphericalTransform(n=n, lambda=lambda, coeff=u, &
      & x=pt, w=wt, quadType=quadType)
    x = 0.1
    exact = SIN(4.0_DFP * pi * x)
    ans = UltrasphericalInvTransform(n=n, lambda=lambda, &
      & x=x, coeff=uhat)
    CALL afile%write( val=n, advance="NO")
    CALL afile%write( val=ABS(exact-ans), advance="YES")
  end do
  CALL afile%deallocate()
end program main
```
