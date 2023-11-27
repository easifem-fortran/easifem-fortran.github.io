# Deallocate

Deallocate the memory occupied by the abstract lin solver.

## Interface

```fortran
INTERFACE
  SUBROUTINE Deallocate(obj)
    IMPORT :: AbstractLinSolver_
    CLASS(AbstractLinSolver_), INTENT(INOUT) :: obj
  END SUBROUTINE Deallocate
END INTERFACE
```


