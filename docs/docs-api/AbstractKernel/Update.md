# Update

This subroutine update the state of the kernel.

```fortran
INTERFACE
  MODULE SUBROUTINE Update(obj, reset)
    CLASS(AbstractKernel_), INTENT(INOUT) :: obj
    LOGICAL(LGT), INTENT(IN) :: reset
  END SUBROUTINE Update
END INTERFACE
```
