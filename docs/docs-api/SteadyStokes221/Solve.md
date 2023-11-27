# Solve

This subroutine solves the system of linear equation.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE Solve(obj)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
  END SUBROUTINE Solve
END INTERFACE
```

## Example
