- This example shows the usage of `Chebyshev1GaussQuadrature` method.
- This routine returns the quadrature points for Chebyshev1 polynom.

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: pt( : )
  type(string) :: msg, astr
  n = 4
  call reallocate( pt, n )
  call Chebyshev1GaussQuadrature( n=n, pt=pt )
  msg = "Chebyshev1 Gauss Quadrature n = " // tostring( n )
  call display(msg%chars())
  astr = MdEncode( pt )
  call display( astr%chars(), "" )
end program main
```

Chebyshev1 Gauss Quadrature n = 4

|  |  |  |  |
|  --- |  --- |  --- |  --- |
| -0.92388 | -0.38268 | 0.38268 | 0.92388 |
