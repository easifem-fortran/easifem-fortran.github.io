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
  call LegendreQuadrature( n=n+1,  &
    & pt=pt, wt=wt, quadType=quadType )
  !!
  fval = func1(pt)
  !!
  D = LegendreDMatrix(n=n,  x=pt, quadType=quadType)
  !!
  CALL display(MdEncode(D), "D="//CHAR_LF)
```

D =

|         |              |             |              |             |          |
|---------|--------------|-------------|--------------|-------------|----------|
| -7.5    | 10.141       | -4.0362     | 2.2447       | -1.3499     | 0.5      |
| -1.7864 | -1.34059E-14 | 2.5234      | -1.1528      | 0.65355     | -0.23778 |
| 0.48495 | -1.7213      | 5.55112E-15 | 1.753        | -0.78636    | 0.2697   |
| -0.2697 | 0.78636      | -1.753      | -5.55112E-15 | 1.7213      | -0.48495 |
| 0.23778 | -0.65355     | 1.1528      | -2.5234      | 1.34059E-14 | 1.7864   |
| -0.5    | 1.3499       | -2.2447     | 4.0362       | -10.141     | 7.5      |

:::note
Structure of D for even D
:::

```fortran
  !!
  n = 6
  !!
  call reallocate( pt, n+1, wt, n+1, fval, n+1 )
  !!
  call LegendreQuadrature( n=n+1,  &
    & pt=pt, wt=wt, quadType=quadType )
  !!
  fval = func1(pt)
  !!
  D = LegendreDMatrix(n=n,  x=pt, quadType=quadType)
  !!
  CALL display(MdEncode(D), "D="//CHAR_LF)
```

D =

|          |              |             |             |              |             |          |
|----------|--------------|-------------|-------------|--------------|-------------|----------|
| -10.5    | 14.202       | -5.669      | 3.2         | -2.05        | 1.3174      | -0.5     |
| -2.4429  | -3.08087E-15 | 3.4558      | -1.5986     | 0.96134      | -0.60225    | 0.22661  |
| 0.62526  | -2.2158      | 2.27596E-15 | 2.2667      | -1.0664      | 0.61639     | -0.2261  |
| -0.3125  | 0.90754      | -2.007      | 3.83027E-15 | 2.007        | -0.90754    | 0.3125   |
| 0.2261   | -0.61639     | 1.0664      | -2.2667     | -2.27596E-15 | 2.2158      | -0.62526 |
| -0.22661 | 0.60225      | -0.96134    | 1.5986      | -3.4558      | 3.08087E-15 | 2.4429   |
| 0.5      | -1.3174      | 2.05        | -3.2        | 5.669        | -14.202     | 10.5     |

```fortran
  !!
  error = zeros(30, 2, 1.0_DFP)
  !!
  DO n = 1, SIZE(error,1)
    !!
    call reallocate( pt, n+1, wt, n+1, fval, n+1 )
    !!
    call LegendreQuadrature( n=n+1,  &
      & pt=pt, wt=wt, quadType=quadType )
    !!
    fval = func1(pt)
    !!
    D = LegendreDMatrix(n=n,  x=pt, quadType=quadType)
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
| 5        | 30.677      |
| 10       | 30.737      |
| 15       | 5.9239      |
| 20       | 8.60174E-02 |
| 25       | 1.11384E-04 |
| 30       | 1.93772E-07 |

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
