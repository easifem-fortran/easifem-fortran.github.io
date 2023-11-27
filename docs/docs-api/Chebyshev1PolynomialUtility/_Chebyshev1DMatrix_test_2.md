- This example shows the usage of `Chebyshev1DMatrix` method.
- This routine yields the differentiation matrix, $D$.

In this example we consider:

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
  integer( i4b ), parameter :: quadType = Gauss
```

```fortran title "Structure of D for odd N"
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
  fval = 1.0_DFP
  !!
  CALL display(MdEncode(D), "D="//CHAR_LF)
```

D =

|          |          |         |         |          |          |
|----------|----------|---------|---------|----------|----------|
| -7.2098  | 10.556   | -5.2779 | 3.0472  | -1.633   | 0.51764  |
| -1.4142  | -0.70711 | 3.0472  | -1.4142 | 0.70711  | -0.21878 |
| 0.37894  | -1.633   | -0.1387 | 1.9319  | -0.75787 | 0.21878  |
| -0.21878 | 0.75787  | -1.9319 | 0.1387  | 1.633    | -0.37894 |
| 0.21878  | -0.70711 | 1.4142  | -3.0472 | 0.70711  | 1.4142   |
| -0.51764 | 1.633    | -3.0472 | 5.2779  | -10.556  | 7.2098   |

```fortran title "Structure of D for even D"
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

|          |          |          |              |         |          |          |
|----------|----------|----------|--------------|---------|----------|----------|
| -9.8447  | 14.511   | -7.4835  | 4.6095       | -2.874  | 1.5949   | -0.51286 |
| -1.8483  | -1.0056  | 4.153    | -2.0514      | 1.1886  | -0.63952 | 0.20316  |
| 0.45649  | -1.9889  | -0.26725 | 2.5581       | -1.1524 | 0.56923  | -0.17531 |
| -0.22824 | 0.79747  | -2.0765  | -5.17058E-14 | 2.0765  | -0.79747 | 0.22824  |
| 0.17531  | -0.56923 | 1.1524   | -2.5581      | 0.26725 | 1.9889   | -0.45649 |
| -0.20316 | 0.63952  | -1.1886  | 2.0514       | -4.153  | 1.0056   | 1.8483   |
| 0.51286  | -1.5949  | 2.874    | -4.6095      | 7.4835  | -14.511  | 9.8447   |

```fortran title "Test"
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

|    |             |
|----|-------------|
| 1  | 0.39506     |
| 2  | 2.7829      |
| 3  | 1.3654      |
| 4  | 4.0853      |
| 5  | 2.111       |
| 10 | 4.026       |
| 15 | 1.0607      |
| 20 | 1.1941      |
| 25 | 0.20162     |
| 30 | 0.21641     |

```fortran title "Define function"
  contains
  elemental function func1(x) result(ans)
    real(dfp), intent(in) :: x
    real(dfp) :: ans
    ans = 1.0/(1.0 + 16.0*x**2)
  end function func1
  !!
  elemental function dfunc1(x) result(ans)
    real(dfp), intent(in) :: x
    real(dfp) :: ans
    ans = -32.0 * x * func1(x)**2
  end function dfunc1
```

```fortran
end program main
```
