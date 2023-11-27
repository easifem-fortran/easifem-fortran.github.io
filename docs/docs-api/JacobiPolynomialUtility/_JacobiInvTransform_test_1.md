This example shows the usage of `JacobiInvTransform` method.
This routine performs the inverse Jacobi transform at a single point.

> In this example $\alpha=\beta=0.0$ (that is, proportional to Legendre polynomial)

```fortran
program main
  use easifembase
  use easifemclasses
  implicit none
  integer( i4b ) :: n
  real(dfp), allocatable :: uhat(:), u( : ), pt( : ), wt(:)
  real( dfp ), parameter :: alpha=0.0_DFP, beta=0.0_DFP, tol=1.0E-10
  type(string) :: astr
  integer( i4b ), parameter :: quadType = GaussLobatto, maxN=50
  real( dfp ) :: x, ans, exact
  type(csvfile_) :: afile
  character( len=* ), parameter :: fname = "./results/test17"
```

```fortran
  CALL afile%initiate(filename=fname // ".csv", &
    & status="NEW", action="WRITE")
  CALL afile%open()
```

```fortran
  do n = 1, maxN
  !!n = 10
  call reallocate( pt, n+1, wt, n+1 )
  call JacobiQuadrature( n=n+1, alpha=alpha, beta=beta, &
    & pt=pt, wt=wt, quadType=quadType )
  u = SIN(4.0_DFP * pi * pt)
  uhat = JacobiTransform(n=n, alpha=alpha, beta=beta, coeff=u, &
    & x=pt, w=wt, quadType=quadType)
  x = 0.1
  exact = SIN(4.0_DFP * pi * x)
  ans = JacobiInvTransform(n=n, alpha=alpha, beta=beta, &
    & x=x, coeff=uhat)
  CALL afile%write( val=n, advance="NO")
  CALL afile%write( val=ABS(exact-ans), advance="YES")
  end do
```

```fortran
  CALL afile%deallocate()
```

```fortran
end program main
```
