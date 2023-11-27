# IsSteadyState

Returns true if steady state is achieved.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION isSteadyState(obj) RESULT(Ans)
    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isSteadyState
END INTERFACE
```
