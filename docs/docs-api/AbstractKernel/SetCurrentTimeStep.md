# SetCurrentTimeStep

Set the current time step of simulation.

```fortran
INTERFACE
  MODULE SUBROUTINE SetCurrentTimeStep(obj, its)
    CLASS(AbstractKernel_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: its
  END SUBROUTINE SetCurrentTimeStep
END INTERFACE
```
