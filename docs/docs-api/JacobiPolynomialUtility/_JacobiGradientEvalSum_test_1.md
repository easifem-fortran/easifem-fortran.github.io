This example shows the usage of `JacobiGradientEvalSum` method. 
This routine evaluates the gradient of finite sum of Jacobi polynomial of order upto n at several points.

$$
s(x) = \sum_{n=0}^{n=N}{c_n P_{n}^{(\alpha, \beta)}(x)}
$$

$$
\frac{ds(x)}{dx} = \sum_{n=0}^{n=N}{c_n \frac{d}{dx}P_{n}^{(\alpha, \beta)}(x)}
$$

> In this example $\alpha=\beta=0.0$ (that is, proportional to Legendre polynomial)

```fortran
program main
  use easifembase
  implicit none
  integer( i4b ) :: n
  real(dfp), allocatable :: coeff(:), ans(:), x(:), exact(:)
  real( dfp ), parameter :: alpha=0.0_DFP, beta=0.0_DFP, tol=1.0E-10
  type(string) :: astr
```

```fortran
  n = 3
  coeff = [1.0, 0.0, 0.0, 0.0]
  x = [0.5_DFP, -0.5_DFP];
  ans = JacobiGradientEvalSum(n=n, x=x, alpha=alpha, &
    & beta=beta, coeff=coeff)
  exact = LegendreGradientEval(n=0_I4B, x=x)
  call ok( ALL(SOFTEQ(ans, exact, tol )))
```

```fortran
  n = 3
  coeff = [0.0, 1.0, 0.0, 0.0]
  x = [0.5_DFP, -0.5_DFP];
  ans = JacobiGradientEvalSum(n=n, x=x, alpha=alpha, &
    & beta=beta, coeff=coeff)
  exact = LegendreGradientEval(n=1_I4B, x=x)
  call ok( ALL(SOFTEQ(ans, exact, tol )))
```

```fortran
  n = 3
  coeff = [0.0, 0.0, 0.0, 1.0]
  x = [0.5_DFP, -0.5_DFP];
  ans = JacobiGradientEvalSum(n=n, x=x, alpha=alpha, &
    & beta=beta, coeff=coeff)
  exact = LegendreGradientEval(n=3_I4B, x=x)
  call ok( ALL(SOFTEQ(ans, exact, tol )))
```

```fortran
end program main
```
