# IsConverged

Returns true if steady state is achieved.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION isConverged(obj) RESULT(Ans)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isConverged
END INTERFACE
```

## Example
