This example shows the usage of `Chebyshev1GaussQuadrature` method.

This routine returns the quadrature points for Chebyshev1 polynom.

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: pt( : ), wt( : )
  type(string) :: msg, astr
  integer(i4b) :: ii

  do ii = 1, 10
    n = ii ; call callme
  end do
  
  contains
  subroutine callme
    call reallocate(pt, n, wt, n)
    call Chebyshev1GaussQuadrature( n=n, pt=pt, wt=wt )
    msg = char_lf// char_lf // "Chebyshev1 Gauss Quadrature n = " // tostring( n ) // char_lf // char_lf
    call display(msg%chars())
    astr = MdEncode( pt .COLCONCAT. wt )
    call display( astr%chars(), "" )
  end subroutine 
end program main
```

| pt          | wt     |
|-------------|--------|
| -0.86603    | 1.0472 |
| 1.03412E-13 | 1.0472 |
| 0.86603     | 1.0472 |
