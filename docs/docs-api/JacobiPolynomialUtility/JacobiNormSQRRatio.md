# JacobiNormSQRRatio

This function returns the ratio of Square norm of Jacobi polynomial `n+1/n`

This function returns the following:

$$
\Vert P_{n}^{\alpha,\beta}\Vert_{d\lambda}^{2}=\int_{-1}^{+1}P_{n}^
{\alpha,\beta}P_{n}^{\alpha,\beta}(1-x)^{\alpha}(1+x)^{\beta}dx
$$

```fortran
INTERFACE
  MODULE PURE FUNCTION JacobiNormSQRRatio(n, alpha, beta) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP), INTENT(IN) :: alpha
    REAL(DFP), INTENT(IN) :: beta
    REAL(DFP) :: ans
  END FUNCTION JacobiNormSQRRatio
END INTERFACE
```
