- This example shows the usage of `JacobiDMatrix` method.
- This routine yields the differentiation matrix, $D$.

> In this example $\alpha=\beta=0.0$ (that is, proportional to Legendre polynomial)

```fortran
program main
  use easifembase
  use easifemclasses
  implicit none
  integer( i4b ) :: n, ii
  real(dfp), allocatable :: fval( : ), pt( : ), wt(:), &
    & f1val(:), error(:, :), D(:,:)
  real( dfp ), parameter :: alpha=0.0_DFP, beta=0.0_DFP, tol=1.0E-10
  type(string) :: astr
  integer( i4b ), parameter :: quadType = GaussLobatto
```

:::note
In this example we consider

$$
f(x) = sin(4\pi x)
$$
:::

```fortran title "Prepare quadratures"
  !!
  error = zeros(30, 2, 1.0_DFP)
  !!
  DO n = 1, SIZE(error,1)
    !!
    call reallocate( pt, n+1, wt, n+1, fval, n+1 )
    !!
    call JacobiQuadrature( n=n+1, alpha=alpha, beta=beta, &
      & pt=pt, wt=wt, quadType=quadType )
    !!
    fval = func1(pt)
    !!
    D = JacobiDMatrix(n=n, alpha=alpha, &
      & beta=beta, x=pt, quadType=quadType)
    !!
    f1val = dfunc1(pt)
    !!
    error(n,1) = n
    error(n,2) = NORM2( ABS(f1val-MATMUL(D,fval)) )
    !!
  END DO
  !!
  CALL display( MdEncode(error), "error=")
```

<details>
<summary>See results</summary>
<div>

error=

| order(n) | MAX(err)    |
|----------|-------------|
| 1 | 17.772 |
| 2 | 21.766 |
| 5 | 30.677 |
| 10 | 30.737 |
| 15 | 5.9239 |
| 20 | 8.60174E-02 |
| 25 | 1.11384E-04 |
| 30 | 1.93772E-07 |

</div>
</details>

```fortran
  contains
  elemental function func1(x) result(ans)
    real(dfp), intent(in) :: x
    real(dfp) :: ans
    ans = SIN(4.0_DFP * pi * x)
  end function func1
  !!
  elemental function dfunc1(x) result(ans)
    real(dfp), intent(in) :: x
    real(dfp) :: ans
    ans = 4.0_DFP * pi * COS(4.0_DFP * pi * x)
  end function dfunc1
```

```fortran
end program main
```
