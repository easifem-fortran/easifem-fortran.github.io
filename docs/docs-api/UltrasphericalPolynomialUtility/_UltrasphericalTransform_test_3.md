This example shows the usage of `UltrasphericalTransform` method.

> In this example $\alpha=\beta=0.0$ (that is, proportional to Legendre polynomial)

```fortran
program main
  use easifembase
  integer( i4b ) :: n, ii
  real(dfp), allocatable :: uhat(:), u( : ), pt( : ), wt(:), fhat(:)
  real( dfp ), parameter :: lambda=0.5_DFP, tol=1.0E-10
  type(string) :: astr
  integer( i4b ), parameter :: quadType = GaussLobatto
  procedure(iface_1Dfunction), pointer :: f => NULL()
```

:::note
To make quadrature points we call `UltrasphericalQuadrature` routine, and specify `QuadType`.
:::

```fortran
  n = 10
  call reallocate( pt, n+1, wt, n+1, u, n+1 )
  call UltrasphericalQuadrature( n=n+1, lambda=lambda, &
    & pt=pt, wt=wt, quadType=quadType )
```

```fortran title "UltrasphericalTransformation"
  f => func1
  !!
  do ii = 1, size(u)
    u(ii) = f(pt(ii))
  end do
  !!
  uhat = UltrasphericalTransform(n=n, lambda=lambda, &
    & coeff=u, x=pt, w=wt, quadType=quadType)
  !!
  fhat = UltrasphericalTransform(n=n, lambda=lambda, &
    & f=f, quadType=quadType)
  !!
  call OK(ALL(SOFTEQ(fhat, uhat, tol)), "n=10")
  !!
```

```fortran
  contains
  pure function func1(x) result(ans)
    real(dfp), intent(in) :: x
    real(dfp) :: ans
    ans = SIN(4.0_DFP * pi * x)
  end function func1
```

```fortran
end program main
```
