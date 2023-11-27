# ChebClenshaw

ClenShaw for Chebyshev polynomial expansion.

It returns :

$$
s(t) = 0.5 c_{0} + \sum_{i=1}^{n} c_{i} T_{j}(x)
$$

## Interface 1

```fortran
INTERFACE
  MODULE PURE FUNCTION ChebClenshaw(x, c) RESULT(ans)
    REAL(DFP), INTENT(IN) :: x
    REAL(DFP), INTENT(IN) :: c(0:)
    REAL(DFP) :: ans
  END FUNCTION ChebClenshaw
END INTERFACE
```

## Interface 2

```fortran
INTERFACE
  MODULE PURE FUNCTION ChebClenshaw(x, c) RESULT(ans)
    REAL(DFP), INTENT(IN) :: x(:)
    REAL(DFP), INTENT(IN) :: c(0:)
    REAL(DFP) :: ans(SIZE(x))
  END FUNCTION ChebClenshaw
END INTERFACE
```
