This example shows the usage of `JacobiTransform` method which is defined in [[JacobiPolynomialUtility]] MODULE. This routine performs the forward Jacobi transform of column data.

> In this example $\alpha=\beta=0.0$ (that is, proportional to Legendre polynomial)

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real(dfp), allocatable :: uhat(:, :), u( :, : ), pt( : ), wt(:)
  real( dfp ), parameter :: alpha=0.0_DFP, beta=0.0_DFP, tol=1.0E-10
  type(string) :: astr
  integer( i4b ), parameter :: quadType = GaussLobatto
```

```fortran
  n = 10
  call reallocate( pt, n+1, wt, n+1 )
  call JacobiQuadrature( n=n+1, alpha=alpha, beta=beta, &
    & pt=pt, wt=wt, quadType=quadType )
  u = SIN(4.0_DFP * pi * pt) .COLCONCAT. SIN(4.0_DFP * pi * pt)
  uhat = JacobiTransform(n=n, alpha=alpha, beta=beta, coeff=u, &
    & x=pt, w=wt, quadType=quadType)
  CALL Display(uhat, "uhat=")
```

```fortran
end program main
```
