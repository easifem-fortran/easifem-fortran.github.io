# AssembleRHS

This subroutine assembles the right-hand side vector for solving linear equation.

```fortran
INTERFACE
  MODULE SUBROUTINE AssembleRHS(obj)
    CLASS(AbstractKernel_), INTENT(INOUT) :: obj
  END SUBROUTINE AssembleRHS
END INTERFACE
```
