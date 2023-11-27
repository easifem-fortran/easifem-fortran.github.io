This example shows the usage of `JacobiGradientEvalAll` method.

> In this example $\alpha=\beta=0.0$ (that is, proportional to Legendre polynomial)

```fortran
program main
  use easifembase
  use easifemclasses
  implicit none
  integer( i4b ) :: n, ii
  real( dfp ), allocatable :: exact(:,:), ans(:,:), x(:)
  real( dfp ), parameter :: alpha=0.0_DFP, beta=0.0_DFP, tol=1.0E-10
  type(string) :: astr
```

```fortran
  !!
  n=5
  x = [-0.1, 0.0, 0.1]
  exact = LegendreGradientEvalAll(n=n, x=x)
  ans = JacobiGradientEvalAll(n=n, alpha=alpha, beta=beta, x=x)
  call OK( ALL(SOFTEQ( exact, ans, tol)), "")
  !!
  n=10
  x = [-0.1, 0.0, 0.1]
  exact = LegendreGradientEvalAll(n=n, x=x)
  ans = JacobiGradientEvalAll(n=n, alpha=alpha, beta=beta, x=x)
  call OK( ALL(SOFTEQ( exact, ans, tol)), "")
  !!
```

```fortran
end program main
```
