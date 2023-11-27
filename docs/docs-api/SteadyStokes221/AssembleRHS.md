# AssembleRHS

This procedure pointer assembles the right-hand-side vector.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE AssembleRHS(obj)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
  END SUBROUTINE AssembleRHS
END INTERFACE
```

## Example
