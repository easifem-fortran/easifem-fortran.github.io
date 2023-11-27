# SetTolerance

SEt the tolerance.

## Interface

```fortran
INTERFACE
  MODULE PURE SUBROUTINE SetTolerance(obj, atol, rtol)
    CLASS(AbstractLinSolver_), INTENT(INOUT) :: obj
    REAL(DFP), OPTIONAL, INTENT(IN) :: atol
    REAL(DFP), OPTIONAL, INTENT(IN) :: rtol
  END SUBROUTINE SetTolerance
END INTERFACE
```
