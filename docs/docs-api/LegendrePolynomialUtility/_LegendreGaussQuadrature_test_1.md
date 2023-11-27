This example shows the usage of `LegendreGaussQuadrature` method.

This routine returns the quadrature points for Legendre polynom.

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: pt( : ), wt( : )
  type(string) :: msg, astr
  n = 5
  call reallocate( pt, n, wt, n )
  call LegendreGaussQuadrature( n=n, pt=pt, wt=wt )
  msg = "Legendre Gauss Quadrature n = " // tostring( n )
  call display(msg%chars())
  astr = MdEncode( pt .COLCONCAT. wt )
  call display( astr%chars(), "" )
end program main
```

Zeros of J(x), n = 5 alpha=0 beta=0

| pt           | wt      |
|--------------|---------|
| -0.90618     | 0.23693 |
| -0.53847     | 0.47863 |
| -1.56541E-16 | 0.56889 |
| 0.53847      | 0.47863 |
| 0.90618      | 0.23693 |
