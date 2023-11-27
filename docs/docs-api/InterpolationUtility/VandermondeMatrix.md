# VandermondeMatrix

This function returns the vandermonde matrix for monomial basis.

Calling example

```fortran
V = VandermondeMatrix(order, x)
```

## Interface

```fortran
  MODULE PURE FUNCTION VandermondeMatrix(order, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    REAL(Real32 | Real64) , INTENT(IN) :: x(:)
    REAL(Real32 | Real64)  :: ans(SIZE(x), order + 1)
  END FUNCTION VandermondeMatrix
```

$$
V(i,j) = x(i)^{j-1}
$$
