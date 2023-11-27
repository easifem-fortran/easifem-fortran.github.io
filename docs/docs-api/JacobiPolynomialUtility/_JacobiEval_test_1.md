This example shows the usage of `JacobiEval` method.
This routine evaluates Jacobi polynomial of order n, at single point

> In this example $\alpha=\beta=0.0$ (that is, Legendre polynomial)

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real( dfp ) :: ans, x, exact
  real( dfp ), parameter :: alpha=0.0_DFP, beta=0.0_DFP, tol=1.0E-10
```

```fortran title "Jacobi-Gauss"
  n = 3
  x = -1.0_DFP; call callme
  exact = 0.5_DFP*(5.0 * x**3 - 3.0*x)
  call ok( SOFTEQ(ans, exact, tol ))
  x = 0.0_DFP; call callme
  exact = 0.5_DFP*(5.0 * x**3 - 3.0*x)
  call ok( SOFTEQ(ans, exact, tol ))
  x = +1.0_DFP; call callme
  exact = 0.5_DFP*(5.0 * x**3 - 3.0*x)
  call ok( SOFTEQ(ans, exact, tol ))
```

```fortran
  contains
  subroutine callme
    ans= JacobiEval( n=n, alpha=alpha, beta=beta, x=x )
  end subroutine callme
```

```fortran
end program main
```
