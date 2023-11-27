# Update

This subroutine Updates the system of linear equation

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE Update(obj, reset)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    LOGICAL(LGT), INTENT(IN) :: reset
  END SUBROUTINE Update
END INTERFACE
```

## Example
