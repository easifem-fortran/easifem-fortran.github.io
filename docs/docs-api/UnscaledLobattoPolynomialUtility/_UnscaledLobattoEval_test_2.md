This example shows the usage of `UnscaledLobattoEval` method. 

This routine evaluates UnscaledLobatto polynomial of order n, at several points.

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ), allocatable :: ans(:), x(:), exact(:)
  real( dfp ), parameter :: tol=1.0E-08
  type(string) :: astr
  n = 5
  x = [-0.5, 0.5, 0.5]; call callme
  exact = (1.0_DFP/8.0_DFP/9.0_DFP)*(63.0*x**5-90.0*x**3+27.0*x)
  call ok( ALL(SOFTEQ(ans, exact, tol )))
  contains
  subroutine callme
    ans= UnscaledLobattoEval( n=n, x=x )
  end subroutine callme
end program main
```

