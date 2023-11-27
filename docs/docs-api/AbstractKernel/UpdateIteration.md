# UpdateIteration

This subroutine update the state of the kernel after an iteration.

```fortran
INTERFACE
  MODULE SUBROUTINE UpdateIteration(obj, reset)
    CLASS(AbstractKernel_), INTENT(INOUT) :: obj
    LOGICAL(LGT), INTENT(IN) :: reset
  END SUBROUTINE UpdateIteration
END INTERFACE
```
