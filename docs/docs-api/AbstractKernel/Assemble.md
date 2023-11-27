# Assemble

This subroutine assembles the system of linear equation.

```fortran
INTERFACE
  MODULE SUBROUTINE Assemble(obj)
    CLASS(AbstractKernel_), INTENT(INOUT) :: obj
  END SUBROUTINE Assemble
END INTERFACE
```
