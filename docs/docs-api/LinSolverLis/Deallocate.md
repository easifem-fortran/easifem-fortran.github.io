# Deallocate

Deallocate the memory occupied by the abstract lin solver.

## Interface

```fortran
INTERFACE
  SUBROUTINE Deallocate(obj)
    CLASS(LinSolverLis_), INTENT(INOUT) :: obj
  END SUBROUTINE Deallocate
END INTERFACE
```
