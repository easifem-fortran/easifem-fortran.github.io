# IsConverged

This subroutine returns true if the iteration in the kernel is converged.

```fortran
INTERFACE
  MODULE FUNCTION isConverged(obj) RESULT(Ans)
    CLASS(AbstractKernel_), INTENT(INOUT) :: obj
    LOGICAL(LGT) :: Ans
  END FUNCTION isConverged
END INTERFACE
```
