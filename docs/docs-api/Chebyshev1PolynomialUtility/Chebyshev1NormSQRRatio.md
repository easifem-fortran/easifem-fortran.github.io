# Chebyshev1NormSQRRatio

This function returns the ratio of Square norm of Chebyshev1 polynomial `n+1/n`

```fortran
INTERFACE
  MODULE PURE FUNCTION Chebyshev1NormSQRRatio(n) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP) :: ans
  END FUNCTION Chebyshev1NormSQRRatio
END INTERFACE
```
