# EvalallOrthopol

Evaluate orthogonal polynomials.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION EvalAllOrthopol(n, x, orthopol, alpha, beta, &
    & lambda) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of polynomial
    REAL(DFP), INTENT(IN) :: x(:)
    !! points of evaluation
    INTEGER(I4B), INTENT(IN) :: orthopol
    !! orthogonal polynomial family
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha
    !! alpha1 needed when orthopol1 is "Jacobi"
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta
    !! beta1 is needed when orthopol1 is "Jacobi"
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda
    !! lambda1 is needed when orthopol1 is "Ultraspherical"
    REAL(DFP) :: ans(SIZE(x), n + 1)
  END FUNCTION EvalAllOrthopol
END INTERFACE
```

:::note `n`
n denotes the order of polynomial space.
:::

:::note `x`
x denotes the 1D points of evaluation.
:::

:::note `orthopol`
Currently, we can specify following types of orthogonal polynomials:

- [x] Jacobi
- [x] Ultraspherical
- [x] Legendre
- [x] Chebyshev
- [x] Lobatto
- [x] UnscaledLobatto
:::

:::note `alpha, beta`
alpha and beta are parameters of Jacobi Polynomials. They should be present when `orthopol` is equal to `Jacobi`
:::

:::note `lambda`
`lambda` is parameter for Ultraspherical polynomials. They should be present when `orthopol` is equal to the `Ultraspherical`
:::

:::note `ans`

- The jth col of `ans` denotes the value of jth polynomial at all points.
- The ith row of `ans` denotes the value of all polynomials at ith point.
:::
