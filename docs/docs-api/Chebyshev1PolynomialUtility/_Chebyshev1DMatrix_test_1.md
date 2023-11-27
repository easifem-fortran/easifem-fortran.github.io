- This example shows the usage of `Chebyshev1DMatrix` method.
- This routine yields the differentiation matrix, $D$.

In this example we consider

$$
f(x) = sin(4\pi x)
$$

```fortran
program main
  use easifembase
  use easifemclasses
  implicit none
  integer( i4b ) :: n, ii
  real(dfp), allocatable :: fval( : ), pt( : ), wt(:), &
    & f1val(:), error(:, :), D(:,:)
  real( dfp ), parameter :: tol=1.0E-10
  type(string) :: astr
  integer( i4b ), parameter :: quadType = GaussLobatto
```

:::note
Structure of D for odd N
:::

```fortran
  !!
  n = 5
  !!
  call reallocate( pt, n+1, wt, n+1, fval, n+1 )
  !!
  call Chebyshev1Quadrature( n=n+1,  &
    & pt=pt, wt=wt, quadType=quadType )
  !!
  fval = func1(pt)
  !!
  D = Chebyshev1DMatrix(n=n,  x=pt, quadType=quadType)
  !!
  CALL display(MdEncode(D), "D="//CHAR_LF)
```

D =

|          |          |         |          |          |          |
|----------|----------|---------|----------|----------|----------|
| -8.5     | 10.472   | -2.8944 | 1.5279   | -1.1056  | 0.5      |
| -2.618   | 1.1708   | 2       | -0.89443 | 0.61803  | -0.27639 |
| 0.72361  | -2       | 0.17082 | 1.618    | -0.89443 | 0.38197  |
| -0.38197 | 0.89443  | -1.618  | -0.17082 | 2        | -0.72361 |
| 0.27639  | -0.61803 | 0.89443 | -2       | -1.1708  | 2.618    |
| -0.5     | 1.1056   | -1.5279 | 2.8944   | -10.472  | 8.5      |

:::note
Structure of D for even D
:::

```fortran
  !!
  n = 6
  !!
  call reallocate( pt, n+1, wt, n+1, fval, n+1 )
  !!
  call Chebyshev1Quadrature( n=n+1,  &
    & pt=pt, wt=wt, quadType=quadType )
  !!
  fval = func1(pt)
  !!
  D = Chebyshev1DMatrix(n=n,  x=pt, quadType=quadType)
  !!
  CALL display(MdEncode(D), "D="//CHAR_LF)
```

D =

|          |          |          |             |          |          |          |
|----------|----------|----------|-------------|----------|----------|----------|
| -12.167  | 14.928   | -4       | 2           | -1.3333  | 1.0718   | -0.5     |
| -3.7321  | 1.7321   | 2.7321   | -1.1547     | 0.73205  | -0.57735 | 0.26795  |
| 1        | -2.7321  | 0.33333  | 2           | -1       | 0.73205  | -0.33333 |
| -0.5     | 1.1547   | -2       | 5.17058E-14 | 2        | -1.1547  | 0.5      |
| 0.33333  | -0.73205 | 1        | -2          | -0.33333 | 2.7321   | -1       |
| -0.26795 | 0.57735  | -0.73205 | 1.1547      | -2.7321  | -1.7321  | 3.7321   |
| 0.5      | -1.0718  | 1.3333   | -2          | 4        | -14.928  | 12.167   |

```fortran
  !!
  error = zeros(30, 2, 1.0_DFP)
  !!
  DO n = 1, SIZE(error,1)
    !!
    call reallocate( pt, n+1, wt, n+1, fval, n+1 )
    !!
    call Chebyshev1Quadrature( n=n+1,  &
      & pt=pt, wt=wt, quadType=quadType )
    !!
    fval = func1(pt)
    !!
    D = Chebyshev1DMatrix(n=n,  x=pt, quadType=quadType)
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

error=

| order(n) | MAX(err)    |
|----------|-------------|
| 1        | 17.772      |
| 2        | 21.766      |
| 3        | 25.133      |
| 4        | 28.364      |
| 5        | 22.41       |
| 10       | 31.339      |
| 15       | 3.7315      |
| 20       | 6.37404E-02 |
| 25       | 6.32687E-05 |
| 30       | 1.32593E-07 |

:::note
Define function
:::

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
