# JacobiMatrix

Returns Jacobi matrix.

## Interface 1

```fortran
INTERFACE
  MODULE PURE SUBROUTINE JacobiMatrix(alphaCoeff, betaCoeff, D, E)
    REAL(DFP), INTENT(IN) :: alphaCoeff(0:)
  !! size n, from 0 to n-1
    REAL(DFP), INTENT(IN) :: betaCoeff(0:)
  !! size n, from 0 to n-1
    REAL(DFP), INTENT(OUT) :: D(:)
  !! entry from 1 to n are filled
    REAL(DFP), INTENT(OUT) :: E(:)
  !! entry from 1 to n-1 are filled
  END SUBROUTINE JacobiMatrix
END INTERFACE
```
