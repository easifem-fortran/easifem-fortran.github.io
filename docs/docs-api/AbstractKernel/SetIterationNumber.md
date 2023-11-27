# SetIterationNumber

Set the current iteration number of simulation.

```fortran
INTERFACE
  MODULE SUBROUTINE SetIterationNumber(obj, iter)
    CLASS(AbstractKernel_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: iter
  END SUBROUTINE SetIterationNumber
END INTERFACE
```
