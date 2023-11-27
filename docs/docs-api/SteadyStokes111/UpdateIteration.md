# UpdateIteration

This subroutine update the state of the kernel

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE UpdateIteration(obj, reset)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    LOGICAL(LGT), INTENT(IN) :: reset
  END SUBROUTINE UpdateIteration
END INTERFACE
```

## Example
